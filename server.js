const express = require('express')
const app = express()
const PORT = process.env.port ||  8000

app.use(express.static('public'))

const ghCast = {
"curtis ashford": {
	"Portrayed by": "Donnell Turner",
	"Significant Other": "Portia Robinson",
	"Current storyline": "Curtis's main story right now is reconnecting with his father Marshall Ashford. Curtis grew up thinking his father was dead his entire childhood, only to find a mysterious man approach him claiming to be his father soon after he opens a club called 'The Savoy'. Initially angered and distrustful of Marshall, Curtis is gaslighted into believing that asking his father to explain where he has been his whole life is rude and none of his business. Six months after his father is introduced, we finally learn that Marshall was diagnosed with 'mental issues' and that is why he left his family thinking it would be better for his children to believe he were dead."},
"portia robinson" :{
    "Portrayed by": "Brook Kerr",
    "Signficant Other": "Curtis Ashford",
    'Current storyline': 'Her daughter Trina Robinson is going to court for allegedly filming her best friends have sex and then releasing it to the student body of their college. Portia is also keeping a secret about the paternity of who her daughter\'s father is. It is assumed that Curtis is the father but this has not been told to the audience yet'},
'drew cain' : {
    'Portrayed by': 'Cameron Mathison',
    'Significant Other': 'Currently being chem-tested with every woman on the show. Has a flirtation going on with Carly Corinthos',
    'Current storyline': 'Drew is a bit all over the place. He is working with his nephew Michael to take back control of the family business ELQ from Valentine Cassadine but in the process, he and Michael are ostracizing Ned Quartermaine. Drew is also trying to de-escalate the Sonny-Michael tension. Drew is aware that Willow\'s mother was supposedly Nina Reeves, though Carly has lied to him saying that the dna test came back negative.'
},
'nikolas cassadine': {
    'Portrayed by': 'Marcus Coloma',
    'Significant Other': 'Ava Jerome',
    'Current storyline': 'After discovering that his only son Spencer and his girlfriend Esme terrorized his wife, Nikolas has been working to re-establish a good relationship with Spencer. Not knowing the full story, he chooses to believe that his son\'s girlfriend is being unfairly treated and is her lone defender. Esme is \'threatend\' by Sonny and so Nikolas invistes her and Spencer to stay with him without asking his wife which causes strain in their relationship. The growing distance between Nik and his wife and the belief that she is leaving him drives the Prince into the arms of his son\'s lover Esme and now he is trying to keep that secret while still yearning to sleep with her again.'
},
'harrison chase': {
    'Portrayed by': 'Josh Swickard',
    'Significant Other': 'budding relationship with Brooklyn Quartermaine',
    'Current storyline': 'Chase\'s current storyline is doing everything he possibly can to slow down the eventual relationship he will have with Brooklyn. They have great chemistry and should have been together months ago, but the writers like to have these adults move at the most glacial pace possible till all the momentum has been sucked out of the room. Chase is an all around good guy who is patiently waiting to rejoin the force after being suspened for punching Valentine Cassadine.' 
}

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