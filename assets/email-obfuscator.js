/*
 *  USE THIS WEBSITE TO GENERATE THE JAVASCRIPT FOR A OBFUSCATED EMAIL: 
 *
 *     http://rot13.florianbersier.com/
 *
 *  THESE SCRIPTS MAKE IT SO A PERSON VIEWING THE WEBPAGE 
 *  HAS TO HAVE JAVASCRIPT ENABLED TO SEE THE ORGANIZERS' EMAILS.
 *  IF ANY FUTURE MAINTAINER OF THIS SITE WANTS TO CHANGE THIS, 
 *  I MEAN WANTS TO ALLOW FOLKS WITHOUT JAVASCRIPT ENABLED TO VIEW EMAIL ADDRESSES,
 *  JUST REPLACE THE LINES IN THE HTML
 *  
 *      <span id="pierce-email"></span>
 *      <noscript>(enable JavaScript to view email address)</noscript>
 *  
 *  WITH THE BLOCK
 *  
 *      <noscript>
 *          <span style="unicode-bidi:bidi-override;direction:rtl;">
 *              ude.rcu.htam@ecreipm
 *          </span>
 *      </noscript>
 *  
 *  WHERE, YOU'LL NOTICE THAT BLOCK CONTAINS THE ORGANIZER'S EMAIL SPELLED BACKWARDS.
 */

window.onload = function () {

    // Christian Williams
    document.getElementById("president-email").innerHTML="<n uers=\"znvygb:jvyyvnzf@zngu.hpe.rqh\" gnetrg=\"_oynax\">jvyyvnzf@zngu.hpe.rqh</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});

    // James Alcala
    document.getElementById("vicepresident-email").innerHTML="<n uers=\"znvygb:wnzrf.nypnyn@hpe.rqh\" gnetrg=\"_oynax\">wnzrf.nypnyn@hpe.rqh</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});

    // Jonathan Dugan
    document.getElementById("treasurer-email").innerHTML="<n uers=\"znvygb:wbaqhtna@zngu.hpe.rqh\" gnetrg=\"_oynax\">wbaqhtna@zngu.hpe.rqh</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});

    // Mike Pierce
    document.getElementById("secretary-email").innerHTML="<n uers=\"znvygb:zcvrepr@zngu.hpe.rqh\" gnetrg=\"_oynax\">zcvrepr@zngu.hpe.rqh</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});

    // Margarita Roman
    document.getElementById("margarita-email").innerHTML="<n uers=\"znvygb:znetnevgn.ebzna@hpe.rqh \" gnetrg=\"_oynax\">znetnevgn.ebzna@hpe.rqh </n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);})
        
};

