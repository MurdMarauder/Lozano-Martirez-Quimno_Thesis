import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen App">
      <div className="flex-grow">
      <div className="min-h-screen App-background">
        <p className="mb-10 Title-font">
          Using Pre-Trained YOLOv4 in Counting and Classifiying Vehicles through Web Application
        </p>

          {/* <input 
            class="
            mt-20
            bg-gradient-to-br from-gray-600 to-gray-700
            text-white/80
            rounded-full
            cursor-pointer
            shadow-xl shadow-gray-700/60
            "
            type="file"
          /> */}
          <div className="flex flex-col items-center justify-center w-3/4 h-32 bg-white border-2 border-gray-400 border-dashed rounded-lg">
          <label for="image-upload" className="cursor-pointer">
            <div className="flex flex-col items-center">
              <i className="mb-2 text-2xl text-gray-400 fas fa-cloud-upload-alt">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                
                {/* ICON */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>

              </i>
              <p className="text-sm text-gray-400">Drop Image Here</p>
            </div>
          </label>
          <input type="file" id="image-upload" className="hidden" accept="image/*" />
        </div>



          </div>

        </div>
          <footer className="py-4 footer">
          Ateneo de Davao University - Computer Science Thesis - Lozano, Martirez, Quimno
        </footer>
        
    </div>
  );
}

export default App;
