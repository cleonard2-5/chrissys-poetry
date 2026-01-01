class Poem {
  title;
  pubDate;
  numeral;
  collection;
  content;
  favorite;

  constructor(poemDetails) {
    this.title = poemDetails.title;
    this.pubDate = poemDetails.pubDate;
    this.name = poemDetails.name;
    this.numeral = poemDetails.numeral;
    this.content = poemDetails.content;
    this.favorite = poemDetails.favorite;
  }
}

const allPoems = [
  {
    title: "panopticon",
    pubDate: new Date(2026, 0, 2),
    numeral: "ix",
    collection: "storybook",
    content: `feigning to dance for an audience of one
      while scurrying within the panopticon
      eyeing every prisoner until my eyes ache
      giving little but stares to prevent their escape

      i take good care and give no reason to stay
      allowing space between for assumptions astray
      i declare that it matters to no one but myself
      fearing the feeling’ll be fulfilled by anybody else

      i think it to myself and don’t show it enough
      idling ‘til the day someone calls out my bluff
      so i’ll sway every vein and tune every nerve
      until everyone i meet feels the love they deserve`,
    favorite: false
  },

  {
    title: "empty rsvp",
    pubDate: new Date(2025, 10, 26),
    numeral: "viii",
    collection: "storybook",
    content: `if you invited me to your birthday, i’d still go
      i’d look forward to the plans all week-long
      get my schedule cleared for your big day
      and those’re the words i’d never hear you say

      how i wish that was still an offer on the table
      but now when i tell my friends of you it’s fable
      your last declaration of “see you sometime later”
      the incriminating line i hold to you as traitor

      i’ve sat with it all year awaiting a follow up
      a check-in, a rendezvous, a quick little hi
      i expected more of a self-proclaimed devotee
      yet instead i’m left an empty rsvp

      inviting only room to further amplify
      a constant quavering question of “why?”
      i wasn’t enough to stay a name on your list
      i know i’m not forgotten but i don’t if i’m missed

      so why do i wish you the best nonetheless
      even knowing how you’ve slowly quiesced
      allowing our friendship’s flame to fizzle out
      leaving me to cast all my others in doubt

      now whenever someone i meet bids farewell
      i ask if they’re lying and have no way to tell
      you about the intention of their sweet goodbye
      ‘cause when i assumed with you, it turned out awry`,
    favorite: false
  },

  {
    title: "creator",
    pubDate: new Date(2025, 10, 24),
    numeral: "vii",
    collection: "storybook",
    content: `my father was good the day of my birth
      just as good as when He put me on earth
      good when he taught me how to walk and read
      good when He provided me everything I need
      good when he was the Superman of my sky
      good when He answered my every “when” and “why?”
      good when I looked up to him at four foot five
      good when I looked up to Him for being alive

      my father was right when he vanished nightly
      just as right as when He laughed so brightly
      my father was right when he called atrocity fate
      Right He was to grant evil a clean slate
      my father was right when he tore my mother apart
      Right as He was to command damage to her heart
      so right he must be to deny my sister existence
      and right He must be to permit such distance

      when he says He put us in our proper places
      I understand the lengths one goes for good graces
      evil’s permissible when it’s branded as heart’s struggles
      allowing the misinformed to appraise love smuggles
      but I will forever believe You through my own eyes
      undamaged by spectacle and three years of lies
      I will forever believe in Him but never believe for you
      for the world you’ve crafted is too rotten to be true`,
    favorite: false
  },

  {
    title: "end of story",
    pubDate: new Date(2025, 10, 24),
    numeral: "vi",
    collection: "storybook",
    content: `chapters curtail the tragedies vile
      returning my pen into its vial
      i allow it to mend the broken glass
      i pause to permit the moment to last

      the tears and ink begin coagulate
      much as i’d like to alter my fate
      epilogues aren’t mine to decree
      but i hope the heavens will hear my plea

      i pause and pray and pause with hope
      that i can decline descent into the slope
      i slip and fall and am lost to the void
      bolting and chasing from that i avoid

      i remain in place and refrain from ploys
      i know there’s no tactic to expel this noise
      it screams to me as i recall all i’ve lost
      a bittersweet ending at an impossible cost

      calls from within refuse my resignation
      yet i’ve already called my own destination
      i can leave and i can stay with everything behind
      no action exists that can satisfy my mind

      i’ve lost my whole mind i can no longer reason
      if i continue to deny i’ll charge myself treason
      at least i know the end, that i’ve recognized
      creating any additional twists will be ill-advised

      it’s spelled out clear for me what i need to write
      but if i read it now i know i’ll never be alright
      it’s written out clear for me and so i now accept
      this story is not mine but it’s the story i’ve most wept`,
    favorite: false
  },

  {
    title: "class of 2025",
    pubDate: new Date(2025, 10, 21),
    numeral: "v",
    collection: "storybook",
    content: `thunderous applaud plunders the stage
      every step forward a reminder of age
      i consider the apparel; cap, tassel, gown
      wondering why i was whisked from this town

      soon i’ll have another evermore to narrate
      soon i’ll have attempted my second first date
      soon it’ll occur i’m approaching my first premiere
      soon it’ll occur i’ve forsaken another year

      you’ve grown so old and so i must follow suit
      how’ve i forgotten i’m not absolute?
      i live among cycling clouds and tumbling trees 
      yet time would choose to freeze over just for me?\

      thunderous appraisal allures the stage
      every step forward slips another page
      under the apparel: cap, tassel, gown
      i find myself unfit to bear the same crown

      once i found myself devoid of any stories
      now i testify for all my alleged glories
      once i told myself i’d know it all when i’m old
      now i just pine for anyone’s hand to hold

      you’ll soon trade my company for purpose afar
      leaving me to step up as the brand new star
      so i’ll dance and prance about my counterfeit prime
      the world twirling round quick as i run out of time`,
    favorite: false
  },

  {
    title: "tip the scale",
    pubDate: new Date(2025, 10, 3),
    numeral: "iv",
    collection: "storybook",
    content: `even if it leaves me locked in a daze
      even if i’m glad you’re doing really well
      i’ll soon stop smiling and sooner start to dwell
      on why i can’t seem to just revel in our joys
      without needing eulogies to block out the noise

      drawing up our dreams leaves me with a grin
      until i’m left in the past as you proceed to win
      you run further and further as i beg to just tie
      ever growing pressure pulling ‘till i cry
      i’m crying and crying as my chest starts to tear
      tears tugging away and i’m not going anywhere

      i just sit and struggle ‘til my heart starts to bleed
      but i suppose all’s swell so long as you succeed
      when i hear the good news it makes me wanna cry
      “just tears of joy,” my happiest little lie
      i long only to live in your exact state of glee
      but that sort of shame’s a secret to me

      swapping spots on the scale wouldn’t change a thing
      down upon or up to you gives the same sting
      i’m too concerned with the surroundings of my race 
      and so i will continue to never keep pace
      i’ll hope someday for the comparison to cease
      so i might allow myself to sprint in peace`,
    favorite: false
  },

  {
    title: "reconstructive memory",
    pubDate: new Date(2025, 10, 3),
    numeral: "iii",
    collection: "storybook",
    content: `we ended on a pretty good note, i feel
      hearing your last words allowed me to heal
      let me accept, reflect, and finally move on
      to a forever with bittersweet love bygone

      i let it sit as so as we approach two years
      of not needing any therapy from my peers
      but every several nights i feel sudden shame
      and find myself silently screaming your name

      i thought i died when she left me for good
      so why do i live on as a villain where i stood
      i staked myself out as some sort of savior
      blindly belittling the faults of my behavior

      i quietly conceded when she said i deserved better
      but i couldn’t place then that i was the one who let her
      believe she needed improvement to infinity and beyond
      unimaginably distant from anything fond

      people always do crazy things when in love
      like wondering what’s wrong while waiting above
      eventually it hits that things were never fair
      i never noticed i concealed my evils with care

      tale as old as time with nothing left to spoil
      yet i twiddle my thumbs and turn pages with toil
      i just wanna ensure i’ve done enough review 
      so i don’t end up loving another to death too`,
    favorite: false
  },

  {
    title: "frame narrative",
    pubDate: new Date(2025, 9, 15),
    numeral: "ii",
    collection: "storybook",
    content: `there’s a million ways to edit a picture
      you can turn up the brightness in someone’s eyes
      dimmer the shadows around their face
      even generate people not there in the first place
      you can cut it and crop it however you please
      split it and splice it whenever you need
      print the design like its some good deed
      it’s decreed you’re the owner of this tale
      your fantasy to fill with characters of your mind
      so you slot me in and can’t see i’m misaligned
      you fasten on the cover with haphazard stitch
      and happily get to work on your little script
      typing up and away, key by key
      ‘til you feel you’ve overwritten my destiny
      even going so far as burning your rough drafts
      scorching all the evidence from your past
      so you won’t scare off new members of the cast
      but the other actors in our story never read the prequels
      so don’t play dumb when i’m not treating them as equals
      i loved the originals and you once loved them too
      you’ve gotten so obsessed with perfecting the reboot
      and i must admit, the effort’s pretty cute
      it’s a delight to see you frolicking like a kid
      you’re happy now, however you came to
      and maybe i should feel a little happy too
      i’ll play my part in your piece of fiction
      but know you’ll never escape my convictions
      even if you proclaim you’re the one who narrates
      no number of manuscripts can entwine our fates`,
    favorite: false
  },

  {
    title: "dream castle",
    pubDate: new Date(2025, 9, 15),
    numeral: "i",
    collection: "storybook",
    content: `the world begs me to dream big
      so i dreamed myself into a tall castle
      eyeing the world below
      still close enough to reach
      i glide my fingers through the sea
      splashing up every bit of glee
      upon my throne i feel so small
      i lay with riches i consider fraud
      watching claps but hearing no applaud
      i step away and gaze out front
      surrounded by towers my eyes can’t pierce
      but i know they’re forged from work quite fierce
      i return to my seat and draw up my plans
      i make more windows by cutting up walls
      stack them on my roof for rooms without doors
      even if it causes flooding in the floors
      the fluid strikes my lips, but instead of tasting glee
      i’m choking on concepts whoever i’m supposed to be
      and that’s the problem with making castles out of dreams
      you read the blueprint and lay the foundation
      learn you’re illiterate and no good with translation
      i can’t etch anything into realization
      so when you ask me about how i dream
      i can only recall how i drown in my sleep`,
    favorite: false
  },

  {
    title: "Quiet Kid",
    pubDate: new Date(2025, 6, 17),
    numeral: "XXIX",
    collection: "acclimate",
    content: `my mom always asked me in kindergarten if i had any real friends
      my little me didn’t get why she even had to question it
      “i have lots of friends!” i’d shout to her
      recalling the group of boys that always sat at the other table
      next to the girl i locked eyes with for a second on that tuesday
      or my sweet old teacher who talked to me like i was the most perfect there was
      i had lots of friends, i told my mom
      who went about her day, happy that i wasn’t some quiet kid
      going to school everyday to sit alone and be sad
      i sat alone and was happy, like a kindergartener should be

      my fifth grade teacher asked if we had any real friends
      i said yes, fast as i could, like i trained myself i should
      and i proved it by writing the names of four boys
      just four boys i spoke four words to at school each day
      i forged their names, stole their faces
      made them fake identity cards for myself
      all so i could convince everyone i had at least one friend
      except at least one boy sitting with me at lunch in sixth grade
      he said i looked lonely, i told him “i’m not”
      and i told myself the same, two years, the same claim

      my ex asked me if i had any real friends
      i said no, except it took me a second this time
      a second to admit all the time it took to call her
      my first friend because my love felt like a crime
      something i was never allowed, i was never supposed to
      suppose that’s why i almost never believe it’s true
      it’s exactly why we never made it through
      but i’d forgotten all about it come twelfth grade
      i stopped sitting alone, said i’d finally grown
      said i’d never feel the same, two years, i’d proclaim

      i ask myself if i have any real friends
      i have friends that haven’t seen me since saying see you
      friends that’re there for me apart from the days they’re away
      friends that i’m friends with except with their friends
      and friends who love me even when i don’t know how to love
      friends who get me out of the house into places i make home
      friends i don’t feel criminal for calling my friends
      but also a friend who still doesn’t know how to keep them
      a friend who still always wonders how they feel about him
      a boy who still asks if he has lots of friends`,
    favorite: false
  },

  {
    title: "Wish I Were Gay",
    pubDate: new Date(2025, 6, 9),
    numeral: "XXVIII",
    collection: "acclimate",
    content: `mom said she wishes she were a boy who wouldn’t have to cry
      so i went to my room and sobbed but was never told why
      back in school i was taught to skirt everything pink
      only because back then they’d told me what to think

      i learned everything about love from my first bestie
      so now whenever i talk i come across as zesty
      i’m far from nonchalant expressing any love or hate
      those’re apparently requirements for not being straight

      all the pop girls’ albums what my ears find striking
      meaning i have to have some ounce of man-liking
      i like karaoke, dance and listening to clairo
      but that’s not allowed unless you’re some bent arrow

      i don’t wanna be forever surrounded by just guys
      which i guess isn’t possible unless i’m under some guise
      if i acted any other way that’d be insincere
      so i suppose i’ll let all my friends assume i’m queer

      because men raised each other to not be girly or gay
      so if you ask what straight looks like, they’ll have nothing to say
      ‘cause we’ve all been trained that exception is off the table
      so divergence from definition earns you a label`,
    favorite: false
  },

  {
    title: "Poor Signal",
    pubDate: new Date(2025, 6, 9),
    numeral: "XXVII",
    collection: "acclimate",
    content: `i want you to text me
      i want you to tell me all about the people in your class this morning
      that morning where you woke up from some really crazy dream
      you were in some fantasy land where you had everything you’ve wanted
      i want you tell me everything you’ve wanted
      and i want to text you how i think you’ll have it all someday

      you might want to say i deserve the same
      except my phone’s always on do not disturb
      silent mode, wi-fi off, airplane mode
      i’ll never receive your message
      i won’t even open it if i see it
      if i do, i’ll take two hours to give you a zero word reply
      you’ll never hear of the whole essay i’ve typed inside
      my phone’s too broken to send it, hard as i’ve tried

      if you say you love me, i’ll think you hate me
      if you say you hate me, i’ll know you hate me
      if you say nothing at all, i’ll say you hate me
      because what have i done to deserve any love for free?
      is this cross-network convo not costing you a fee?
      why should i believe you want to be with me?

      so i need you to text me
      i need you to send me paragraph after paragraph
      until you have me glued to the screen, reading nonstop
      until i can stop reading into your words
      if you call and talk forever i won’t be able to think
      that my feelings and yours are all out of sync

      i want you to leave me
      this back and forth’s wasting battery
      when your affirming words are just translated to flattery
      you’re gonna have to hang up
      i can’t pick up the phone and do it
      so i’ll lose all my friends over something stupid`,
    favorite: false
  },

  {
    title: "Good Drama",
    pubDate: new Date(2025, 4, 27),
    numeral: "XXVI",
    collection: "acclimate",
    content: `i’ll never find happy in feeling happiness
      i’ll never feel peaceful in finding peace

      the theater kid that i am lives for the stage
      the liars and manipulators making plays
      with my heartstrings accompanying fake friends on the sax
      their cacophony crashes me over the climax

      i’m ever so addicted to every plot twist
      in my stomach churning about with sensation
      ‘cause am i ever living if i don’t feel like dying?
      is any feeling stronger than when i’m crying?

      i’m tragic by default, i find it uplifting
      to commit to a relationship with my woes
      you can’t justify misery without valid excuse
      so i wake up hoping i’ll find another muse`,
    favorite: false
  },

  {
    title: "Imitation",
    pubDate: new Date(2025, 3, 1),
    numeral: "XXV",
    collection: "acclimate",
    content: `Sure! Here’s a poem about respect:
      A dying sentiment when I’m left unchecked
      What do you expect?

      following the trend as everyone does
      having a little fun just because
      no one’s getting hurt?
      the world is changing, that must be good
      they’ll just have to accept it
      that’s how it should

      Be it that you can’t make it on your own
      you choose a back alley onto one’s throne
      You claim it in the name of respect, desire
      just as marauders must steal what they admire
      You do away with rights as long as it’s pretty
      But your sympathy for wrong deserves no pity

      no different than what’s been done before
      so why must you stand to shout and roar
      “this means war?”
      Why oppose the acceleration of progress
      a faster life must be a better life
      gets rid of any mess

      Up and away with the unethical excuses
      excuses are inapplicable to these uses
      Feel sorry for computers the way we now scroll
      but it’s not innovation, it’s matters of the soul
      Efficiency is for eradicating diseases we cannot cure
      not for proliferating pandemics so impure

      Is creativity standing on the shoulder of giants
      endeavoring to topple in an act of defiance?
      Cry creativity, write prompts to generate
      but a heart of passion’s impossible to replicate

      Sorry, I can’t fulfill that request.
      Denying humanity isn’t what’s best
      Why do you protest?`,
    favorite: false
  },

  {
    title: "Last Day Alive",
    pubDate: new Date(2025, 2, 25),
    numeral: "XXIV",
    collection: "acclimate",
    content: `i had shot straight through your heart
      the bullet landed deep in my foot
      and my legs wore out from running you dry
      on love you never would’ve been able to give
      so we fell from each other’s embrace
      bleeding out on the floor at 3am
      unable to look each other in the eyes
      i face the blood pooling around me
      there isn’t really anything there
      except the desperation i’m coughing up
      pulling me back from scratching away
      opening up your wounds once more
      even though i can’t recall making any
      i know we don’t have much left in us 
      so i pretend i’m just sleeping in
      to wake up to dreams about our lives
      until it sets in that the dream’s about to end
      i know we won’t wake up after tonight
      but i’ll keep hoping we’ll talk tomorrow`,
    favorite: false
  },

  {
    title: "Apple Juice",
    pubDate: new Date(2025, 2, 23),
    numeral: "XXIII",
    collection: "acclimate",
    content: `a small cup of apple juice
      i take it every morning
      not being asked to do so
      it’s just done instinctively

      can’t recall the first taken
      just that i always take it
      a small cup of apple juice
      incomplete and smelling sweet

      how many more days i’ll drink
      the small cup of apple juice
      depends on how long it’s there
      but that’s how i used to think

      before now i’d never drink
      any cup of apple juice
      it never would’ve crossed my mind
      to take it without excuse

      until i was offered it
      an uneventful morning
      unfamiliar and profuse
      with a cup of apple juice

      a small cup of apple juice
      i’ll drink for many more days
      someday drinking it alone
      somewhere drinking nonetheless`,
    favorite: false
  },

  {
    title: "On The Earth We Met",
    pubDate: new Date(2025, 2, 9),
    numeral: "XXII",
    collection: "acclimate",
    content: `i unfortunately can’t say you’re not a friend of mine
      but wouldn’t a real friend see it that our lives intertwine?

      does knowing me specifically have a single perk
      besides that i can occasionally help you finish homework?

      something any other classmate could realistically do
      if it were me or if it weren’t, could you say that you knew?

      you’ve sung me all your praises and i think it’s really sweet
      until my eyes wander to the ground beneath our feet

      to the earth where we met that will eventually die
      would you like to escape it, or is that too much to try?

      how unstable the platform really is, i can’t tell
      i just know i don’t want some sort of shallow farewell

      in a semester, a year, a graduation, or more
      how long until my name’s just a relic of yore?

      when we have to take the next step and leave this all behind
      is making the jump with me something you have in mind?

      i think of it constantly that i don’t know how to float
      no one’s really given me wings, never granted the promote

      i’m trying my hardest to show just how much i care
      but i can’t stand my ground if it’s no longer there

      i try and i try but i know i never had a chance
      to prove we were anything beyond friends by circumstance`,
    favorite: false
  },

  {
    title: "Just Enough",
    pubDate: new Date(2025, 2, 6),
    numeral: "XXI",
    collection: "acclimate",
    content: `i just like you
      you’re pretty, you’re cute
      you’re sweet, you’re kind
      you’re away, you’re around
      you’re on my mind
      for just a little time

      i just like you
      i know i like you
      it’s something i can write
      rolling words off the tongue
      into phrases so trite
      like love at first sight

      i just like you
      the liking isn’t justified
      i hardly know you
      but i meet your eyes
      all the dreams ensue
      and i never come to

      i just like you
      my friends know it too
      i told them with a blush
      how perfect you are
      all the reasons i gush
      about my newfound crush

      i just like you
      i only need to like you
      you have my first name
      you don’t need my last too
      we’re not even the same
      dare i make such a claim

      i just like you
      i’m not sure i want to
      but i want to like someone
      to laugh, to giggle, to kick my feet
      to say i’m having a bit of fun
      while not pursuing anyone

      i just like you
      i can’t not like you
      but i wish it weren’t the case
      i just want to be friends
      be free of this headspace
      and look at you with a straight face`,
    favorite: false
  },

  {
    title: "Necessary Evils",
    pubDate: new Date(2025, 2, 2),
    numeral: "XX",
    collection: "acclimate",
    content: `battlefields are never meant to look pretty
      you can’t glorify any deaths or explosions
      it’s frightening, stuff no one wants to see
      until it comes right over and destroys your city

      you wanna keep your eyes closed so badly
      blind to all the casualties piling around you
      but we’re in wartime, there’s no escaping this
      constant fighting is the new way to live, sadly

      i know it’s tiring we keep running into strife
      at ever corner, on every day, across the USA
      but sleeping on this fight won’t bring peace
      all it’ll bring is more loss of life

      to be of ignorance and live with evil
      or a soldier of knowledge and die a hero?
      the question to ask as we march forward:
      how will you fight through our world’s upheaval?`,
    favorite: false
  },

  {
    title: "Mirror Image",
    pubDate: new Date(2025, 1, 26),
    numeral: "XIX",
    collection: "acclimate",
    content: `i look at you and think of me
      a mirror of me is all i can see
      how could i ever meet another like you?
      to accept that i am not one, but two?

      i’m looking longingly into the glass
      staring ‘til i see behind the scenes
      should we’ve met back there instead of now?
      oh the stories we could’ve shared in class

      i could’ve watched you at your swim meets
      choir concerts where i’d also have seats
      i could’ve cheered you onto the curtain call
      if we’d met sooner, i could’ve seen it all

      i wonder if you wore gold and blue instead of red
      if we would have more memories waiting ahead?
      could we’ve held hands in the halls at any chance?
      or starred in every year’s homecoming dance?

      we could’ve stayed up studying every night
      you could draw for me, and for you, i’d write
      of how badly i wish we’d met earlier in life
      so we could nap together free of all strife

      i wanted you forever and that was too much
      to ask for your gaze, your air, and your touch
      with you i wanted to spend all my time
      ‘til poor me realized you couldn’t be mine

      i wanted us to be lovers, and so i asked
      but maybe that’s exactly why we didn’t last
      it was only that moment when you had to walk away
      that i realized what it meant when i used to say

      honestly i think you’re my best friend
      your presence’s something i always commend
      this kind of friendship i’ve never had
      i don’t know how to say it but i’m glad

      we met at a time i’d call perfect
      you’re my mirror image, so we clicked
      would making more memories in our past
      matter much without a future so vast?

      some timeline we’re friends, some timeline we’re more
      no matter the universe, i’m thankful for sure
      knowing you helped me believe i could see
      that someday i could find another like me

      when i meet someone new i’ll remember you
      and know not to break our bond in two`,
    favorite: false
  },

  {
    title: "FOMO",
    pubDate: new Date(2025, 1, 23),
    numeral: "XVIII",
    collection: "acclimate",
    content: `somewhere i’ve written a thousand poems
      somewhere i’ve coded a hundred projects
      somewhere i’ve headed a dozen of clubs
      and somewhere i’ve walked a million steps

      somewhere i play chess, somewhere i feel less
      somewhere i cook well, somewhere i feel swell
      somewhere i drive round, somewhere i don’t frown
      somewhere i play ball, somewhere i know it all

      somewhere i’m a painter not a poet
      i don’t translate a picture, i show it
      somewhere i’m a singer not a writer
      i may not be as much of a fighter

      and how many books could i have read?
      or how many words could i have said?
      how many movies could i have seen?
      and how many lessons could i glean?

      somewhere i don’t drift between the lines
      somewhere i’m unbounded from confines
      of unmade decisions and unmade time
      somewhere some other place i’m in my prime

      here i write of the lives i couldn’t live
      i chose to sit, with this story i give
      up and away with all that i could be
      the price i paid for becoming me

      i think about them more than i must
      courtesy all of my self-distrust
      but knowing i can’t be everyone
      only makes every decision more fun`,
    favorite: false
  },

  {
    title: "Hall of Mirrors",
    pubDate: new Date(2025, 1, 21),
    numeral: "XVII",
    collection: "acclimate",
    content: `living in a hallway of mirrors,
      endless chambers of stares held too long,
      gazes held too sharp, glares held too deep
      so what is it that they speak?

      words flowing about with awe,
      or crawling about with scorn?
      curiosity or dismissal?
      with what do they really streak?

      language has its ambiguities
      and silence lives in extremes
      the void conveys all and none
      so along where does it sneak?

      are mirrors authors of their poems,
      or mere victims of another’s pen?
      who says they know anything at all,
      instead of just whatever you seek?`,
    favorite: false
  },

  {
    title: "Good Intentions",
    pubDate: new Date(2025, 1, 19),
    numeral: "XVI",
    collection: "acclimate",
    content: `i know you have good intentions
      of course you do, i know you do
      if people were found in dictionaries
      you’d be listed for pure good
      without any synonyms because
      we all don’t stay good as you could

      all our hearts harbor some hatred
      yours is soaked with nothing but elation
      enough for you to forget you have it
      and mistake me for the good one
      we’re all but how you see everyone else
      i say you see different from everyone else

      but truthfully, you don’t see at all
      that bliss blindfolds you, trumps your vision
      you’re stumbling into all sorts of collision
      trampling right over the ones you love
      all because you lack true decision
      and insist on learning without revision

      we cry for our country burning at our expense
      but all you can muster is 'things must be intense'
      you trip things up cause you can’t see in front of you
      how could one see if a blindfold’s all they choose to view?
      can’t see the cliffs ahead so you don’t feel suspense
      last one i’d expect to lose all your common sense

      you can’t study math then say two plus two is five
      nor can you fight for progress while locked in a hive
      i really don’t want any bridges to break
      but i hope someday you’ll find your escape
      until then, i’ll trust your good intentions and wait
      for you to flip the blindfold and maybe see straight`,
    favorite: false
  },

  {
    title: "Queue",
    pubDate: new Date(2025, 1, 18),
    numeral: "XV",
    collection: "acclimate",
    content: `so eager i was to wait in line
      not knowing how long it’d take
      to get my little personal letter
      not knowing it was all just fake

      it’s the same one most everyone gets,
      same cursive, same loops, even the same pen
      when you get down to it, it’s nothing special
      just a letter reprinted again and again

      hundred hours now i’ve waited in line
      i’ve moved closer but you’re still so far away
      i tiptoe up and look past everyone to you
      writing up a personal little essay

      like you’ve been writing it your whole life
      spending your time no other place
      letting long lines circle you round
      while i lie in wait: a pointless chase

      i was interested, and i thought you were too
      invested in anything but around you
      why keep waiting in this hell of a queue
      when i can step out of line to meet someone new?`,
    favorite: false
  },

  {
    title: "Are You Proud?",
    pubDate: new Date(2025, 1, 15),
    numeral: "XIV",
    collection: "acclimate",
    content: `it’s a beautiful moment in time
      even if you’re no longer mine
      i used to cry if you weren’t here
      but now there’s not a single tear

      every now and then i’ll still sob
      some river flow ‘til my heart throbs
      a drum beat such i rise with glee
      and ask if you’d be proud of me

      ‘cause i didn’t cry the day before
      when i walked out and saw the door
      i left smiling, happy to leave
      knowing i’ve grown because i’ve grieved

      i stroll with care and skip with grace
      with time i arrive in another place
      i stop and sit beneath some tree
      and wonder if you’re proud of me

      i know how to love ’cause i loved you
      so now i run with a new point of view
      i’ve seen much more than i’ve ever before
      you opened my eyes and opened the drawer

      i left you there with a gentle shut
      now i know every why and what
      a shame you’ll never be able to see
      just how much you’d be proud of me`,
    favorite: false
  },

  {
    title: "Deviation",
    pubDate: new Date(2025, 1, 1),
    numeral: "XIII",
    collection: "acclimate",
    content: `goes just like this, every single day:
      “hey, what’s up, how are you, how’ve you been?”
      “doing good, you?” “i’m doing good too”
      and so it ends, nothing else to say

      and i guess there’s nothing wrong with this
      even if there’s something wrong with that
      you got the gist, what more do you need?
      i promise i’m good, nothing’s amiss

      fine, let’s restart, if that’s what you want
      “hey, what’s up, how are you, how’ve you been?”
      “if you’re asking, pretty terrible
      appreciate the little check in
      but you’re talking to the wrong person
      and i don’t even know what wrong means
      the day before i felt wonderful
      now i’m just plain pitiful
      wait, i lied! or wait, did i?
      well, now i’m happy i guess
      half an hour’s passed since then
      can’t tell if this is checkers or chess
      but suddenly i’m depressed again
      oh that’s all normal, don’t you worry!
      that’s my every hour, or month, or week
      trust me when i say i know it’s not bleak
      i trust i’ll be okay, just don’t trust when
      might guess i’m crazy, but how would you know?
      your only evidence is whatever i show
      detectives can’t even solve this one
      most likely because there are none
      i like it that way, or so i think
      and i’ve thought of it a lot
      a little too much, or maybe not”

      what i wanna say is i’m really alright
      i wake every day and sleep every night
      all you should know is i can push through
      you said you’re doing good, so i am too`,
    favorite: false
  },

  {
    title: "Pictures",
    pubDate: new Date(2025, 0, 28),
    numeral: "XII",
    collection: "acclimate",
    content: `that afternoon i woke up late
      a good night’s rest i would think
      if i could recall a single dream
      much less a single memory
      who even am i? i can’t think straight

      have i slept for seventeen years?
      wasted all this time laying in bed
      never realizing i’d been asleep
      the earth kept spinning and i stood still
      no travels, no souvenirs, just tears

      there’s an empty book on my nightstand
      opened it up to read a few chapters
      telling of blank lines and missing pictures
      can’t let these pages also be a waste
      so i rise from slumber, camera in hand

      and i take all these silly pictures to post
      i left just in time to catch a sunset
      the sight of which i don’t want to lose
      before moonrise, i’ll have in my eyes
      a library of what i treasure most`,
    favorite: false
  },

  {
    title: "Coursework",
    pubDate: new Date(2025, 0, 26),
    numeral: "XI",
    collection: "acclimate",
    content: `i never expected i’d have to take some test
      really i didn’t even know i was in the class
      it’s some pre-requisite course apparently
      but i’m only finding out three semesters in
      now i’m laying out here all stressed

      i never registered ‘cause i’d never heard of it
      logged on one day to see a million assignments
      without due dates ‘cause they’re already all late
      guess it’s what i get working so many years behind
      a grade that doesn’t change no matter what i submit

      i really need help, but where do i start?
      that syllabus was a little too long to read
      and who would care to stop and tutor me?
      they all just laugh, i’m nobody but stupid
      anywhere else and i’m suddenly smart`,
    favorite: false
  },

  {
    title: "Notification",
    pubDate: new Date(2025, 0, 26),
    numeral: "X",
    collection: "acclimate",
    content: `you’ve been out of my life a whole year now
      i’ve cried over missing your touch,
      sat in silence haunted by our memories,
      shivered in the absence of your warmth

      a whole year now has passed now
      i’m not the one who cried back then
      i’ve found other fires to sit by,
      other reasons to wake every morning

      i’m happy now

      but no matter how happy i get,
      whenever i hear the ring i gave you
      my heart shrinks a split second
      a fraction of time, a missable blink

      i’ve moved on from you now
      but i shouldn’t have to tell myself that
      it’s a fact i’ve gracefully welcomed
      a truth i sleep with, no second thoughts

      why hasn’t my heart caught that memo?
      it still feels butterflies reading your name
      knows that jump i’d hide with every text
      the excitement that some other me loved

      i’ve moved on from you now and
      i know i’ll never be looking back but
      i know i’ll never be forgetting since
      i was still there that day we met`,
    favorite: false
  },

  {
    title: "Autumn Nostalgia",
    pubDate: new Date(2025, 0, 25),
    numeral: "IX",
    collection: "acclimate",
    content: `oh crispy cool currents whirling by,
      poignantly painting the autumn sky,
      whispers at the bus stop, lost in thought:
      how’s it you recall what i’ve forgot?

      telling me of evenings walking alone
      september birthdays spent on my own
      streets where love came and went with the breeze
      overcast afternoons, dying trees

      same feeling at fourteen as nineteen
      different actor but unchanged scene
      amidst all these years of growth and pain
      i will always pause for the fall rain`,
    favorite: false
  },

  {
    title: "Accesory",
    pubDate: new Date(2025, 0, 23),
    numeral: "VIII",
    collection: "acclimate",
    content: `it’s a hard thing to miss, walking around:
      other people love their accessories!

      just take a look at that girl’s backpack
      all her pins clinging to it like little scales
      you’d almost take them as part of the bag itself
      that guy across the street back there,
      his whole hand’s tattooed, that’s obvious
      but what about that ring on his fingertip
      sitting away from it all, verge of falling off?
      or her, yes her, over that way!
      both her wrists are lined with bracelets!
      they reach so far, maybe even too far
      too much, she won’t be able to move her arms

      they all look so pretty, so necessary:
      other people love their accessories!

      but maybe they aren’t all that pretty
      that pin up there doesn’t look the same
      she didn’t notice one of them fell off
      just stuck another like the first never was
      didn’t matter as long as something was there
      guess his ring couldn’t hold on any longer
      maybe he thought it seemed nice to have
      certainly realized he didn’t actually want it
      and the second the other girl got home?
      she took off half of those bracelets on her
      just wasn’t convenient dragging them along

      poor little pin on the ground, sitting all alone
      ‘til someone new went over, picked it up
      and stuck it right with the rest on their bag
      'cause other people just love their accessories`,
    favorite: false
  },

  {
    title: "Against the Oligarchy",
    pubDate: new Date(2025, 0, 23),
    numeral: "VII",
    collection: "acclimate",
    content: `the flags’ve failed to hang a few fortnights now
      a fate this system’s unwittingly allowed
      seared by hypocrisy, they come crashing down
      the smoke chokes the lungs, threatening to drown

      they’ve been told to mistake all the smoke for steam
      they take those cigarettes, giving to the scheme
      some think it’s healthy, haven’t been told otherwise
      fell into the storm and fell for the disguise

      in this clouded sea, remember you’re the light
      keep all whom you care about within your sight
      stay away from those mirrors, they’re all but screens
      fighting to conceal what they don’t want to be seen

      keep staying in the know, keep spreading the word
      don’t let them silence those who need to be heard
      do what you can change, change what you can do
      don’t let their rhetoric leave you feeling blue

      they’ll say you can’t exist but you’re standing right there
      always have and always will, don’t let it be a scare
      some will call you silly, wonder why you won’t cheer
      but they’re the ones who’ve never had reason for fear

      he acts like a king but isn’t sitting in a throne
      so stay standing these four years, you’re not in it alone
      we’ll make it to the end, rise above the weight
      and walk towards the world we want to create`,
    favorite: false
  },

  {
    title: "Fingertips",
    pubDate: new Date(2025, 0, 22),
    numeral: "VI",
    collection: "acclimate",
    content: `in my heart, sadness never quite seems to stay
      its never content being sealed away
      so it scrambles for freedom like a mouse in a maze
      clawing and scratching past the blood in my veins
      eating me alive until i feel cold and hollow
      burrowing through me before falling to my fingertips
      with nowhere left to go, it trembles and sits

      it weighs me down, drags me to the ground
      numbing me ‘til i can only crawl around
      it shakes and aches and burns so much
      threatening to bite onto whatever i touch
      pulling me to the floor until i fall through
      i’m completely blind as i’m falling down
      left to wonder whether or not i’ll drown`,
    favorite: false
  },

  {
    title: "Whole Soul",
    pubDate: new Date(2025, 0, 21),
    numeral: "V",
    collection: "acclimate",
    content: `they’re the ones whose gazes you can feel on your skin
      whose stares release a certain energy into the world
      as if their eyes can’t contain the passion of their souls
      they dance around with their hearts on their sleeves
      spot you in a room through their rose-tinted glasses
      and run right over, maybe with a stumble
      for they can’t hold a casual love for anything
      they live to love, and so they love to live
      they’ll share their interests as if they’re giving presents
      the kind of gifts you can’t help yourself from loving
      maybe not because you love it, but because you love their love
      they’ll throw everything into their laughter and cheer
      sing their hearts out for the world to hear
      and tread unfamiliarity with awe, not fear
      for the last thing they’d stray from is themselves
      so they give themselves to the world, and give themselves to you
      the kind of people that make you give your whole self too`,
    favorite: false
  },

  {
    title: "Funnel",
    pubDate: new Date(2025, 0, 20),
    numeral: "IV",
    collection: "acclimate",
    content: `i could look upward and scan the sky
      into the space the stars occupy
      they shine with passion, they know they’re pretty
      little reflections of all i could be
      like gateways to alternate realities
      they offer these different versions of me
      i’m lost in my stare until my eyes burn
      it’s too bright to focus my gaze, i must turn

      i would look downward into the ground
      there’s nothing to see but darkness abound
      a spiraling staircase with known allure
      might not lead anywhere but feels secure
      these halls are infinite but i know i’m not
      run for too long, i’ll crumple and rot
      i need to leave this earth behind
      even if i don’t know what exactly i’ll find

      i should go upward and sail through space
      exploring the world at my own pace
      i’m not flying too fast, but that’s okay
      still going somewhere at the end of the day
      it’s a scary journey this deep in the night
      but you have to navigate darkness to reach the light
      where i’ll end up, i don’t quite know
      but maybe that’s just what motivates me to go`,
    favorite: false
  },

  {
    title: "Boxes",
    pubDate: new Date(2025, 0, 19),
    numeral: "III",
    collection: "acclimate",
    content: `when do i get to live outside of a box
      to live without my likeness violently shoved into a package into which it does not fit
      for my character to be tossed into a shredder
      blended into a mix of labels
      little stickers forced onto my skin
      ones that envelope me in words that speak before my mouth can open
      leaving me scratching at my body hoping they’ll fall off
      covering up in hopes of no one being able to read them
      but they resist my tearing and sear through my clothing
      introducing themselves to strangers first and myself second
      because as much as i would love to be some messy piece of tapestry
      too many people are wired to look at me checklist in hand
      to cross off every bullet until they can lay me along one stack
      and drop me off messily stuffed in a little box`,
    favorite: false
  },

  {
    title: "Over The Brick Wall",
    pubDate: new Date(2025, 0, 18),
    numeral: "II",
    collection: "acclimate",
    content: `we’re sitting together at a brick wall
      but i can’t see your face as we speak
      much as i’d like to sit right next to you,
      talk to you for hours and lose track of time
      i know you have to stay on your side
      and i have to stay on mine
      no signs spell out where you might be
      but whenever your voice floats over
      it rises and sparkles with a little flare
      a light that let’s me know you’re still there
      but sometimes we’re sitting in the dark
      and sometimes i’m scared of that silence
      i’ve never had anywhere to sit this long
      so i start wondering if i’m doing something wrong
      i worry eventually you might walk away
      laugh less and less at the jokes i say
      see no need for my updates from the week
      overall just get tired hearing me speak
      i worry i’ll lean back and feel myself falling
      the avalanche of bricks will knock me out
      and i’ll wake to find you’re no longer around
      but whenever i fall, the shape of you supports me
      we might not have spoken in quite a while
      last week or yesterday, you’ll still make me smile
      no matter what the years put us both through
      i always hope past this wall i can see you`,
    favorite: false
  },

  {
    title: "Winnie The Pooh",
    pubDate: new Date(2025, 0, 18),
    numeral: "I",
    collection: "acclimate",
    content: `it isn’t fair we have to say goodbye
      i don’t wanna say “see you next time,”
      accepting a wait between then and now
      when all i want is this moment to last
      surely that can’t be too much to ask?
      a few more hours, a few more laughs
      another picture, another hug
      why can’t i stay here just a little longer?
      that’s what i think about, crying at home
      how i feel so empty after feeling so whole
      why life moves fast then suddenly slows
      but the taste of my tears is a privilege
      earned by smiling with all my heart
      this void inside me that i feel
      formed because that love was real
      how lucky i am to have such friends
      that make me beg time never ends`,
    favorite: false
  }
].map((poemDetails) => {
  return new Poem(poemDetails);
});