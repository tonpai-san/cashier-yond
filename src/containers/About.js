import React  from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const About = () =>  {
    
        return (
            <div>
                <Header />
                <div className="container col-md-5" >
                    <h3>ความเป็นมา</h3>
                    <p className="title text-justify mt-4 mb-4">
                    ร้านกาแฟน่านั่งย่านเมืองเก่า ร้านกาแฟนั่งสบายแห่งนี้ เปิดร้านกาแฟให้บริการตั้งแต่วันที่ 24 พฤษภาคม 2558
                     เรามีความตั้งใจที่อยากทำร้านกาแฟ ให้ชาวเชียงใหม่ได้ดื่มกาแฟอร่อยรสชาติดี ในราคาที่ไม่แพง
                      ดังนั้นการตกแต่งร้านจึงออกแบบไปในทางที่ไม่หรู แต่บรรยากาศสบายๆ เป็นร้านกาแฟสด 
                      เมล็ดกาแฟคุณภาพจากป่าแป๋ทางตอนเหนือของประเทศไทย ที่ทำให้ทุกคนที่เดินผ่านไปผ่านมาแวะเข้าพักดื่มกาแฟอาราบิก้า 
                      โกโก้ ชา สมูทตี้ และเมนูอื่นๆอีกมากมาย
                    </p>
                    <h4 className="text-warning">จากร้าน YOND CAFE</h4>
                </div>
                <Footer company ="Tonpai San" email="d.luckkyy@gmail.com" />
            </div>
        )
    

}

export default About;