const express = require('express')
const app = express()
const PORT = process.env.port ||  8000

app.use(express.static('public'))

const ghCast = {
    "curtis ashford": {
        "Portrayed by": "Donnell Turner",
        "Significant Other": "dating Portia Robinson",
        "Current storyline": "Curtis's main story right now is reconnecting with his father Marshall Ashford. Curtis grew up thinking his father was dead his entire childhood, only to find a mysterious man approach him claiming to be his father soon after he opens a club called 'The Savoy'. Initially angered and distrustful of Marshall, Curtis is gaslighted into believing that asking his father to explain where he has been his whole life is rude and none of his business. Six months after his father is introduced, we finally learn that Marshall was diagnosed with 'mental issues' and that is why he left his family thinking it would be better for his children to believe he were dead."
    },
    "portia robinson" :{
        "Portrayed by": "Brook Kerr",
        "Signficant Other": "dating Curtis Ashford",
        'Current storyline': 'Her daughter Trina Robinson is going to court for allegedly filming her best friends have sex and then releasing it to the student body of their college. Portia is also keeping a secret about the paternity of who her daughter\'s father is. It is assumed that Curtis is the father but this has not been told to the audience yet'
    },
    'drew cain' : {
        'Portrayed by': 'Cameron Mathison',
        'Significant Other': 'Currently being chem-tested with every woman on the show. Has a flirtation going on with Carly Corinthos',
        'Current storyline': 'Drew is a bit all over the place. He is working with his nephew Michael to take back control of the family business ELQ from Valentine Cassadine but in the process, he and Michael are ostracizing Ned Quartermaine. Drew is also trying to de-escalate the Sonny-Michael tension. Drew is aware that Willow\'s mother was supposedly Nina Reeves, though Carly has lied to him saying that the dna test came back negative.'
    },
    'nikolas cassadine': {
        'Portrayed by': 'Marcus Coloma',
        'Significant Other': 'married to Ava Jerome, sleeping with Esme Prince',
        'Current storyline': 'After discovering that his only son Spencer and his girlfriend Esme terrorized his wife, Nikolas has been working to re-establish a good relationship with Spencer. Not knowing the full story, he chooses to believe that his son\'s girlfriend is being unfairly treated and is her lone defender. Esme is \'threatend\' by Sonny and so Nikolas invistes her and Spencer to stay with him without asking his wife which causes strain in their relationship. The growing distance between Nik and his wife and the belief that she is leaving him drives the Prince into the arms of his son\'s lover Esme and now he is trying to keep that secret while still yearning to sleep with her again.'
    },
    'harrison chase': {
        'Portrayed by': 'Josh Swickard',
        'Significant Other': 'budding relationship with Brooklyn Quartermaine',
        'Current storyline': 'Chase\'s current storyline is doing everything he possibly can to slow down the eventual relationship he will have with Brooklyn. They have great chemistry and should have been together months ago, but the writers like to have these adults move at the most glacial pace possible till all the momentum has been sucked out of the room. Chase is an all around good guy who is patiently waiting to rejoin the force after being suspened for punching Valentine Cassadine.'
    },
    'spencer cassadine': {"Portrayed by": "Nicholas Chavez",
        "Significant Other": "currently pretending to love girlfriend Esme Prince",
        "Current storyline": "Spencer is in love with Trina Robinson. Trina was arrested and currently on trial for filming her best friends\' Josslyn Jacks and Cameron Webber first sexual experience and distributing it to their entire school. The person who did all of these terrible things was actually Spencer\'s girlfiend Esme. Spencer is working to uncover how she did this and has only told Sam and Cameron that he doesn\'t actually love Esme and is just trying to clear Trina\'s good name. He is taking a lot of hate for this right now as Trina grows closer to a new guy in town."
    },
    'victor cassadine': {"Portrayed by": "Charles Shaughnessy",
        "Significant Other": "has no current love interest on the show",
        "Current storyline": "Victor popped back up in the last year as the individual who was keeping Drew Cain hostage on behalf of Peter August. He was involved on the attempt on the lives of Laura Collins and her brother Martin Gray. It is rumored but not yet stated on the show if he is responsible for the supposed death of Luke Spencer. Currently, Victor is the most charming and interesting villain the show has had since Cyrus Renalut. He claims that \'Something is coming and the entire Cassadine family will need to unit to weather this storm\'. As the writers are very slow in revealing Victor\'s hand and his goals, its fantastic that he has such good chemistry with everyone on the show."
    },
    'laura collins': {"Portrayed by": "Genie Francis",
        "Significant Other": "married to Dr. Kevin Collins",
        "Current storyline": "Laura is currently investigating why Victor is back in town and what his ultimate goal is in an effort to protect her family. Laura spends the majority of her time being the matriach that doles out solid advice and models proper communication skills. There is no one on the show who doesn't love and respect this woman because she is always at the top of her game and has some of the best quotes in the whole show."
    },
    'brando corbin': {"Portrayed by": "Johnny Wactor",
        "Significant Other": "currently married to Sasha Gilmore",
        "Current storyline": "Brando had a one night stand with Sasha Gilmore that resulted in her getting pregnant. They decided to become a couple after that and prepared for the birth of their son which took place at Christmas 2021, but their son Liam didn\'t make it. Their acting during the Christmas storyline was next level and perfect as we spent months getting to know them as a couple as they prepared for this new life. After the death of their child, Brando and Sasha decided to stay together, though Sasha chose to isolate as a way to get over Liam\s passing and eventually got back on pills. Brando currently has no idea that their spontaneous wedding was influenced by Sasha being back on drugs."
    },
    'carly corinthos': {"Portrayed by": "Laura Wright",
        "Significant Other": "recently divorced Sonny Corinthos and has currently been having a flirtation with Drew Cain",
        "Current storyline": "Carly is in every storyline. If she\'s not, just give it some time. Her biggest storyline moment right now is that as Harmony Miller lay dying after kidnapping Carly and fighting with Alexis *please check out Harmony Miller bio*, Harmony told Carly that Willow\'s actual mother is Nina Reeves and she begged Carly to keep Willow safe as Nina loves too strong and would hurt Willow...*again check out Harmony because thats the pot calling the kettle black if you ever saw one*. Carly told Drew this in confidence, and during the trial for visitation between Michael and Willow vs Nina, Carly had a dna test ran to determine if it was true. Having the truth of the claim confirmed, she chose not to tell Willow and to tell Drew that it was just a lie by Harmony because it would just be easier for everyone."
    },
    'michael corinthos': {"Portrayed by": "Chad Duell",
        "Significant Other": "dating Willow Tait",
        "Current storyline": "Michael\'s most interesting storyline right now is that he has declared war on his father Sonny as he believes Sonny chose Nina over his family. It has just been revealed that Sonny\'s newest hire Dex is actually a plant hired by Michael to supposedly destroy his father\'s illegal business from the inside. We haven\'t got a lot of information on it yet, but the reveal was one of the first signs of how far Michael is willing to go to destroy his father."
    },
    'sonny corinthos': {"Portrayed by": "Maurice Benard",
        "Significant Other": "recently divorced Carly Corinthos and currently in a fliration with Nina Reeves",
        "Current storyline": "Sonny is going through it with his family. He was in an accident, lost his memories for nine months in quaint little town where he had adventures helping the couple that took him in. During that time, he met and fell in love with Nina Reeves, who knew who he was the entire time, but didn't tell him for debatable reasons and those debatable reasons are why some hate Nina and some give her the benefit of the doubt. Upon finding out who he actually was and that he has a family waiting for him, he comes back to Port Charles, but because he was in love with Nina, he doesn\'t tell anyone that she knew who he was and that he had feelings for her. This comes out in the worst possible way, during a trial in which his son Michael has convinced a politician to try and charge Nina for failing to report that Sonny was alive. The fallout causes a fracture in his marriage and between Sonny and his son Michael. At a certain point, Sonny thinks that Carly has given up on them and in a moment of weakness (depending on who you ask) sleeps with Nina and right after Carly walks in on them. Divorce city. His family broken, Sonny is now trying to re-establish a connection with his son, his children and build some kind of future with Nina."
    },

'alexis davis': {'Portrayed by': 'Nancy Lee Grahn',
    'Significant Other': 'no current relationship right now',
    'Current storyline': 'Alexis current storyline is focused on running the Invader. Stories that involve the public or needing a publication slant go through her. She published the story from Jossyln and Cameron\'s throughts and perspective on a sex tape being made and distrubted to the public without their consent. Alexis was also the publication that a reporter did a series revealing the truth behind who Nina Reeves was and what she did.'
},
'anna devane': {'Portrayed by': 'Finola Hughes',
    'Significant Other': 'budding relationship with Valentin Cassadine',
    'Current storyline': 'Anna\'s main storyline is really bouncing between establishing a solid relationship with Valentin Cassadine and investigating the death/murder of Luke Spencer. Anna has great chemistry with whoever you want to pair her with so its good they also paired her with Valentin who has charm for days. Valentin seems to have some secrets we as an audience don\'t know about that may cause this potential relationship to drown but we will see.'
},
'dante falconeri': {'Portrayed by': 'Dominic Zamprogna',
    'Significant Other': 'currently dating Samantha McCall',
    'Current storyline': 'Dante serves as a middleground, similar to Drew between Michael and Sonny. He is doing his best to offer good advice, not commit to anyone side and try and foster a peace and coming together between the two. You will see him more with Sonny lately than Michael, as Sonny doesn\'t have too many people in his corner that he can go to for advice and perspective. The other storyline going with Dante is that there is a new guy in town named Cody that Dante knew from summer camp and they apparently got into a lot of trouble together. As far as the extent to what that trouble looked like, we don\'t know yet.'
},
'hamilton finn': {'Portrayed by': 'Michael Easton',
    'Significant Other': 'dating Elizabeth Webber-Baldwin',
    'Current storyline': 'Finn is in a new relationship with Elizabeth and is doing his best to support her and her family. There was a period where strange things kept happening around Elizabeth (her dead husband\'s art studio was set on fire, her ring showed up at work, a dress was ruined, strange dreams) but this was all revealed to actually be Elizabeth as a possible side effect of her sleeping medication. ...Elizabeth is currently staying in Shady Brooks under observation and is away from her family and Finn so she can get better. Finn\'s storyline is really, \'Hey what\'s going on with Elizabeth and how can I support her? \'. '
},
'austin gatlin-holt': {'Portrayed by': 'Roger Howarth',
    'Significant Other': 'dating Maxie Jones',
    'Current storyline': 'Austin hasn\'t had a storyline in months other than \'I\'m dating Maxie\'. His first storlying was about trying to be recognized the Quartermaines as his father is Jimmy Lee Holt, but that has been dropped. Seeds have been dropped about a potential storyline as someone was following Maxie and Austin when they went camping and Austin told this individual not to contact him like this after Maxie left. We haven\'t been told who this person is yet or why they are following Austin'
},
'sasha gilmore': {'Portrayed by': 'Sofia Mattsson',
    'Significant Other': 'married to Brando Corbin',
    'Current storyline': 'After the death of her child Liam, Sasha got back on pills to cope. During one manic trip, she decided to marry Brando and though she does love him, it would probably be a lie to say that her being back on drugs didn\'t have an influence on her decision. While out with her work mates, she is photographed taking pills and after rushing out with her mother-in-law, she accidently hits Harmony Miller on the road. The guilt of killing Harmony Miller, the mother of one of her best friends Willow, Sasha realizes she has a problem and decideds to give up pills just as her mother-in-law Gladys puts two and two together. To keep Gladys from telling her son Brando because Gladys thinks Brando should know so he can support her and be there for her, Sasha instead agrees to let Gladys move in with them to appease Gladys.'
},
'jossyln jacks': {'Portrayed by': 'Eden McCoy',
    'Significant Other': 'dating Cameron Webber',
    'Current storyline': 'Josslyn\'s current storyline is working with Trina to exonerate her best friend and find proof that Esme filmed her and Cameron and distributed it to the whole school. Her biggest personal problem is that she feels distance between her and her boyfriend Cameron as she doesn\'t know that Cam is working with Spencer to catch Esme. Cameron has not told Josslyn any of this from fear that Josslyn wouldn\'t be able to help herself and ruin the entire plan.'
},
'ava jerome': {'Portrayed by': 'Maura West',
    'Significant Other': 'married to Nikolas Cassadine',
    'Current storyline': 'Ava is trying to re-establish her relationship with her husband after he invited his son Spencer and his girlfiend Esme to live with them. The problem with this is that Ava believes that Esme is responsible for the trouble that her employee Trina Robinson who she views like an adopted daughter and Ava wants nothing to do with her. After some initial problems, Ava is ready to recommit to her husband and move forward together, not knowing that Nikolas has slept with Esme in a moment of weakness believing that his relationship with Ava is over and that is going to divorce him.'
},
'maxie jones': {'Portrayed by': 'Kristen Storms',
    'Significant Other': 'dating Austin Gatlin-Holt',
    'Current storyline': 'Maxie has survived Peter August and is currently enjoying being a mother to her children and the recent launch of her company Deception going public that has made all of them rich.'
},
'samantha mccall': {'Portrayed by': 'Kelly Monaco',
    'Significant Other': 'dating Dante Falconeri',
    'Current storyline': 'Sam is dating Dante, is curious about his old friendship with Cody and on the fringes of investigation. I think Sam is on the backburner so the writers can use her whereever they think she works best. She was involved in the planning stages of figuring out what\'s going on with Victor but there\'s been no forward movement on that in sometime.'
},
'harmony miller': {'Portrayed by': 'Inga Cardranel',
    'Significant Other': 'had a budding relationship with Alelxis Davis',
    'Current storyline': 'Harmony Miller is dead. Before she died, these are the confirmed facts. Raised Willow Tait and we all thought she was her mother, but the writers decided that Willow is actually the daughter of Nina Reeves who it turns out had twins while she was in a coma. Harmony got one of those twins while the other Nelle Benson grew up to marry Michael Quartermaine and attempt to ruin his entire life. Harmony joined a cult that resulted in her husband being murdered and Harmony offering her daughter Willow up to be raped by the cult leader Shiloh. Harmony later would sneak into Alexis Davis\'s home and murder her boyfriend Neil Byrne and then two years later she would murder his brother when he found out. Harmony then would kidnap Carly with the intention of killing her for finding out that Willow is not her actual daughter. Harmony Miller was a trip.'
},
'esme prince': {'Portrayed by': 'Avery Kristen Pohl',
    'Significant Other': 'dating Spencer Cassadine, sleeping with Nikolas Cassadine',
    'Current storyline': 'Esme is the most active villain on the show right now. Esme is in league with Ryan Chamberlain and she calls hims father so we are led to believe they are father and daughter, though question on her true parentage is a cause for debate. Some think that she is Felicia Scorpio\'s daughter and either Mac or Ryan\'s child.  Major storyline: Esme planned a ski trip with Trina, Spencer, Cameron and Josslyn, but her true goal was to spike Trina\'s drink with pills and record Cam and Josslyn\'s first time while her and Spencer were on their way home after initiating a fight as plausible denieability as they would be absent. Esme then uploaded the video to everyone in their school and pinned the whole thing on Trina by dropping the phone that initially had the video into Trina\'s belongings. Other storylines: Due to her \'father\' Ryan\'s obssession with Ava, she was told to seduce Nik to break up their relationship. Esme was successful in seducing Nikolas to sleep with her, but tells Ryan \'I know you don\'t want to hear it, but Ava and Nikolas are truly commited to each other. To really sell this, I\'m going to need to sleep with that man several times just to make sure they actually break up.\'. There may be truth to her statement, but Esme may develop feelings for Nikolas which would go a long way in redeeming his character.'},
'brook lyn quartermaine': {'Portrayed by': 'Amanda Setton',
    'Significant Other': 'fliration with Harrison Chase',
    'Current storyline': 'Brook Lynn\'s old manager Linc is back in town and he is selling her songs that she wrote as they were part of his original contract with her. Brook Lynn is working with Chase to try and find a way to get her songs back, while also doing everything they can to slow down the progression of a relationship between her and Chase. Thats it. Thats there story.'},
'nina reeves': {'Portrayed by': 'Cynthia Watros',
    'Significant Other': 'flirtation with Sonny Corinthos',
    'Current storyline': 'Nina is actually Willow Tait\'s mother but has no idea. Nina just lost a court battle to get visitation rights to visit her daughter Nelle\'s son with Michael. Michael and Willow hate Nina because of what Nina did to Michael\'s family when she knew where Sonny was but instead of telling anyone, she just fell in love with him. Nina is slowly moving to becoming Sonny\'s new girlfriend.'},
'felicia scorpio': {'Portrayed by': 'Kristina Wagner',
    'Significant Other': 'married to Mac Scorpio',
    'Current storyline': 'Felicia is working with Laura to figure out why Victor is in town. Felicia is pushing Anna and Valentin to get together. Felicia has been hinting at wanting to have a child with Mac...or maybe she doesn\'t and feels like they missed their shot. Sure would be crazy if they actually already had a kid together and the writers are working on how they would make that make sense you know? Felicia is antagonizing Ryan cause he caused so much pain her life. That\'s what Felicia is doing.'},
'willow tait': {'Portrayed by': 'Katelyn MacMullen',
    'Significant Other': 'dating Michael Corinthos',
    'Current storyline': 'Has no idea that Nina Reeves is actually her mother. Willow is currently raising her fraternal twin sister Nelle\'s child Wiley, completely unaware that they actually share dna. Willow is stunned to find out that Harmony Miller is not her mother and that Harmony was involved in so many terrible things. After seeing how far Nina would go to besmirch Michael\'s name and ruin his family, Willow wants nothing to do with Nina and will do anything to keep her away from Wiley.'},
'elizabeth webber-baldwin': {'Portrayed by': 'Rebecca Herbst',
    'Significant Other': 'dating Hamilon Finn',
    'Current storyline': 'Elizabeth thought she was being stalked, then haunted, and now learned that she was terrorizing herself as a side effect of her sleeping medication. To get herself right, Elizabeth has checked herself into Shady Brooks under observation and tells her boys and her boyfriend to be strong for her and she will be back as soon as she is better.'},
'britt westbourne': {'Portrayed by': 'Kelly Thiebaud',
    'Significant Other': 'unattached at the moment',
    'Current storyline': 'Britt has a disease that will end her life early and the only people who know are her mother and her ex-lover Jason Morgan. Britt is struggling with letting go of Jason as he is presumed dead, and also trying to find the passion to keep living knowing she is going to die at a young age. Britt just had a meet-cute with new guy in town Cody as he landed on her and they both went into the pool at an event while she was drunk.'},


}
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
    
})

app.get('/api/:name', (req, res)=>{
    const ghCharacterName = req.params.name.toLowerCase()
    if(ghCast[ghCharacterName]){
        res.json(ghCast[ghCharacterName])
    }else{
        res.json('Error, no character detected')
    }
    res.json(ghCast)
})

app.listen(process.env.PORT || PORT, (req, res)=>{
    console.log('This server is running really stupendiously well my friend!')
})