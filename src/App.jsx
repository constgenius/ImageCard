import ImageCard from "./components/ImageCard"
import image from "./assets/1.jpg"
import image1 from "./assets/2.jpg"

import { Heart, Bookmark, Share2, MessageCircle } from "react-feather"


function App() {

  return (
    <>
      <main className="flex justify-center items-center h-screen bg-black gap-5 p-4">
        <ImageCard imgSrc={image}>
          <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
          <p className="hidden md:block"> She danced through life with a radiant smile, her laughter echoing joy in every step.
          </p>
          <div className="mt-4 flex justify-between">
            <div className="space-x-4">
              <button>
                <Heart />
              </button>
              <button>
                <MessageCircle />
              </button>
              <button>
                <Share2 />
              </button>
            </div>
            <div>
              <button>
                <Bookmark />
              </button>
            </div>
          </div>
        </ImageCard>
        <ImageCard imgSrc={image1}>
          <h3 className="text-xl font-bold mb-2">Smiling Girl</h3>
          <p className="hidden md:block">  With a radiant smile as bright as the summer sun, she joyfully savored her ice cream, savoring each delightful lick as if it were the sweetest moment of her day.
          </p>
          <div className="mt-4 flex justify-between">
            <div className="space-x-4">
              <button>
                <Heart />
              </button>
              <button>
                <MessageCircle />
              </button>
              <button>
                <Share2 />
              </button>
            </div>
            <div>
              <button>
                <Bookmark />
              </button>
            </div>
          </div>
        </ImageCard>
      </main>
    </>
  )
}

export default App
