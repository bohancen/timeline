class timeline {
    constructor(){
        this.line0 = document.querySelector('.line0')
        this.line1 = document.querySelector('.line1')
        this.line2 = document.querySelector('.line2')
        this.bar = document.querySelector('.bar')
        this.line1_width_add = document.querySelector('.line1-width-add')
        this.line1_width_min = document.querySelector('.line1-width-min')
        this.line2_width_add = document.querySelector('.line2-width-add')
        this.line2_width_min = document.querySelector('.line2-width-min')
        this.line1_left_add = document.querySelector('.line1-left-add')
        this.line1_left_min = document.querySelector('.line1-left-min')
        this.line2_left_add = document.querySelector('.line2-left-add')
        this.line2_left_min = document.querySelector('.line2-left-min')
        this.speed = document.querySelector('.speed')
        this.speed_add = document.querySelector('.speed-add')
        this.speed_min = document.querySelector('.speed-min')
        this.result = document.querySelector('.result')
        this.play = document.querySelector('.play')
        this.stop = document.querySelector('.stop')
        this.restart = document.querySelector('.restart')

        this.timer = null
        this.state = {
            speed:50,
            x:0,
            line0:{
                left:0,
                width:500,
            },
            line1:{
                left:20,
                width:200,
            },
            line2:{
                left:0,
                width:100,
            }
        }
        this.addevent()
        this.render()
    }

     render(){
        ['line0','line1','line2'].forEach((key)=>{
            this[key].style.left = this.state[key].left + 'px'
            this[key].style.width = this.state[key].width + 'px'
        })
        this.bar.style.left = this.state.x + 'px'
        this.speed.innerText = this.state.speed

        let result_arr = []
        if(this.state.x > this.state.line1.left){
            if(this.state.x < this.state.line1.left + this.state.line1.width){
                result_arr.push('line1')
            }
        }
        if(this.state.x > this.state.line2.left){
            if(this.state.x < this.state.line2.left + this.state.line2.width){
                result_arr.push('line2')
            }
        }
        this.result.innerText = result_arr.join(',')
    }

    addevent(){
        this.play.onclick=()=>{
            clearInterval(this.timer)
            this.timer = setInterval(()=>{
                this.state.x+=1
                if(this.state.x > this.state.line0.width){
                    this.state.x = 0
                    this.stop.click()
                }
                this.render()
            },1000/this.state.speed)
        }
        this.stop.onclick=()=>{
            this.timer = clearInterval(this.timer)
        }
        this.restart.onclick=()=>{
            this.stop.click()
            this.state.x = 0
            this.play.click()
        }
        
        this.speed_add.onclick=()=>{
            this.state.speed +=5
            this.render()
        }
        this.speed_min.onclick=()=>{
            this.state.speed -=5
            if(this.state.speed<=1){
                this.state.speed = 1
            }
            this.render()
        }
        
        this.line1_width_add.onclick=()=>{
            this.state.line1.width+=10
            this.render()
        }
        this.line1_width_min.onclick=()=>{
            this.state.line1.width-=10
            if(this.state.line1.width<=0){
                this.state.line1.width=0
            }
            this.render()
        }
        this.line2_width_add.onclick=()=>{
            this.state.line2.width+=10
            this.render()
        }
        this.line2_width_min.onclick=()=>{
            this.state.line2.width-=10
            if(this.state.line2.width<=0){
                this.state.line2.width=0
            }
            this.render()
        }

        this.line1_left_add.onclick=()=>{
            this.state.line1.left+=10
            this.render()
        }
        this.line1_left_min.onclick=()=>{
            this.state.line1.left-=10
            if(this.state.line1.left<=0){
                this.state.line1.left=0
            }
            this.render()
        }
        this.line2_left_add.onclick=()=>{
            this.state.line2.left+=10
            this.render()
        }
        this.line2_left_min.onclick=()=>{
            this.state.line2.left-=10
            if(this.state.line2.left<=0){
                this.state.line2.left=0
            }
            this.render()
        }
    }
}
let run = new timeline()
