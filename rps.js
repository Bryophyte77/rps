let rps_position=0;


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');


const score_d = document.querySelector('.score')
const user_choice_d = document.querySelector('.user_choice')
const comp_choice_d = document.querySelector('.comp_choice')
const outcome_d = document.querySelector('.outcome')

let score=0


function computer_play(){

    let num= Math.floor(Math.random()*3)
    let result=''
 


    if (num==0){

        result= 'rock'

    }

    else if (num==1){
        result= 'paper'


    }


    else{
        result= 'scissor'
    }

    return result

}


function user_play(rps_position){

    let choices=['Rock','Paper',"Scissor"]

    return choices[rps_position].toLocaleLowerCase()

}



function match(user_choice, computer_choice){

    let result=0


    if(user_choice==computer_choice){

        result=0
    }


   else if(user_choice=='rock' && computer_choice=='paper'){

        result = -1


   }

   else if(user_choice=='paper' && computer_choice=='scissor'){

        result = -1


}


    else if(user_choice=='scissor' && computer_choice=='rock'){

        result = -1


}



    else{

        result=1
    }


    score+=result

    score_d.setAttribute('value', score);
    user_choice_d.setAttribute('value', user_choice);
    comp_choice_d.setAttribute('value', computer_choice);
    outcome_d.setAttribute('value', result);
    console.log(score)



}



// function play_game(){

//     let totalscore=0


//     for (i = 1; i < 6; i++) {
    
//     let user_choice= user_play()
//     let computer_choice=computer_play()
//     let score_keeper=match(user_choice,computer_choice)
//     totalscore=totalscore+score_keeper
    
//     console.log(`current round is:${i}||current score is: ${totalscore}`)

//     }


//     console.log(`final score is: ${totalscore}`)
    

// }





function animate(rps_position){


if (rps_position==0){

    

    rock.classList.add('on');
    paper.classList.remove('on')
    scissor.classList.remove('on')
    

}


else if (rps_position==1){

    rock.classList.remove('on');
    paper.classList.add('on')
    scissor.classList.remove('on')
}


else {

    rock.classList.remove('on');
    paper.classList.remove('on')
    scissor.classList.add('on')



}

}





window.addEventListener('keydown',function(e) {

    if (e.keyCode==39){

       
        rps_position+=1
        if(rps_position>2){rps_position=0}
        


    }

    else if(e.keyCode==37){
        
        rps_position-=1
        if(rps_position<0){rps_position=2}
  

    }


animate(rps_position);

})


const button=document.querySelector('button')

button.addEventListener('click', function(){ match(user_play(rps_position),computer_play() )} )
position: absolute;