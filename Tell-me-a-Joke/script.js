let a = document.getElementById("jk");

const arr = [' A woman gets on a bus with her baby. The bus driver says: Ugh, that’s the ugliest baby I’ve ever seen! The woman walks to the rear of the bus and sits down, fuming. She says to a man next to her: The driver just insulted me!” The man says: You go up there and tell him off. Go on, I’ll hold your monkey for you',
  'I went to the zoo the other day. There was only a dog in it – it was a shi'
  , ' Police arrested two kids yesterday, one was drinking battery acid, the other was eating fireworks. They charged one – and let the other one off.',
  ' Doc, I can’t stop singing the ‘Green Green Grass of Home’. He said: “That sounds like Tom Jones syndrome.” “Is it common?” I asked.  “It’s not unusual” he replied.'  , ' I’m on a whiskey diet. I’ve lost three days alreadyMy therapist says I have a preoccupation with vengeance. We’ll see about that.',
  ' A priest, a rabbi and a vicar walk into a bar. The barman says, “Is this some kind of joke?'
  , ' A group of chess enthusiasts checked into a hotel and were standing in the lobby discussing their recent tournament victories. After about an hour, the manager came out of the office and asked them to disperse. “But why?” they asked, as they moved off. “because,” he said “I can’t stand chess nuts boasting in an open foyer'  , ' I was in Tesco’s and I saw this man and woman wrapped in a barcode. I said, “Are you two an item?'
  , '  I was having dinner with Garry Kasporov (world chess champion) and there was a check tablecloth. It took him two hours to pass me the salt']

const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);

a.innerHTML = arr[Math.floor(Math.random() * arr.length)];

