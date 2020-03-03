var NumberOfWords = 18

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "She sells sea shells by the seashore. And the shells that she sells are sea shells for sure."

words[2] = "Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, Where’s the peck of pickled peppers that Peter Piper picked?"

words[3] = "I scream, you scream, we all scream for ice cream!"

words[4] = "If a dog chews shoes, whose shoes does he choose?"

words[5] = "Betty Botter bought a bit of butter but the bit of butter was too bitter, so Betty bought a better bit of butter to make the bitter butter better."

words[6] = "How much wood would a woodchuck chuck, If a woodchuck could chuck wood?. A woodchuck would chuck as much wood as a woodchuck would, if a woodchuck could chuck wood."

words[7] = "Red Lorry, yellow lorry"

words[8] = "A tutor who tooted the flute tried to tutor two tooters to toot. Said the two to the tutor, is it harder to toot or to tutor two tooters to toot?"

words[9] = "If one doctor doctors another doctor, does the doctor who doctors the doctor doctor the doctor the way the doctor he is doctoring doctors?. Or does the doctor doctor the way the doctor who doctors doctors?"

words[10] = "I thought a thought but the thought I thought, wasn’t the thought you thought I thought."

words[11] = "Fuzzy Wuzzy was a bear, Fuzzy Wuzzy had no hair then Fuzzy Wuzzy wasn’t fuzzy, was he?"

words[12] = "Twelve twins twirled twelve twigs."

words[13] = "Six slimey snails slid slowly seaward"

words[14] = "The sixth sheik’s sixth sheep is sick."

words[15] = "A skunk sat on a stump and thunk the stump stunk but the stump thunk the skunk stunk."

words[16] = "Whether the weather be fine or whether the weather be not, whether the weather be cold or whether the weather be hot, we’ll weather the weather whatever the weather,whether we like it or not."

words[17] = "How many yaks could a yak pack pack if a yak pack could pack yaks?"

words[18] = "Swan swam over the sea, swim, swan, swim! Swan swam back again well swum, swan!"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}