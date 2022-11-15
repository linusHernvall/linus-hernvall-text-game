let paths = {
    'start': {
        'text': "This is the first day of your coming music career. You're in the music store and you can't \
        decide if you want to start to play guitar or drums.<br><br> Type <b>A</b> for guitar and <b>B</b> for drums.",
        'options': {
            'A': 'guitar',
            'B': 'drums'
        }
    },
    'guitar': {
        'text': "Some months have passed since you got your guitar. It's starting to get pretty hard and it \
        demands further practicing for you to get any better. It would be easier and much more fun to play \
        video games at this moment.<br><br> Type <b>A</b> for practice guitar and <b>B</b> for play video games.",
        'options': {
            'A': 'guitar-practice',
            'B': 'guitar-games'
        }
    },
    'drums': {
        'text': "Some months have passed since you got your drums. It's starting to get pretty hard and it \
        demands further practicing for you to get any better. It would be easier and much more fun to play \
        video games at this moment.<br><br> Type <b>A</b> for practice drums and <b>B</b> for play video games.",
        'options': {
            'A': 'drums-practice',
            'B': 'drums-games'
        }
    },
    'guitar-practice': {
        'text': "It's time for your first gig. Fortunately you've been practicing a lot, so you perform at your \
        highest level. An agent had his eyes on you the whole evening and he really liked what he saw. He \
        approaches you with an offer to join a much bigger band who's on their way up to success.<br><br>\
        Type <b>A</b> accept his offer and <b>B</b> for decline.",
        'options': {
            'A': 'accept-agent',
            'B': 'decline-agent'
        }
    },
    'guitar-games': {
        'text': "It's time for your first gig. You really should have spent more time on practicing guitar and less \
        on your video games. You mess up completely and the gig is a total fiasco. After this gig you put your \
        guitar away and end your dreams of becoming a rockstar."
    },
    'drums-practice': {
        'text': "It's time for your first gig. Fortunately you've been practicing a lot, so you perform at your \
        highest level. After the gig an agent approaches the band, he's on the for an new guitarist. \
        The lead guitarist of your band accepts his offer and quits your band on the spot.<br> This leaves you \
        completely broken and you soon decides to quit playing drums"
    },
    'drums-games': {
        'text': "It's time for your first gig. You really should have spent more time on practicing drums and less \
        on your video games. You mess up completely and the gig is a total fiasco.<br> After this gig you put your \
        drums away and end your dreams of becoming a rockstar."
    },
    'accept-agent': {
        'text': " Shortley after the deal you get to meet the band. You're really excited and have already started \
        to write two new songs. You're not sure which of the songs you're going to put the most effort into.<br><br> \
        Type <b>A</b> for the song 'One More Minute' and <b>B</b> for the song 'Heartless'.",
        'options': {
            'A': 'one-more-minute',
            'B': 'heartless'
        }
    },
    'one-more-minute': {
        'text': " The time has come for the first tour with your new band. The gig at the first stop is a true \
        smash and some fans invites you to a wicked party after the gig.<br><br>  \
        Type <b>A</b> to tag along with the fans to the party and <b>B</b> to get back to the tour bus for some sleep. ",
        'options': {
            'A': 'party',
            'B': 'omm-sleep'
        }
    },
    'heartless': {
        'text': " The time has come for the first tour with your new band. The gig at the first stop is a true \
        smash and some fans invites you to a wicked party after the gig. <br><br> \
        Type <b>A</b> to tag along with the fans to the party and <b>B</b> to get back to the tour bus for some sleep. ",
        'options': {
            'A': 'party',
            'B': 'hl-sleep'
        }
    },
    'party': {
        'text': "The party is really wild. You get really drunk and makes a stupid decision to do some cocaine. \
        Unluckily the cocaine is spiked with high concentrations of fentanyl and you're dying of an overdose this night."
    },
    'omm-sleep': {
        'text': " The time goes on with you and the band. Unfortunatly you never manage to write a real hit song and \
        never makes it to the top."
    },
    'omm-sleep': {
        'text': " The time goes on with you and the band. Unfortunatly you never manage to write a real hit song and \
        never makes it to the top. You end up taking a regular day job and your dream of becoming a rockstar is shattered."
    },
    'hl-sleep': {
        'text': " The time goes on with you and the band and the 'Heartless' that you wrote becomes a megahit. \
        It's topping all the big lists all over the world. The money keeps on coming and your're now able to dedicate \
        // your whole life to what you really love - playing music.<br><br> Your dreams of becoming a true rockstar are fullfilled!!!"
    }
}