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
            <div>Документы</div>
        </div>

            <div class="del"><img src="../../../public/images/Vector-4.jpg"></div>
        </div>
        <div class="cat1">
            <div class="text">
                <div class="vector"></div>
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

        <div class="cat2">

            <div class="text">
                <div class="vector"><img src="../../../public/images/Vector.jpg" ></div>
                <p>Обязательные для трудоустройства</p>
            </div>

            <div class="events-1">
                    <div><img src="../../../public/images/Vector-1.jpg"></div>
                    <div><img src="../../../public/images/delete.jpg" ></div>
                    <div><img src="../../../public/images/Vector-5.jpg"></div>

            </div>
            <div>

            </div>
        </div>

        <div class="cat3">

            <div class="text">
                <div class="vector"><img src="../../../public/images/Vector.jpg"></div>
                <p>Специальные</p>
            </div>
            <div class="events-1">
                <div><img src="../../../public/images/Vector-1.jpg"></div>
                <div><img src="../../../public/images/delete.jpg" ></div>
                <div><img src="../../../public/images/Vector-5.jpg"></div>
            </div>

        </div>

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
export default {
    name: 'welcome'
}

</script>
<style scoped>
.main{
    /*position: relative;*/
    display: flex;
    width: 1560px;
    height: 1024px;
    flex-direction: column;
    padding-left: 30px ;
}
.title{
    /*position: absolute;*/
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
    /*position: absolute;*/
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

}
.cat2{
    width: 1190px;
    height: 48px;
    left: 30px;
    border: 1px solid #DFE4EF;
    display: flex;
    justify-content: space-between;
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
}
.vector{
 text-align: center;
    width: 30px;
    height: 30px;
}
.no-cat{
    display: flex;
    flex-direction: column;
    /*position: absolute;*/
    width: 1190px;
    height: 103px;
    left: 30px;
    top: 364px;
    border: 1px solid #DFE4EF;
}
.rectangle{
    /*box-sizing: border-box;*/
    /*position: relative;*/
    /*display: flex;*/
    /*justify-content: flex-start;*/
    /*align-items: baseline;*/
    /*width: 1190px;*/
    /*height: 35px;*/
    /*border-bottom: 1px solid #DFE4EF;*/
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 1190px;
    height: 35px;
    border-bottom: 1px solid #DFE4EF;
}
.book{
    text-align: center;
    padding: 2px;
    width: 30px;
    height: 30px;
    border: 1px solid #DFE4EF;
    border-radius: 15px;
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
    margin-left: 771px;
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
    /* position: absolute; */
    width: 22px;
    height: 8px;
    display: flex;
    /*margin-left: 24px;*/
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



</style>
