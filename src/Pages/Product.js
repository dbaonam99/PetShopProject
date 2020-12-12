import '../App.css';
import Header from '../components/Home/Header'; 
import Newsletter from '../components/Home/Newsletter';
import Footer from '../components/Home/Footer'; 
import ProductDetail from '../components/Shop/ProductDetail';
import ShopFeatures from '../components/Shop/ShopFeatures';
import ProductAsk from '../components/Shop/ProductAsk';
import ProductRecommend from '../components/Shop/ProductRecommend';
import ProductReview from '../components/Shop/ProductReview';
import ProductNews from '../components/Shop/ProductNews';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';

function ProductForDog(props) { 

  let product = {}
  if (props.location.pathname === '/dog')
    product = {
    productName: 'GPS Tracker cho chó',
    productRating: [
      {
          ratingName: 'Brian Fry',
          ratingTitle: 'Very pleased with the tracker',
          ratingContent: 'Very pleased with the tracker, it is easy to use anworth the money.',
          ratingStart: 4
      }
    ],
    productColor: [
      {
          name: 'White',
          productImg: [
              "https://tractive.com/static/images/product-images/trnjawh/tractive-gps-dog-4-packaging-en-400w.jpg",
              "https://tractive.com/static/images/product-images/trnjawh/tractive-gps-dog-4-tracker-400w.jpg",
              "https://tractive.com/static/images/product-images/trnjawh/tractive-gps-dog-4-tracker-front-400w.jpg",
              "https://tractive.com/static/images/product-images/trnjawh/tractive-gps-dog-4-tracker-top.jpg",
              "https://tractive.com/static/images/product-images/trnjawh/tractive-gps-dog-4-tracker-back-400w.jpg", 
          ]
      },
      {
          name: 'Pink',
          productImg: [
              "https://tractive.com/static/images/product-images/trnjapi/tractive-gps-dog-4-pink-packaging-en-400w.jpg",
              "https://tractive.com/static/images/product-images/trnjapi/tractive-gps-dog-4-pink-tracker-400w.jpg",
              "https://tractive.com/static/images/product-images/trnjapi/tractive-gps-dog-4-pink-tracker-front-400w.jpg",
              "https://tractive.com/static/images/product-images/trnjapi/tractive-gps-dog-4-pink-tracker-top-400w.jpg",
              "https://tractive.com/static/images/product-images/trnjapi/tractive-gps-dog-4-pink-tracker-back-400w.jpg", 
          ]
      }
    ],
    productFeature: [
      "Theo dõi vị trí và giám sát hoạt động trên toàn thế giới",
      "Chế độ TRỰC TIẾP - cập nhật vị trí cứ sau 2-3 giây",
      "Nhận thông báo nếu con chó của bạn đi lang thang quá xa nhà",
      "Tận hưởng trải nghiệm theo dõi tốt nhất với công nghệ mạng mới nhất",
      "100% không thấm nước và chống va đập",
      "Pin lâu dài lên đến 5 ngày",
    ],
    productDes: "Gặp gỡ thiết bị theo dõi GPS mới nhất của chúng tôi dành cho chó - thiết bị theo dõi chó với độ chính xác và tuổi thọ pin tốt hơn. Nó kết hợp công nghệ mạng mới nhất với các tính năng phổ biến nhất của chúng tôi để bạn yên tâm hơn nữa. Và với phạm vi không giới hạn, nó cho phép bạn xem vị trí và mức độ hoạt động của con chó của bạn ở hầu hết mọi nơi trên thế giới.",
    productPrice: 1000000
  }
  if (props.location.pathname === '/cat')
    product = {
    productName: 'GPS Tracker cho mèo',
    productRating: [
      {
          ratingName: 'Brian Fry',
          ratingTitle: 'Very pleased with the tracker',
          ratingContent: 'Very pleased with the tracker, it is easy to use anworth the money.',
          ratingStart: 4
      }
    ],
    productColor: [
      {
          name: 'White',
          productImg: [
              "https://tractive.com/static/images/product-images/trkat1/tractive-ikati-packaging-en-400w.jpg",
              "https://tractive.com/static/images/product-images/trkat1/tractive-ikati-with-black-hunter-collar-400w.png",
              "https://tractive.com/static/images/product-images/trkat1/tractive-ikati-tracker-400w.png",
              "https://tractive.com/static/images/product-images/trkat1/tractive-ikati-size-comparison-400w.jpg",
              "https://tractive.com/static/images/product-images/trkat1/tractive-ikati-front-400w.jpg", 
          ]
      }
    ],
    productFeature: [
      "Tất cả mọi thứ chỉ trong một cái vòng cổ bằng da",
      "Theo dõi vị trí và giám sát hoạt động trên toàn thế giới",
      "Chế độ TRỰC TIẾP - cập nhật vị trí cứ sau 2-3 giây",
      "Thời lượng pin lên đến 5 ngày",
      "Chống thấm nước, chống va đập và nặng 28g",
    ],
    productDes: "Thấy được nơi chú mèo đang đi, và những nơi chú mèo đã tới với thiết bị đeo cổ. Theo dõi hoạt động & tập thể dục, cùng với vòng cổ bằng da HUNTER® với khóa an toàn cho mèo và bạn sẽ có được chiếc vòng đeo theo dõi mèo.",
    productPrice: 1000000
  }
  
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className="ProductForDog">
      <Header/>
      <ProductDetail
        product={product}
      />
      <ShopFeatures/>
      <ProductAsk/>
      <ProductReview/>
      {/* <ProductRecommend/> */}
      <ProductNews/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default withRouter(ProductForDog);
