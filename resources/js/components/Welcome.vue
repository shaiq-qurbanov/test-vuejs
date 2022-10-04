<template>
    <div class="main">
        <div class="title">
            <div class="edit">
                <div>Документы</div>
                <div class="right">
                    <button class="book"><img src="../../../public/images/book.jpg"></button>
                    <button class="new-type"><img src="../../../public/images/Vector-3.jpg">Новый тип</button>
                    <button class="new-doc"> <img src="../../../public/images/Vector-3.jpg">Новый документ</button>

                </div>

            </div>
        </div>

        <div class="search">
            <div class="search-1">
            <div><img src="../../../public/images/search.jpg"></div>
            <input class="input" placeholder="Поиск" v-model="searchDoc" @input="search()" >
        </div>

            <div class="del" :class="shoeX"  ><img  src="../../../public/images/Vector-4.jpg"></div>
        </div>

        <div class="cat1">
            <div class="text" id="text">
                <button type="button" class="vector" :class="{active: changeClass_1}"  @click="dropIt(1)"><img src="../../../public/images/Vector.jpg" ></button>
                <p>Обязательные для всех </p>
                <div class="icon-2">
                    <img src="../../../public/images/icon-1.jpg">
                    <img src="../../../public/images/icon-2.jpg">
                    <img class="img" src="../../../public/images/icon-3.jpg" >
                </div>
            </div>

            <div class="events">
                <button><img src="../../../public/images/Vector-1.jpg"></button>
                <button><img src="../../../public/images/delete.jpg" ></button>
                <button><img src="../../../public/images/Vector-5.jpg"></button>
            </div>

        </div>

            <transition-group name="slide">
                <div class="box" v-if="isDropped_1" >
                    <ul class="list">
                        <li  class="text" draggable="true">
                            {{str}}
                            <div class="events">
                                <button><img src="../../../public/images/Vector-1.jpg"></button>
                                <button><img src="../../../public/images/delete.jpg" ></button>
                                <button><img src="../../../public/images/Vector-5.jpg"></button>
                            </div>
                        </li>
                        <li classs="text" draggable="true" >
                            ghghghghh
                            <div class="events">
                                <button><img src="../../../public/images/Vector-1.jpg"></button>
                                <button><img src="../../../public/images/delete.jpg" ></button>
                                <button><img src="../../../public/images/Vector-5.jpg"></button>
                            </div>
                        </li>
                    </ul>
                </div>

            </transition-group>

        <div class="cat2">

            <div class="text">
                <button class="vector" :class="{active: changeClass_2}"  @click="dropIt(2)"><img src="../../../public/images/Vector.jpg" ></button>
                <p>Обязательные для трудоустройства</p>
            </div>

            <div class="events-1">
                    <button><img src="../../../public/images/Vector-1.jpg"></button>
                    <button><img src="../../../public/images/delete.jpg" ></button>
                    <button><img src="../../../public/images/Vector-5.jpg"></button>

            </div>
        </div>
    <transition-group name="slide" >
        <div class="box"  v-if="isDropped_2">
            <ul class="list">
                <li class="text" draggable="true" >
                    <p>fhjhjkkl</p>
                    <div class="events">
                        <button><img src="../../../public/images/Vector-1.jpg"></button>
                        <button><img src="../../../public/images/delete.jpg" ></button>
                        <button><img src="../../../public/images/Vector-5.jpg"></button>
                    </div>
                </li>
                <li draggable="true" class="text" >
                    <p>ghghghghh</p>
                    <div class="events">
                        <button><img src="../../../public/images/Vector-1.jpg"></button>
                        <button><img src="../../../public/images/delete.jpg" ></button>
                        <button><img src="../../../public/images/Vector-5.jpg"></button>
                    </div>
                </li>
            </ul>

        </div>
    </transition-group>


        <div class="cat3">

            <div class="text" >
                <button class="vector" :class="{active: changeClass_3}"   @click="dropIt(3)"><img src="../../../public/images/Vector.jpg"></button>
                <p>Специальные</p>
            </div>
            <div class="events-1">
                <button><img src="../../../public/images/Vector-1.jpg"></button>
                <button><img src="../../../public/images/delete.jpg" ></button>
                <button><img src="../../../public/images/Vector-5.jpg"></button>
            </div>
        </div>
            <transition-group name="slide" >
                <div class="box"  v-if="isDropped_3">
                <ul class="list">
                    <li  draggable="true"  class="text">
                        <p>fhjhjkkl</p>
                        <div class="events">
                            <button><img src="../../../public/images/Vector-1.jpg"></button>
                            <button><img src="../../../public/images/delete.jpg" ></button>
                            <button><img src="../../../public/images/Vector-5.jpg"></button>
                        </div>
                    </li>
                    <li  draggable="true" class="text" >
                        <p>ghghghghh</p>
                        <div class="events">
                            <button><img src="../../../public/images/Vector-1.jpg"></button>
                            <button><img src="../../../public/images/delete.jpg" ></button>
                            <button><img src="../../../public/images/Vector-5.jpg"></button>
                        </div>
                    </li>
                </ul>
                </div>
            </transition-group>

<!--        </div>-->

        <div class="no-cat">
            <div class="rectangle">
                Тестовое задание кондидата
                <div class="events">
                    <button><img src="../../../public/images/Vector-1.jpg"></button>
                    <button><img src="../../../public/images/delete.jpg" ></button>
                    <button><img src="../../../public/images/Vector-5.jpg"></button>
                </div>
            </div>
            <div class="rectangle">Трудовой договор
                <div class="icon-1">
                    <img src="../../../public/images/Ellipse-15.jpg" >
                    <img src="../../../public/images/Ellipse-16.jpg">
                </div>
                <div class="events">
                    <button><img src="../../../public/images/Vector-1.jpg"></button>
                    <button><img src="../../../public/images/delete.jpg" ></button>
                    <button><img src="../../../public/images/Vector-5.jpg"></button>
                </div>
            </div>
            <div class="rectangle">
                Мед.книжка
                <div class="events">
                    <button><img src="../../../public/images/Vector-1.jpg"></button>
                    <button><img src="../../../public/images/delete.jpg" ></button>
                    <button><img src="../../../public/images/Vector-5.jpg"></button>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
    name: 'welcome',
    data() {
        return {
            isDropped_1: false,
            isDropped_2: false,
            isDropped_3: false,
            changeClass_1: false,
            changeClass_2: false,
            changeClass_3: false,
            searchDoc: '',
            shoeX: '',
            params: [],
            str: '',
            text: '',
        }
    },

    mounted() {
        this.getLocal()
        this.local()
        this.mixList()
    },
    methods: {
        dropIt(num) {
            switch (num) {
                case 1:
                    this.isDropped_1 = !this.isDropped_1;
                    this.changeClass_1 = !this.changeClass_1;
                    break;
                case 2:
                    this.isDropped_2 = !this.isDropped_2;
                    this.changeClass_2 = !this.changeClass_2
                    break;
                case 3:
                    this.isDropped_3 = !this.isDropped_3;
                    this.changeClass_3 = !this.changeClass_3
            }
        },
        search(event) {
            if (this.searchDoc.length > 0) {
                this.shoeX = 'block';

            }

        },
        local() {
            localStorage.setItem('key', 'hello');
        },
        getLocal() {
            this.str = localStorage.getItem('key');
            console.log(this.str);
        },
        // mix
        mixList() {
            const listElement = document.querySelectorAll(`.list`);
            console.log('test',listElement)
            for(const  list of listElement ){
                const taskElements = list.querySelectorAll(`.text`);
                console.log('list',taskElements)
                for (const task of taskElements) {
                    console.log('task',task)
                    task.draggable = true;
                }
                list.addEventListener(`dragstart`, (evt) => {
                    console.log(evt.target,'sdfghjk')
                    evt.target.classList.add(`selected`);
                });
                list.addEventListener(`dragend`, (evt) => {
                    evt.target.classList.remove(`selected`);
                    console.log(evt)
                });
                const getNextElement = (cursorPosition, currentElement) => {
                    const currentElementCoord = currentElement.getBoundingClientRect();
                    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

                    const nextElement = (cursorPosition < currentElementCenter) ?
                        currentElement :
                        currentElement.nextElementSibling;

                    return nextElement;
                };
                list.addEventListener(`dragover`, (evt) => {
                    evt.preventDefault();

                    const activeElement = list.querySelector(`.selected`);
                    const currentElement = evt.target;
                    const isMoveable = activeElement !== currentElement &&
                        currentElement.classList.contains(`text`);

                    if (!isMoveable) {
                        return;
                    }

                    const nextElement = getNextElement(evt.clientY, currentElement);

                    if (
                        nextElement &&
                        activeElement === nextElement.previousElementSibling ||
                        activeElement === nextElement
                    ) {
                        return;
                    }

                    list.insertBefore(activeElement, nextElement);
                });
            }
        }

    },
    update() {
        // this.mixList()

    }
}
</script>
.box{
<!--box-sizing: border-box;-->
width: 1100px;
height: 105px;
}

<style scoped>
.list{
    margin-top: 0px;
}

.selected {
    opacity: 0.6;
}
button{
   background-color: white;
}
.input{
    margin-top: -12px;
    width: 570px;
    height: 35px;
    border:none;
    outline: none;
    padding-left: 7px;
    padding-top: 16px;
    padding-bottom: -19px;
}

.active {
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
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
li{
    padding: 10px;
    background: #ffffff;
    border: 1px solid #DFE4EF;
    height: 48px;
    width: 1100px;
    cursor: move;
    display: flex;
    justify-content: space-between;
    transition: transform .4s ease-in-out;
}
ul{
    list-style-type: none;
    margin-top: 10px;
}


.main{
    display: flex;
    /*width: 1560px;*/
    max-width: 80%;
    height: 1024px;
    flex-direction: column;
    padding-left: 30px ;
    list-sizing: border-list;
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
    margin-top: 13px;
    margin-right: 50px;
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 108%;
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
    margin-top: 14px;
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
    display: none;
}
.block{
    display: block;
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
    padding-top: 11px;
}
.cat2{
    width: 1190px;
    height: 48px;
    left: 30px;
    margin-top: -1px;
    padding-top: 10px;
    border: 1px solid #DFE4EF;
    display: flex;
    justify-content: space-between;
}
.cat3{
    width: 1190px;
    height: 48px;
    left: 30px;
    margin-top: -1px;
    padding-top: 10px;
    border: 1px solid #DFE4EF;
    display: flex;
    justify-content: space-between;
}
.vector{
    display: inline-block;
    text-align: center;
    width: 30px;
    /*height: 45px;*/
}
.no-cat{
    display: flex;
    flex-direction: column;
    width: 1190px;
    height: 144px;
    left: 30px;
    top: 360px;
    border: 1px solid #DFE4EF;
    margin-top: 12px;
}
.rectangle{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 1190px;
    height: 48px;
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
    list-sizing: border-list;
    width: 500px;
    height: 30px;
}
.events{
    display: flex;
    width: 100px;
    height: 30px;
    margin-right: 10px;
    margin-top: 4px;
    justify-content: space-between;
}
.events-1{
    display: flex;
    width: 100px;
    height: 30px;
    margin-right: 10px;
    margin-top: 2px;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
}
.text{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: -1px;
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



</style>
