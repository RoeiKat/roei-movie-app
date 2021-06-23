import {useState} from 'react';
import Navbar from "./components/UI/Navbar";
import MovieContainer from "./components/MovieContainer";
import Modal from "./components/UI/Modal";
import "./App.css";

function App() {
  const [modalData, setModalData] = useState();
  const [showDetail, setShowDetail] = useState(false);

  const showDetailHandler = (data) => {
    setModalData(data);
    setShowDetail(true);
  };

  const hideShowDetailHandler = () => {
    setShowDetail(false);
  };


  return (
    <div className="App">
      {showDetail && <Modal data={modalData} onClose={hideShowDetailHandler}/>}
      <Navbar />
      <MovieContainer onShowMore={showDetailHandler}/>
    </div>
  );
}

export default App;
