function setup(){
 changeInfo(0);
}

function draw(){

}

function changeInfo(name){

    galleryimg = document.getElementsByClassName("galleryimg");

    for (var i = 0; i < galleryimg.length; i++){
        if (name != i){
            galleryimg[i].setAttribute("style", "filter:brightness(0.8)");
        }
        else{
            galleryimg[i].setAttribute("style", "filter:brightness(1.0)");
        }
    }

    //set variables based on input
    if (name == 0){
        infotitle = "TAG IN BANANALAND! (2021)";
        infosub = "Level designer, one month project, team of five";
        videolink = "https://www.youtube.com/embed/ZBrhV5Fh2tE";
        gamelink = "https://whoajoshwhoa.itch.io/tag-in-bananaland";
        info = "Tag in Bananaland is a tag game for up to four players. I made the game with a five-person team in a class called Major Studio Fall; it's a proof-of-concept inspired by a prototype made by a classmate of ours. I was responsible for Tag in Bananaland's level design. I created the layout of the level, as well as obstacles, environmental hazards, and interactibles. I think of the level as a playground. While being chased, players are faced with risk-and-reward decision structures as they attempt to navigate (eg. should I try and jump the fence to put some distance between me and the tagger, or is the possibility of falling over too risky?). While they aren't being actively chased, though, there's just as much fun to be had. Players can splash around in the water or the goo, hide behind trees and bushes, throw cans, soccer balls, npcs, and each other, and more. Everything about the environment encourages experimentation, discovery, and play.";
    }
    else if (name == 1){
        infotitle = "MOBY DICK (2020)";
        infosub = "Writer, designer, and developer, four-month project, solo";
        videolink = "https://www.youtube.com/embed/NpEaa2P7qZI";
        gamelink = "https://jackiefi13.itch.io/mobydick";
        info = "Moby Dick is a narrative game in which the player gets to choose what they want to believe. I made this game for a class called Intro to Narrative Design. I was challenged to make a Twine game loosely inspired by an existing public domain work -- I chose the Herman Melville novel Moby Dick. Having analysed narrative decision structures extensively in class, I wanted to try pushing the boundaries of choice a little. The player's only choices are about their beliefs. Wheen something strange and inexplicable happens, they are allowed to choose between several explanations, and the choice they make shapes the perspective character's actions, and thus, the direction of the narrative as a whole. This structure emphasizes the cosmic-horror strangeness of the titular creature as the player struggles to find logical explanations for illogical events, and is powerfully subverted toward the end of the story.";
    }
    else if (name == 2){
        infotitle = "ZOOMGAME 1.0 (2020)";
        infosub = "Writer and audio designer, three-week project, team of four";
        videolink = "https://www.youtube.com/embed/NpEaa2P7qZI";
        gamelink = "https://briankim.itch.io/zoomgame";
        info = "Zoomgame 1.0 is a horror visual novel about the struggles of online schooling during the pandemic. I made this game with a four-person team for a class called Intro to Narrative Design. The game's main character, an unnamed college student, is stranded in a hotel overseas; air travel is heavily restricted and he has no way of getting home. Since he's in a different time zone, he has to adopt a nocturnal schedule to catch all his classes. The game deals with themes of isolation, hopelessness, and the creeping illogical exhaustion we all felt while locked up indoors for weeks on end.";
    }
    else if (name == 3){
        infotitle = "BOUNTY (2019)";
        infosub = "Designer, one-month project, team of six";
        videolink = "null";
        gamelink = "https://gamecenter.nyu.edu/projects/bounty/";
        info = "Lorem ipsum dolor sit amet. Aut adipisci natus qui modi quia et voluptas velit hic earum placeat ut dolor iusto. A asperiores dolores eos laborum quam et quia quis est impedit exercitationem. Aut autem quod est placeat pariatur quo earum quia. A praesentium reprehenderit laudantium iusto ut delectus dolores ut repellendus saepe eos quibusdam doloremque. Ut praesentium quis et nihil rerum At assumenda libero est repellendus recusandae qui sint quia sed molestiae fuga vel quae quasi. Ut rerum alias aut eaque tempora eos architecto quos ut sint ipsam! Sit tempore earum id vero ipsum ad necessitatibus esse. Et aspernatur eius ab consequatur internos ut ipsa perspiciatis et corporis voluptate eos quia velit et expedita ratione ut facere illo. Hic similique nulla est labore temporibus et veniam ducimus! Et architecto laborum qui natus nihil quo galisum quasi.";
    }
    else{
        infotitle = "PLACEHOLDER";
        infosub = "placeholder";
        videolink = "null";
        gamelink = "";
        info = "placeholder";
    }

    //title
    document.getElementById("infotitle").innerHTML = infotitle;

    //subtitle
    document.getElementById("infosubtitle").innerHTML = infosub;

    //game link
    document.getElementById("gamelink").setAttribute("href", gamelink);

    //info
    document.getElementById("info").innerHTML = info;

    //video
    /*document.getElementById("item4").innerHTML = "<iframe src=\"https://www.youtube.com/watch?v=ZBrhV5Fh2tE\"></iframe>";*/
    video = document.getElementById("video").setAttribute("src", videolink);
    video.load;

}
