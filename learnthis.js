var issueIndex = Number(localStorage.getItem('issueIndex') || 0)
var colors = [
  '008FEE',
  'EE8F00',
  '00DEEE',
  'EE003F',
  '8F00EE',
]

var topics = [
  {
    title: 'Server Gate',
    search: 'what is all this stuff about Hillary and emails?',
    what: 'What the heck is Server Gate?'
  },
  {
    title: 'Tax Avoidance',
    search: 'Trump\'s tax avoidance',
    what: 'What the heck is Tax avoidance?'
  },
  {
    title: 'Roe vs Wade',
    search: 'Roe vs Wade',
    what: 'What the heck is Roe vs Wade?'
  },
  {
    title: 'Nasty Woman',
    search: 'Trump\'s nasty woman comment',
    what: 'What the heck is a nasty woman?'
  },
  {
    title: 'Locker Room Talk',
    search: 'Trump\'s locker room talk',
    what: 'What the heck is Trump saying?'
  },
  {
    title: 'Clinton Foundation',
    search: 'Wikileak Clinton Foundation',
    what: 'What the heck is Clinton\'s Foundation?'
  },
  {
    title: "Trump's Wall",
    search: "Trump\'s wall",
    what: 'What the heck is this wall?'
  },
  {
  title: 'Extreme Vetting',
  search: 'Trump\'s extreme vetting policy',
  what: 'What the heck is Trump\'s immigration policy?'
  },
  {
  title: 'Radical Islam',
  search: 'Trump\'s views on Islam',
  what: 'What the heck is Trump\'s view on Islam?'
  },
  {
  title: 'Birther Movement',
  search: 'Birther movement Obama',
  what: 'What the heck is the Birther movement?'
  },
  {
  title: 'Angry White Males',
  search: 'Angry White Male US election',
  what: 'What the heck are Angry White Males?'
  },
  {
  title: 'NAFTA',
  search: 'NAFTA trade agreement US election',
  what: 'What the heck is NAFTA?'
  },
  {
  title: 'Trumped up',
  search: 'trickle down economic policy',
  what: 'What the heck are Trickle down economics?'
  },
  {
  title: 'Stamina',
  search: 'Hillary Clinton\'s stamina',
  what: 'What the heck does stamina have to do with it?'
  },
  {
  title: 'Second Amendment',
  search: 'Hillary Clinton\'s position second amendment',
  what: 'What the heck does Hillary think about this?'
  },
  {
  title: 'BIG GUNS',
  search: 'Trump\'s position second amendment',
  what: 'What the heck does Trump think about this?'
  },
  {
  title: 'Gay marriage',
  search: 'gay marriage policy US presidential election',
  what: 'What the heck are equal rights?'
  },
  {
    title: 'Bad Hombres',
    search: 'Bad hombres Trump',
    what: 'What the heck is a bad hombre?'
  },
  {
  title: 'Vladimir Putin',
  search: 'Trump and Putin presidential debate',
  what: 'What the heck is Putin up to?'
  }
]



function changeBackground(){
  var color = '#' + colors[issueIndex % colors.length]
  document.body.style.background = color
}

function changeTitle () {
  var topic = topics[issueIndex]

  document.getElementById('topic').innerHTML = topic.title
  document.getElementById('wth').innerHTML = topic.what
}

reset()
function reset () {
  issueIndex += 1
  issueIndex %= topics.length
  localStorage.setItem('issueIndex', issueIndex)

  changeBackground()
  changeTitle()
}

// setInterval(changeBackground, 1500)

function runGoogleThing () {
  var word = topics[issueIndex].search

  window.open('https://google.com.au/search?q=' + encodeURIComponent(word))
}
