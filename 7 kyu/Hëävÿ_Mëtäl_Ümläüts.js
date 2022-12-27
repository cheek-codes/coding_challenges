// Hëävÿ Mëtäl Ümläüts

// Your retro heavy metal band, VÄxën, originally started as kind of a joke, just because why would anyone want to use the crappy foosball table in your startup's game room when they could be rocking out at top volume in there instead? Yes, a joke, but now all the top tech companies are paying you top dollar to play at their conferences and big product-release events. And just as how in the early days of the Internet companies were naming everything "i"-this and "e"-that, now that VÄxënmänïä has conquered the tech world, any company that doesn't use Hëävÿ Mëtäl Ümläüts in ëvëry pössïblë pläcë is looking hopelessly behind the times.

// Well, with great power chords there must also come great responsibility! You need to help these companies out by writing a function that will guarantee that their web sites and ads and everything else will RÖCK ÄS MÜCH ÄS PÖSSÏBLË! Just think about it -- with the licensing fees you'll be getting from Gööglë, Fäcëböök, Äpplë, and Ämäzön alone, you'll probably be able to end world hunger, make college and Marshall stacks free to all, and invent self-driving bumper cars. Sö lët's gët röckïng and röllïng! Pëdal tö thë MËTÄL!

// Here's a little cheatsheet that will help you write your function to replace the so-last-year letters a-e-i-o-u-and-sometimes-y with the following totally rocking letters:

// A = Ä = \u00c4     E = Ë = \u00cb     I = Ï = \u00cf
// O = Ö = \u00d6     U = Ü = \u00dc     Y = Ÿ = \u0178
// a = ä = \u00e4     e = ë = \u00eb     i = ï = \u00ef
// o = ö = \u00f6     u = ü = \u00fc     y = ÿ = \u00ff




// Will we be given strings? Will we be given empty strings? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return a new sting where all the vowels, including y are replaced with an umlaut version of them




// If we were given "Announcing the Macbook Air Guitar", should return  "Ännöüncïng thë Mäcböök Äïr Güïtär"
// If we were given"Facebook introduces new heavy metal reaction buttons",should return "Fäcëböök ïntrödücës nëw hëävÿ mëtäl rëäctïön büttöns"
// If we were given "Strong sales of Google's VR Metalheadsets send tech stock prices soaring", should return "Ströng sälës öf Gööglë's VR Mëtälhëädsëts sënd tëch stöck prïcës söärïng"
// If we were given "Vegan Black Metal Chef hits the big time on Amazon TV", should return "Vëgän Bläck Mëtäl Chëf hïts thë bïg tïmë ön Ämäzön TV"




function heavyMetalUmlauts(boringText) {
    return boringText
      .replace(/A/g, "Ä")
      .replace(/O/g, "Ö")
      .replace(/a/g, "ä")
      .replace(/o/g, "ö")
      .replace(/E/g, "Ë")
      .replace(/U/g, "Ü")
      .replace(/e/g, "ë")
      .replace(/u/g, "ü")
      .replace(/I/g, "Ï")
      .replace(/Y/g, "Ÿ")
      .replace(/i/g, "ï")
      .replace(/y/g, "ÿ")
}






heavyMetalUmlauts=T=>T.replace(/./g,X=>({A:'Ä',E:'Ë',I:'Ï',O:'Ö',U:'Ü',Y:'Ÿ',a:'ä',e:'ë',i:'ï',o:'ö',u:'ü',y:'ÿ'})[X]||X)







const heavyMetalUmlauts = boringText =>
      boringText
      .replace(/A/g, "Ä")
      .replace(/O/g, "Ö")
      .replace(/a/g, "ä")
      .replace(/o/g, "ö")
      .replace(/E/g, "Ë")
      .replace(/U/g, "Ü")
      .replace(/e/g, "ë")
      .replace(/u/g, "ü")
      .replace(/I/g, "Ï")
      .replace(/Y/g, "Ÿ")
      .replace(/i/g, "ï")
      .replace(/y/g, "ÿ")






function heavyMetalUmlauts(boringText) {

var dict = {
    'A' : 'Ä',    'E' : 'Ë',    'I' : 'Ï',
    'O' : 'Ö',    'U' : 'Ü',    'Y' : 'Ÿ',
    'a' : 'ä',    'e' : 'ë',    'i' : 'ï',
    'o' : 'ö',    'u' : 'ü',    'y' : 'ÿ'
}

return boringText.replace(/[AEIOUYaeiouy]/g, r => dict[r] || "");
}






function heavyMetalUmlauts(str) {
	let rp ={A : "Ä", E : "Ë", I : "Ï", O : "Ö", U : "Ü", Y : "Ÿ", a : "ä", e : "ë", i : "ï", o : "ö", u : "ü", y : "ÿ"};
  return str.replace(/[aeiouy]/ig, m=>rp[m]);   
}






function heavyMetalUmlauts(b) {
    let hash = {
      A: 'Ä', O: 'Ö', E: 'Ë', I: 'Ï', U: 'Ü', Y: 'Ÿ',
      a: 'ä', o: 'ö', e: 'ë', i: 'ï', u: 'ü', y: 'ÿ'
    };
    return b.split('').map(a=>hash[a] ? hash[a] : a).join('');
}






function heavyMetalUmlauts(boringText) {
  
    const replace = {
      'A': '\u00c4', 'a': '\u00e4',
      'E': '\u00cb', 'e': '\u00eb',
      'I': '\u00cf', 'i': '\u00ef',
      'O': '\u00d6', 'o': '\u00f6',
      'U': '\u00dc', 'u': '\u00fc',
      'Y': '\u0178', 'y': '\u00ff'
    }
  
    return boringText.split('').map(e => replace[e] ? replace[e] : e).join('')
}






function heavyMetalUmlauts(boringText) {
    let arrString = boringText.split('')
    
    for (let i = 0; i < arrString.length; i++) {
        (arrString[i] === 'A') ? arrString[i] = '\u00c4' : (arrString[i] === 'a') ? arrString[i] = '\u00e4' : (arrString[i] === 'E') ? arrString[i] = '\u00cb' : (arrString[i] === 'e') ? arrString[i] = '\u00eb' : (arrString[i] === 'I') ? arrString[i] = '\u00cf' : (arrString[i] === 'i') ? arrString[i] = '\u00ef' : (arrString[i] === 'O') ? arrString[i] = '\u00d6' : (arrString[i] === 'o') ? arrString[i] = '\u00f6' : (arrString[i] === 'U') ? arrString[i] = '\u00dc' : (arrString[i] === 'u') ? arrString[i] = '\u00fc' : (arrString[i] === 'Y') ? arrString[i] = '\u0178' : (arrString[i] === 'y') ? arrString[i] = '\u00ff' : arrString[i] = arrString[i]
    }
  
    return arrString.join('')                   
}






const heavyMetalUmlauts = boringText => 
  (umlauts => boringText.replace(/[aeiouy]/gi, element => umlauts[element]))
  ({'A':'Ä','a':'ä','E':'Ë','e':'ë',
    'I':'Ï','i':'ï','O':'Ö','o':'ö',
    'U':'Ü','u':'ü','Y':'Ÿ','y':'ÿ',})






function heavyMetalUmlauts(boringText) {
    return boringText.split('').map(function (s) {
        switch (s) {
        case 'A': s = 'Ä'; break;
        case 'E': s = 'Ë'; break;
        case 'I': s = 'Ï'; break;
        case 'O': s = 'Ö'; break;
        case 'U': s = 'Ü'; break;
        case 'Y': s = 'Ÿ'; break;
        case 'a': s = 'ä'; break;
        case 'e': s = 'ë'; break;
        case 'i': s = 'ï'; break;
        case 'o': s = 'ö'; break;
        case 'u': s = 'ü'; break;
        case 'y': s = 'ÿ'; break;
        }
        return s;
    }).join('');
}