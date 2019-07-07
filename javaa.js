let oyun ={
    wins:0,
    losses:0,
    qalan_wans:9,
    enter_user:[],
    herfler:"asdfghjklqwertyuiopzxcvbnm",
    komp_secen:null,
    set_random:function(){
        let index=Math.floor(Math.random()*this.herfler.length)
        this.komp_secen=this.herfler[index];
        console.log(this.komp_secen)
    },
    chek_oyun:function(user_secen){
        if(user_secen==this.komp_secen){
            alert("siz duzgun tapdiniz  " + user_secen +  "duzdur " )
            this.wins++;
            return true;
        }else if(this.qalan_wans == 1){
            alert(" siz sehv tapdiz  " + this.komp_secen + " duzgun cavab idi")
            this.losses++;
            return false;
        }
    },
    update_view:function(){
        document.querySelector('#wins').innerHTML=this.wins;
        document.querySelector('#losses').innerHTML=this.losses;
        document.querySelector('#letters').innerHTML=this.qalan_wans;
        document.querySelector('#remainnig').innerHTML=this.enter_user;

    },
    restat_oyun:function(){
        this.qalan_wans=9;
        this.enter_user=[];
        this.set_random();
    },
    set_texmin_edilen:function(letter){
        if(this.enter_user.indexOf(letter)===-1){
            this.enter_user.push(letter)
            this.qalan_wans--;
        }
    }
}
oyun.set_random();
document.onkeyup=function(e){
    let daxil_olan=e.key;
    let cavab =oyun.chek_oyun(daxil_olan)
    if(cavab===true || cavab===false){
        oyun.restat_oyun();
    }else{
        oyun.set_texmin_edilen(daxil_olan)
    }
    oyun.update_view();
}