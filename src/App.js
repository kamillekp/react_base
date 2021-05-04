import React from 'react';
import './global.scss'

import PromotionCard from './components/Promotion/Card/index';
 
function App() {
  const promotion = {
    "id": 1,
    "title": "Notebook Samsung Flash F30 Intel Dual Core - 4GB 64GB SSD 13,3”",
    "price": 2900,
    "imageUrl": "https://images.samsung.com/is/image/samsung/br-notebook-flash-f30-np530xbb-ad3br-np530xbb-ad3br-Aquarela-152176151?$720_576_PNG$",
    "url": "https://www.amazon.com.br/Notebook-Samsung-F30-Celeron-Windows/dp/B07QZ7S338",
    "comments": [
      {
        "id": 1,
        "comment": "Full HD LED | Windows 10"
      }
    ]
  }

  return (
    <div className="App">
      <div className='smoller_app'>
        <PromotionCard promotion={promotion} />
      </div>
    </div>
  );
}

export default App;
