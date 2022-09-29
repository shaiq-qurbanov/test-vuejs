<template>
    <div class="main">
        <div class="title">
            <div class="edit">
                <div>Документы</div>
                <div class="right">
                    <div class="book"><img src="../../../public/images/book.jpg"></div>
                    <div class="new-type"><img src="../../../public/images/Vector-3.jpg">Новый тип</div>
                    <div class="new-doc"> <img src="../../../public/images/Vector-3.jpg">Новый документ</div>

                </div>

            </div>
        </div>

        <div class="search">
            <div class="search-1">
            <div><img src="../../../public/images/search.jpg"></div>
            <input placeholder="Документы">
        </div>

            <div class="del"><img src="../../../public/images/Vector-4.jpg"></div>
        </div>
        <div class="cat1">
            <div class="text" id="text">
                <button type="button" class="vector" :class="rotate" @click="dropIt(1)"><img src="../../../public/images/Vector.jpg" ></button>
                <p>Обязательные для всех</p>
                <div class="icon-2">
                    <img src="../../../public/images/icon-1.jpg">
                    <img src="../../../public/images/icon-2.jpg">
                    <img class="img" src="../../../public/images/icon-3.jpg" >
                </div>
            </div>

            <div class="events">
                <div><img src="../../../public/images/Vector-1.jpg"></div>
                <div><img src="../../../public/images/delete.jpg" ></div>
                <div><img src="../../../public/images/Vector-5.jpg"></div>
            </div>

        </div>

            <transition-group name="slide" >
                <div  v-if="isDropped_1" class="box">
                    <ul class="list">
                        <li><div class="text">
                            <p>fhjhjkkl</p>
                            <div class="events">
                                <div><img src="../../../public/images/Vector-1.jpg"></div>
                                <div><img src="../../../public/images/delete.jpg" ></div>
                                <div><img src="../../../public/images/Vector-5.jpg"></div>
                            </div>
                        </div></li>
                        <li><div class="text">
                            <p>ghghghghh</p>
                            <div class="events">
                                <div><img src="../../../public/images/Vector-1.jpg"></div>
                                <div><img src="../../../public/images/delete.jpg" ></div>
                                <div><img src="../../../public/images/Vector-5.jpg"></div>
                            </div>
                        </div></li>
                    </ul>
                </div>

            </transition-group>

        <div class="cat2">

            <div class="text">
                <button class="vector"  @click="dropIt(2)"><img src="../../../public/images/Vector.jpg" ></button>
                <p>Обязательные для трудоустройства</p>
            </div>

            <div class="events-1">
                    <div><img src="../../../public/images/Vector-1.jpg"></div>
                    <div><img src="../../../public/images/delete.jpg" ></div>
                    <div><img src="../../../public/images/Vector-5.jpg"></div>

            </div>
        </div>
        <transition-group name="slide" >
            <div  v-if="isDropped_2" class="box2">
                <ul class="list">
                    <li><div class="text">
                        <p>fhjhjkkl</p>
                        <div class="events-1">
                            <div><img src="../../../public/images/Vector-1.jpg"></div>
                            <div><img src="../../../public/images/delete.jpg" ></div>
                            <div><img src="../../../public/images/Vector-5.jpg"></div>
                        </div>
                    </div></li>
                    <li><div class="text">
                        <p>ghghghghh</p>
                        <div class="events">
                            <div><img src="../../../public/images/Vector-1.jpg"></div>
                            <div><img src="../../../public/images/delete.jpg" ></div>
                            <div><img src="../../../public/images/Vector-5.jpg"></div>
                        </div>
                    </div></li>
                </ul>
            </div>

        </transition-group>
        <div class="cat3">

            <div class="text">
                <button class="vector" @click="dropIt(3)"><img src="../../../public/images/Vector.jpg"></button>
                <p>Специальные</p>
            </div>
            <div class="events-1">
                <div><img src="../../../public/images/Vector-1.jpg"></div>
                <div><img src="../../../public/images/delete.jpg" ></div>
                <div><img src="../../../public/images/Vector-5.jpg"></div>
            </div>
        </div>
        <transition-group name="slide" >
            <div  v-if="isDropped_3" class="box-3">
                <ul class="list">
                    <li><div class="text">
                        <p>fhjhjkkl</p>
                        <div class="events">
                            <div><img src="../../../public/images/Vector-1.jpg"></div>
                            <div><img src="../../../public/images/delete.jpg" ></div>
                            <div><img src="../../../public/images/Vector-5.jpg"></div>
                        </div>
                    </div></li>
                    <li><div class="text">
                        <p>ghghghghh</p>
                        <div class="events">
                            <div><img src="../../../public/images/Vector-1.jpg"></div>
                            <div><img src="../../../public/images/delete.jpg" ></div>
                            <div><img src="../../../public/images/Vector-5.jpg"></div>
                        </div>
                    </div></li>
                </ul>
            </div>

        </transition-group>
        <div class="no-cat">
            <div class="rectangle">
                Тестовое задание кондидата
                <div class="events">
                    <div><img src="../../../public/images/Vector-1.jpg"></div>
                    <div><img src="../../../public/images/delete.jpg" ></div>
                    <div><img src="../../../public/images/Vector-5.jpg"></div>
                </div>
            </div>
            <div class="rectangle">Трудовой договор
                <div class="icon-1">
                    <img src="../../../public/images/Ellipse-15.jpg" >
                    <img src="../../../public/images/Ellipse-16.jpg">
                </div>
                <div class="events">
                    <div><img src="../../../public/images/Vector-1.jpg"></div>
                    <div><img src="../../../public/images/delete.jpg" ></div>
                    <div><img src="../../../public/images/Vector-5.jpg"></div>
                </div>
            </div>
            <div class="rectangle">
                Мед.книжка
                <div class="events">
                    <div><img src="../../../public/images/Vector-1.jpg"></div>
                    <div><img src="../../../public/images/delete.jpg" ></div>
                    <div><img src="../../../public/images/Vector-5.jpg"></div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
    name: 'welcome',
    data (){
        return{
            isDropped_1:false,
            isDropped_2:false,
            isDropped_3:false,
        }
    },
    computed: {
        rotate() {
            let vector = 'degree';
            if (this.isDropped_1 === true) {
                return vector;
            }
            return true;
        },
    },
    mounted() {
    },
    methods:{
        dropIt(num) {
            switch (num){
                case 1:
                    this.isDropped_1=!this.isDropped_1;
                    break;
                    case 2:
                        this.isDropped_2=!this.isDropped_2;
                        break;
                        case 3:
                            this.isDropped_3=!this.isDropped_3;
            }
        },
    }

}

</script>
<style scoped>

.degree {
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
.box{
    box-sizing: border-box;
    width: 1100px;
    height: 105px;
}
.box-3{
    box-sizing: border-box;
    width: 1100px;
    height: 105px;
    margin-top: -20px;
    /*position: relative;*/

    /*margin-left: 585px;*/
}

.list {
    position: absolute;
    width: 1100px;
    background: #8893a2;
    margin-left: 40px;
    padding: 0;
    list-style-type: none;
    transform-origin: top;
    transition: transform .4s ease-in-out;
    overflow: hidden;
}
li{
    padding: 10px;
    background: #ffffff;
    border: 1px solid #DFE4EF;
    height: 48px;


}
.slide-item {
    display: inline-block;
    margin-right: 10px;
}
.slide-enter-active,
.slide-leave-active {
    transition: all 1s ease;
}
.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.main{
    display: flex;
    width: 1560px;
    height: 1024px;
    flex-direction: column;
    padding-left: 30px ;
    box-sizing: border-box;
}
.title{
    width: 1350px;
    height: 30px;
    left: 30px;
    top: 38px;
}
.edit{
    display: flex;
    justify-content: space-between;
    left: 1.23%;
    right: 89.26%;
    top: 3.52%;
    bottom: 93.36%;

    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 108%;

    /* identical to box height, or 24px */


    color: #000000;
}
.new-doc {
    width: 170px;
    height: 30px;
    padding: 2px;
    border: 1px solid #DFE4EF;
    border-radius: 15px;
    font-size: 20px;
}
.search{
   display: flex;
    justify-content: space-between;
    width: 564px;
    height: 30px;
    left: 31px;
    top: 86px;
    border-bottom: 1px solid #0066ff;
    }
.search-1{
    display: flex;
    justify-content: space-between;
    width: 120px;
    padding: 4px;
    margin: 2px;
}
.del{
    color: red;
}
.cat1{
    border: 1px solid #DFE4EF;
    display: flex;
    justify-content: space-between;
    width: 1190px;
    height: 48px;
    left: 30px;
    margin-top: 30px;
    box-sizing: border-box;

}
.cat2{
    width: 1190px;
    height: 48px;
    left: 30px;
    border: 1px solid #DFE4EF;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}
.cat3{
    width: 1190px;
    height: 48px;
    left: 30px;
    /*top: 302px;*/
    margin-bottom: 20px;
    border: 1px solid #DFE4EF;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}
.vector{
    display: inline-block;
 text-align: center;
    width: 30px;
    height: 46px;
}
.no-cat{
    display: flex;
    flex-direction: column;
    width: 1190px;
    height: 103px;
    left: 30px;
    top: 360px;
    /*margin-top: 15px;*/
    border: 1px solid #DFE4EF;
}
.rectangle{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 1190px;
    height: 35px;
    padding-left: 10px;
    border-bottom: 1px solid #DFE4EF;
}
.book{
    text-align: center;
    padding: 2px;
    width: 30px;
    height: 30px;
}
.new-type{
    text-align: center;
    padding: 2px;
    width: 115px;
    height: 30px;
    font-size: 20px;
    border: 1px solid #DFE4EF;
    border-radius: 15px;

}
.right{
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    width: 500px;
    height: 30px;
}
.events{
    display: flex;
    width: 100px;
    height: 30px;
    margin-right: 10px;
    margin-top: 9px;
    justify-content: space-between;
}
.events-1{
    display: flex;
    width: 100px;
    height: 30px;
    margin-left: 785px;
    margin-right: 10px;
    margin-top: 9px;
    justify-content: space-between;
}
.text{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
.icon-1{
    width: 22px;
    height: 8px;
    display: flex;
    margin-right: 896px;
    justify-content: space-between;
}
.icon-2{
    display: flex;
    width: 75px;
    height: 9px;
    justify-content: space-evenly;
}
.img{
    width: 14px;
    height: 15px;
    margin-top: 1px;
}
/*.dropbtn {*/
/*    width: 1190px;*/
/*    text-align: center;*/
/*    background-color: #4CAF50;*/
/*    color: white;*/
/*    padding: 16px;*/
/*    font-size: 16px;*/
/*    border: none;*/
/*    cursor: pointer;*/
/*}*/

/*.dropdown {*/
/*    position: relative;*/
/*    display: inline-block;*/
/*}*/

/*!* Dropdown Content (Hidden by Default) *!*/
/*.dropdown-content {*/
/*    display: none;*/
/*    position: absolute;*/
/*    background-color: #f9f9f9;*/
/*    min-width: 160px;*/
/*    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);*/
/*    z-index: 1;*/
/*}*/

/*!* Links inside the dropdown *!*/
/*.dropdown-content a {*/
/*    color: black;*/
/*    padding: 12px 16px;*/
/*    text-decoration: none;*/
/*}*/



</style>
