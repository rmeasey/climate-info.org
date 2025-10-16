import { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Col, Button } from 'reactstrap'
import Reference from './Reference'

export default function ImageAnimator({src, title, width, height}) {

  const containerRef = useRef(null)
  const startRef = useRef(null)
  const stopRef = useRef(null)
  const sliderRef = useRef(null)
  const canvasRef = useRef(null)
  
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  const [componentWidth, setComponentWidth] = useState(width ?? 800)
  const [componentHeight, setComponentHeight] = useState(height ?? 480)
  const [loadingClass, setLoadingClass] = useState("loading-hide")
  const [cardBodyClass, setCardBodyClass] = useState("card-normal")
  const [canvasClass, setCanvasClass] = useState("canvas-normal")
  const [containerClass, setContainerClass] = useState("animationButtonContainer-fullscreen")
  const [modal, setModal] = useState(false);
  const aspectRatio = componentHeight / componentWidth

  const toggleAnimation = () => {
    modal ? setCardBodyClass('card-normal') :  setCardBodyClass('card-fullscreen')
    modal ? setCanvasClass('canvas-normal') :  setCanvasClass('canvas-fullscreen')
    modal ? setContainerClass('animationButtonContainer-normal') :  setContainerClass('animationButtonContainer-fullscreen')
    setModal(!modal)
  }
  
  const handleEscape = ({ code }) => {
    if (modal) {
      toggleAnimation()    
    }
  }

  useEffect(() => {
      const resizeObserver = new ResizeObserver((event) => {
      if (!isLoading && !isPlaying && !modal) {
        console.log('resizeObserver', resizeObserver)
          let newWidth = (event[0].contentBoxSize[0].inlineSize - 130)/event[0].target.childElementCount
          let newHeight = newWidth * aspectRatio
          if (newWidth !== componentWidth) {
            setComponentWidth(newWidth)
            setComponentHeight(newHeight)            
            sliderRef.width = newWidth - 78
            if(currentImage !== null && canvasRef.current !== null) {   
              const context = canvasRef.current.getContext("2d")
              context.drawImage(currentImage, 0, 0, newWidth, newHeight)
            }
          }
        }
      })
      resizeObserver.observe(containerRef.current.parentElement)
  })

  useEffect(() => {
    
    const root = 'https://services.swpc.noaa.gov/'
    const stopButton = stopRef.current
    const startButton = startRef.current
    const slider = sliderRef.current
    const canvas = canvasRef.current
    
    slider.min = 0
    slider.value = 0
    stopButton.style.display = "none"

    let localIndex = 0
    let localCount = 0
    let refreshIntervalId = null
    let imageData = []
    let imageArray = []
    let isStopped = true
    let localHasLoaded = hasLoaded

    if (imageData.length === 0) {
      fetch(src)
      .then(response => response.json())
      .then(data => {
        localCount = data.length
        slider.max = localCount - 1
        imageData = data    

        // Drawing the initial images on the canvas
        const drawInitialImage = (imgSrc) => {
          if (isStopped) {
          const img = new Image()
          img.src = imgSrc
          img.onload = function () {
            const context = canvas.getContext("2d")    
            context.drawImage(img, 0, 0, canvas.clientWidth, canvas.clientHeight)
          }
          setCurrentImage(img)
        }
        }

        //preloading images 
        const preloadImages = () => {
          for (let i = 0; i < imageData.length; i++) {
            const img = new Image()
            img.alt = imageData[i].time_tag
            img.src = root + imageData[i].url
            imageArray.push(img)
          }
        }

        //update images
        const updateImage = (index) => {
          if (!isStopped) {
            setCurrentImage(imageArray[index])
            let img = imageArray[index]
            img.width = canvas.clientWidth
            img.height = canvas.clientHeight
            canvas.width = canvas.clientWidth
            canvas.height = canvas.clientHeight
            const context = canvas.getContext("2d")    
            context.drawImage(img, 0, 0, canvas.clientWidth, canvas.clientHeight)
          }
        }

        const nextFrame = () => {
          if (!isStopped && localHasLoaded) {
            localIndex = localIndex < localCount - 1 ? localIndex + 1 : 0
            requestAnimationFrame(() => updateImage(localIndex))
            slider.value = localIndex
          }
        }

        const loadData = () => {
          setLoadingClass('loading-show')
          preloadImages()
          localHasLoaded = true
          setHasLoaded(true)
          setLoadingClass('loading-hide')
        }

        const startAnimation = (e) => {
          console.log(localHasLoaded)
          if (!localHasLoaded) {
            loadData()
          } else {
            stopButton.style.display = ""
            startButton.style.display = "none"
            isStopped = false
            setIsPlaying(true)
          }
        }

        const stopAnimation = (e) => {
          startButton.style.display = ""
          stopButton.style.display = "none"
          isStopped = true
          setIsPlaying(false)
        }
          
        const handleRangeChange = (e) => {
          localIndex = parseInt(e.target.value)
          requestAnimationFrame(() => updateImage(localIndex))
        }

        startButton.addEventListener("click", startAnimation)
        stopButton.addEventListener("click", stopAnimation)
        slider.addEventListener("change", handleRangeChange)

        if (imageData.length > 0) {
          drawInitialImage(root + imageData[0].url)
          refreshIntervalId = setInterval(nextFrame, 100)
        } else {
          drawInitialImage('/nodata.jpg')
        }
        setIsLoading(false)
          
        // Remove the event listeners
        return () => {
          if (startButton) {
            startButton.removeEventListener('click', startAnimation)
          }
          if (stopButton) {
            stopButton.removeEventListener("click", stopAnimation)
          }
          setInterval(function() {
            clearInterval(refreshIntervalId)
          }, 5)
        }
      })
    }
  }, [hasLoaded, src])

  return (
    <Col ref={containerRef}>
      <Card>
        <CardHeader>
          <h3>{title}</h3>
           <Reference title={title}/>
        </CardHeader>
        <CardBody className={cardBodyClass} onKeyDown={handleEscape}>                 
          <div className="png__sequence" style={{width:"100%", height:"100%"}}>
            <div className={loadingClass}>Loading...</div>
            <canvas ref={canvasRef} width={componentWidth} height={componentHeight} className={canvasClass} id="canvas" onClick={handleEscape}> </canvas> 
            <div className={containerClass}>
              <div className="btn btn-grey" ref={startRef} id="startButton">
                <i className="bi bi-play-fill" style={{fontSize:"2em"}} title="Start Animation"/>
              </div>
              <div className="btn btn-grey" ref={stopRef} id="stopButton">
                <i className="bi bi-pause-fill" style={{fontSize:"2em"}} title="Pause Animation"/>
              </div>
              <input ref={sliderRef} className="btn btn-grey" type="range" id="slider"></input>
            </div>  
          </div>
  
        </CardBody>
        <CardFooter style={{padding:"0"}}> 
           {hasLoaded ? (
            <Button color="grey" onClick={toggleAnimation}>Open Full Screen</Button>    
           ) : (
            <h5>Press the play button to load the data</h5>
           )}   
        </CardFooter>
      </Card>
    </Col>
  )
}



