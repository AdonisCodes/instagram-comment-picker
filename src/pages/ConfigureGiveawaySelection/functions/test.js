
export const useCommentConfig = (
    inputArray,
    winners,
    removeDuplicates,
    filterHashtags,
    mentioned,
    keywords,
    commentsBetweenDates,
    manualExclude
  ) => {
    let newArray = inputArray;
    // Remove the duplicates, using the usernames, and write that result to new array
    if (removeDuplicates) {
      const uniqueArray = [];
      inputArray.forEach((comment) => {
        if (!uniqueArray.includes(comment.ownerUsername)) {
          uniqueArray.push(comment);
        }
      });
      newArray = uniqueArray;
    }
    // Filter comments to hashtags, if any included, the post only needs one of the hashtags to be included
    if (filterHashtags.length > 0) {
      const hashtags = "[" + filterHashtags.forEach((i) => '"' + i + '"') + "]";
  
      try {
        const hashtags = JSON.parse(hashtags);
        newArray = newArray.filter((item) =>
          hashtags.some((filterItem) => item.includes(filterItem))
        );
      } catch {
        console.log(
          "Hashtags are not in correct format, Or no hashtags included"
        );
      }
    }
    // Filter comments to mentions, if any included, the post should have mentions[0] mentions to be included & mentions [1] should be true
    if (mentioned) {
      newArray = newArray.filter((item) => {
        const regex = /@\w+/g;
        const matches = item.text.match(regex);
  
        if (matches && matches.length > 0) {
          return true;
        }
  
        return false;
      });
    }
    // Filter comments to keywords, if any included, the post should have 1 of the keywords included, and will skip this step if the keywords array empty
    if (keywords.length > 0) {
      let kw = "[".forEach((i) => '"' + i + '"') + "]";
      try {
        kw = JSON.parse(kw);
        newArray = newArray.filter((item) => {
          return kw.some((filterItem) => item.includes(filterItem));
        });
      } catch {
        console.log("Keywords are not in correct format, or empty");
      }
    }
  
    // Filter comments to dates, always includes some date, if date is malformed skip this step
    if (commentsBetweenDates.length > 1) {
      newArray = newArray.filter((item) => {
        const commentDate = new Date(item.timestamp.slice(0, 10));
        const startDate = commentsBetweenDates[0];
        const endDate = commentsBetweenDates[1];
  
        return commentDate >= startDate && commentDate <= endDate;
      });
    }
  
    return newArray;
  };
  
  const comments = [{
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17914460199781784",
    "text": "@lachlan111111 his",
    "ownerUsername": "lachlan111111",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/105010855_169881104146477_1611477764054501119_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=tdUuFMclK1IAX9x17DR&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDPIuQKSGQRLTVDbN1hA54ix56K74WmDKYMfeqzgzYriA&oe=64CBA8B4&_nc_sid=1999b8",
    "timestamp": "1011-07-18T11:46:41.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17990690511150119",
    "text": "💫⭐🌟✨🌜🌞🌝💯",
    "ownerUsername": "chhardori.kordiya",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/161615941_614546584141484_175918417641511144_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=n7tANFI7ex8AX_UXliD&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfB7uc1LRWL1GgIif-lDHXEjDCFPzFp50mZQJ-WTkgqzCw&oe=64CB7919&_nc_sid=1999b8",
    "timestamp": "1011-07-18T11:19:10.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18067074871404447",
    "text": "Honest receivers for MT101 direct cash transfer. No upfront! \nKindly inbox me ASAP \nWhatsApp:‪‪ ‪+1 (581) 801‑5841‬\nEmail: 📧\nmichelpepainternational@gmail.com\nplease no scammers.",
    "ownerUsername": "ameliaerinlilly",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/117849967_111714051515874_4171585886756941159_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=BrVGjOoStZwAX_JocM1&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfC64KEryrrkry58qT4Z7vG4RkS8QzL4JVQg1Zdrx-eOug&oe=64CAA110&_nc_sid=1999b8",
    "timestamp": "1011-07-18T15:14:41.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18091051047148609",
    "text": "😍",
    "ownerUsername": "heavysoft1.paredes.avla",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/161888814_668514578615409_7160160958415451101_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=zOqPGOYOeyMAX8AZU8q&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCKh4UHfiBT9_It7gBCrvJel8aVxXGPQs1-Sbm5_9KH8g&oe=64CA4156&_nc_sid=1999b8",
    "timestamp": "1011-07-18T15:17:11.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17865904915966619",
    "text": "https://wallet.hiltonmeta.com/Registration.aspx?ref=14181556",
    "ownerUsername": "bharat_mali_44401",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/151871791_1910857151711719_1851665684715106806_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=QVdCX7U04dEAX_1Ni_x&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDSNbrw51kGbixFyk--E5xOSjBDyuu1h-F1UddY4nqfgQ&oe=64CBF6FB&_nc_sid=1999b8",
    "timestamp": "1011-07-18T17:01:57.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17995061840010946",
    "text": "😂",
    "ownerUsername": "ehsanhyti169",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/119149515_571681775001187_1750116519551500715_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=5X1S16bi7MEAX8xx1Lx&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDTD_1crZzU-EMlYy1_R7oRhrimGnKkm_KrWnYYdl1klg&oe=64CA1FF1&_nc_sid=1999b8",
    "timestamp": "1011-07-18T17:09:06.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18046441114471550",
    "text": "@sheetalbaijal48 are you high?",
    "ownerUsername": "space.rhombus",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/75487911_1411185554464468_6451491115156416511_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-fd1Dkr1k4MAX-CdRfn&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfARgZw7YvD-1LP-VRgKR6EKNrBnMRFDr19ROoIf-hTlfA&oe=64CAB166&_nc_sid=1999b8",
    "timestamp": "1011-07-18T17:11:41.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17964041814414574",
    "text": "@barleymob_beer did you fall on your head as a child?",
    "ownerUsername": "space.rhombus",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/75487911_1411185554464468_6451491115156416511_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-fd1Dkr1k4MAX-CdRfn&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfARgZw7YvD-1LP-VRgKR6EKNrBnMRFDr19ROoIf-hTlfA&oe=64CAB166&_nc_sid=1999b8",
    "timestamp": "1011-07-18T17:11:16.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17879149101859161",
    "text": "@obaid.khan9 your ignorance confuses you. Literally most of the discoveries and technological advancements made for space are then brought to Earth and used here even everyday, you just don't know it. Look for NASA Spinoff to learn something.",
    "ownerUsername": "gabrielex81",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/108571701_461550855811519_5110878844741504187_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Muxq1w-gzfsAX9sELGM&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfADlJtF10fa6bHk_il-CupHBKsD178WMPpV6lAlypSp8g&oe=64CAE6FE&_nc_sid=1999b8",
    "timestamp": "1011-07-18T19:41:11.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18014115814715187",
    "text": "@space.rhombus  Ad homs are all you science deniers have.",
    "ownerUsername": "barleymob_beer",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/111091761_585914110081454_96108479881410081_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=knpfhvsqP8UAX_CmXg1&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCsoGddGq_zLrVRcA6pK-G9vRwdWUEFn55B1uCGn0uEsQ&oe=64CB16BA&_nc_sid=1999b8",
    "timestamp": "1011-07-18T11:49:56.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18001471811911156",
    "text": "https://bingx.pro/invite/CIPIIY",
    "ownerUsername": "reza.barzan.dez",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/177995161_1174506910011011_6141415445849611051_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=hmrG077BZSgAX9aETlt&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfAXNhOnaR5Aos1xB1w4ordpGCgXxvpHODoDmjVhvGJOnA&oe=64CBC17B&_nc_sid=1999b8",
    "timestamp": "1011-07-18T11:07:17.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17980946441149898",
    "text": "🔥🔥🔥🔥🔥🔥🔥🔥",
    "ownerUsername": "reza.barzan.dez",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/177995161_1174506910011011_6141415445849611051_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=hmrG077BZSgAX9aETlt&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfAXNhOnaR5Aos1xB1w4ordpGCgXxvpHODoDmjVhvGJOnA&oe=64CBC17B&_nc_sid=1999b8",
    "timestamp": "1011-07-18T11:07:41.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17870477546951187",
    "text": "👑",
    "ownerUsername": "kensiok_wtf",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/175155111_1777010575917459_7750546014611041715_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=f1uZKF6CE4AAX8mUj0R&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDT7-RL1zTGDckdRHB4FgSKVahiQo_btdbCTfd-gPe-GA&oe=64CADEF1&_nc_sid=1999b8",
    "timestamp": "1011-07-18T11:48:10.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17845859611018014",
    "text": "@eldritch_enby_ thank you! I figured it was named after the telescope that found the planet but when it came to the numbers/letters following the name, I was confused about that.",
    "ownerUsername": "angie.r.1",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/117510716_1001545899851411_8676608657911191814_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=1sp-R1h_1HEAX_XDXvD&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDGhuPNFxxgNs84JiRrRldesquIEd7Sl1AVC7ix9cajZA&oe=64CBC947&_nc_sid=1999b8",
    "timestamp": "1011-07-19T00:57:19.000Z",
    "likesCount": 1
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17887175088881164",
    "text": "",
    "ownerUsername": "le.deblois",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/156616494_581516040551111_1819187011114559146_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=mQL-SdYnBJAAX-BWbaK&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDZM7R14jX1k4m_rPw-E4Y7LX4YXlINFUhgU7HUwpSVcA&oe=64CB9014&_nc_sid=1999b8",
    "timestamp": "1011-07-19T01:18:11.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18181471850049761",
    "text": "@angie.r.1 no worries! In the case of exoplanet J1407b, it’s named after the star that it orbits. The ‘b’ in the planet’s name signifies that it orbits the star J1407.",
    "ownerUsername": "eldritch_enby_",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/141189111_1516958780007748_4195146759011185778_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=_QS-a48DcWwAX-P5tE1&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDzolThdyLSnA6k0x9CK0gzRiq6ofomMFYV4qXriddHyQ&oe=64CA1D17&_nc_sid=1999b8",
    "timestamp": "1011-07-19T01:47:15.000Z",
    "likesCount": 1
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17995109119016071",
    "text": "Ask an alien lol",
    "ownerUsername": "pamsteele88",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/171115791_514156470004567_8910185696177451675_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=xHqOr1EIBcgAX8Qwimq&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDZjeCqPuugUVVWk9CJwGNk5Al1SQuEO1Px4XckSaJp8A&oe=64CB9ADC&_nc_sid=1999b8",
    "timestamp": "1011-07-19T01:15:46.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17994195567091901",
    "text": "@history_buff01 and why is Pluto a planet?",
    "ownerUsername": "interdimensionality",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/161619067_819198178594714_1751511489171111068_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=D4D89JtIZ4MAX9skl9s&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBH6eywKtD7uCNTZVerUHBIgq7Q1bt--aPuQTOSi-Y9EA&oe=64CB5817&_nc_sid=1999b8",
    "timestamp": "1011-07-19T04:11:07.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18011194114750011",
    "text": "@interdimensionality because a planet's a planet, no matter how small.",
    "ownerUsername": "history_buff01",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/157401055_1111188710801158_8578496161188417508_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=sCAaF6gm1QYAX-X0rBR&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCAi5syulfixiyQQ0hYu0YKEzIllOxuD9_gg1MWK1gbYw&oe=64CAF119&_nc_sid=1999b8",
    "timestamp": "1011-07-19T04:14:09.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18001141567915095",
    "text": "@eldritch_enby_ thanks so much!",
    "ownerUsername": "angie.r.1",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/117510716_1001545899851411_8676608657911191814_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=1sp-R1h_1HEAX_XDXvD&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDGhuPNFxxgNs84JiRrRldesquIEd7Sl1AVC7ix9cajZA&oe=64CBC947&_nc_sid=1999b8",
    "timestamp": "1011-07-19T04:46:16.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17999110514844790",
    "text": "@history_buff01 also, if we as a society say our standards of beauty in our fellow man should not define the beauty of a person, why then should we place standards on a planet that for its entire existence has been a planet, but someone said its isn't.  So now we say it isn't? We must stand against this great hypocrisy.",
    "ownerUsername": "history_buff01",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/157401055_1111188710801158_8578496161188417508_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=sCAaF6gm1QYAX-X0rBR&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCAi5syulfixiyQQ0hYu0YKEzIllOxuD9_gg1MWK1gbYw&oe=64CAF119&_nc_sid=1999b8",
    "timestamp": "1011-07-19T04:47:40.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17841701911041575",
    "text": "@history_buff01 well, define a planet then.",
    "ownerUsername": "interdimensionality",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/161619067_819198178594714_1751511489171111068_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=D4D89JtIZ4MAX9skl9s&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBH6eywKtD7uCNTZVerUHBIgq7Q1bt--aPuQTOSi-Y9EA&oe=64CB5817&_nc_sid=1999b8",
    "timestamp": "1011-07-19T04:49:18.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17954180116640017",
    "text": "@interdimensionality who am I to define a planet? I am no master of the science,  not one of the great men and women who gave us the knowledge of the heavens. I am but a humble believer, who stands for justice. We said Pluto is a planet, yet when he did not meet our standards of greatness, we turned our back on him, though we changed the standard. I will fight to right this great injustice, though I may very well stand alone, I will not faint.",
    "ownerUsername": "history_buff01",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/157401055_1111188710801158_8578496161188417508_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=sCAaF6gm1QYAX-X0rBR&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCAi5syulfixiyQQ0hYu0YKEzIllOxuD9_gg1MWK1gbYw&oe=64CAF119&_nc_sid=1999b8",
    "timestamp": "1011-07-19T04:51:09.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17944841890670914",
    "text": "what had happened to Neptune ???",
    "ownerUsername": "shrishthta",
    "ownerProfilePicUrl": "https://instagram.fhkg10-1.fna.fbcdn.net/v/t51.1885-19/44884118_145707101881519_1446069589714116171_n.jpg?_nc_ht=instagram.fhkg10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=W1_Kdi-1KlAAX9aRK11&edm=AEVnrqQBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb1VzX1Byb1ZpbGVfcGlj.1-ccb7-5&oh=00_AfBqOzAgDzOCIqLKRYKRn1kL1hz6LR6PP5tF50c1kXaZLQ&oe=64CB0D8F&_nc_sid=f8b7b1",
    "timestamp": "1011-07-19T05:11:50.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18086465449111598",
    "text": "❤️",
    "ownerUsername": "carmenquintanilla.1",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/151151014_700895558508945_6111077117764071704_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=7ZqA_bIegrwAX9UejXm&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDPLsSDHXYWevuAoFwomz1xziyGQCfft9uKi7GPRDCHsw&oe=64CAC1D1&_nc_sid=1999b8",
    "timestamp": "1011-07-19T07:09:15.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18071019815191518",
    "text": "😍😍😍",
    "ownerUsername": "world10111",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/114150694_766119541106816_1789641611540904871_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=CzM9R6Q0zO4AX8xfwQZ&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDtfZ5_LMNJTBG81G7ouqVG1MWm0mwXbeXNDG9i1UQPOg&oe=64CB7F14&_nc_sid=1999b8",
    "timestamp": "1011-07-19T08:18:15.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18016481141678450",
    "text": "いいね！😸😺",
    "ownerUsername": "sora.muo",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/16158680_1996751577164669_7718847101894918144_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=9OvgPJlDhmgAX_Dh1U1&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfAWeikaWIRqnIe_Lkzvfd1TuujiW7KWWU_mQvq_rUC6Rw&oe=64CB11BF&_nc_sid=1999b8",
    "timestamp": "1011-07-19T08:44:56.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17887489478890719",
    "text": "❤️",
    "ownerUsername": "xiangchengliangchaowei",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/117709516_1110158170501047_1851518180171197174_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=iOd8Nc1LJzwAX9IGide&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfB1r6JLjIU_AwJBuGeVVbP4qC0cg5uF6uIqeEswBd-d4A&oe=64CBD56D&_nc_sid=1999b8",
    "timestamp": "1011-07-19T08:57:19.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18055189141447448",
    "text": "amazing！",
    "ownerUsername": "xiangchengliangchaowei",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/117709516_1110158170501047_1851518180171197174_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=iOd8Nc1LJzwAX9IGide&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfB1r6JLjIU_AwJBuGeVVbP4qC0cg5uF6uIqeEswBd-d4A&oe=64CBD56D&_nc_sid=1999b8",
    "timestamp": "1011-07-19T08:57:11.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18117690717116690",
    "text": "66",
    "ownerUsername": "yelidaye",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/161664191_101111961151757_6188451751711761001_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=1q8IORIymFEAX-1hJHd&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfAJxRxFkbF96DH0DwYzBZZvS1TZ4vDLe-DE5zmPdvbvtQ&oe=64CB774D&_nc_sid=1999b8",
    "timestamp": "1011-07-19T08:57:41.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17865686911968918",
    "text": "😂🤣🤣🤣",
    "ownerUsername": "bilaal__klay",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/158060416_1994959711969615_8616117051197855045_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=HmmR_1Kq_cUAX-lPeJS&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfAwPy0cPMGcan8v_vwWeoodRwOPnAIjvmkcJq6wgqERtg&oe=64CAB6B1&_nc_sid=1999b8",
    "timestamp": "1011-07-19T09:49:50.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17864577860971796",
    "text": "👏",
    "ownerUsername": "flow_tmf187",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/155851044_156011510818988_1108061691951711600_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=BuSeESUUz_MAX8-RLjg&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfA8qvsNr-TOcWusUFI9erig-asT98nJHRnCwuKiQ7djeg&oe=64CB0615&_nc_sid=1999b8",
    "timestamp": "1011-07-19T10:01:41.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18178078100005100",
    "text": "I l tr",
    "ownerUsername": "flow_tmf187",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/155851044_156011510818988_1108061691951711600_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=BuSeESUUz_MAX8-RLjg&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfA8qvsNr-TOcWusUFI9erig-asT98nJHRnCwuKiQ7djeg&oe=64CB0615&_nc_sid=1999b8",
    "timestamp": "1011-07-19T10:01:10.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17889068198864784",
    "text": "Good 😊 👏",
    "ownerUsername": "nailery_shine_by_jijita",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/161774481_716951040119705_1018011198817608115_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=GQqG1Gh15YMAX_Q0xks&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfANdcEHsfZvpvt5ZgEIk78o7P5tKhsWCAy9v9pKG0019Q&oe=64CA118D&_nc_sid=1999b8",
    "timestamp": "1011-07-19T11:11:51.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17991016419147845",
    "text": "@history_buff01 that’s great. Waste of time, but that’s great. Whatever floats your boat.",
    "ownerUsername": "interdimensionality",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/161619067_819198178594714_1751511489171111068_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=D4D89JtIZ4MAX9skl9s&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBH6eywKtD7uCNTZVerUHBIgq7Q1bt--aPuQTOSi-Y9EA&oe=64CB5817&_nc_sid=1999b8",
    "timestamp": "1011-07-19T11:41:16.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17940790679591111",
    "text": "Earth is from a greek god as well \"Γαία\"(Gea)",
    "ownerUsername": "_.dimitris_mavropoulos._",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/147151157_955811815454911_811117771861661178_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=jihUm89i1M0AX8e4fQl&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDt1K6hm77zBzvVmejOxhCU0n0_9Q5VTsxHxm-17rxcFQ&oe=64CA5BD0&_nc_sid=1999b8",
    "timestamp": "1011-07-19T11:49:14.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17916511891691971",
    "text": "🦾🦾🦾🦾",
    "ownerUsername": "evrim_agaci_.0",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/164141705_955151955757561_5551011149100176114_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=AfvmQgZzMd0AX91vnKw&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDTUQxDIDQlg4TXmDTJZ0BHWRrrfAuMYiJzXrn1VazDvg&oe=64CA8A46&_nc_sid=1999b8",
    "timestamp": "1011-07-19T11:14:50.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18011695115740910",
    "text": "@mad.matt.9 no .you problem. I believe this .i",
    "ownerUsername": "amir.kujor",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/161617501_971881751759715_4519151999195114101_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=u75wRqe1sEgAX_4-q1u&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfB86thexjYRjJRhf6APBXPbfN-Lq0CcFXl8yNRyAC-xiA&oe=64CBDB4C&_nc_sid=1999b8",
    "timestamp": "1011-07-19T11:11:08.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17991118189114411",
    "text": "@amir.kujor in nasa we trust lol",
    "ownerUsername": "mad.matt.9",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/115169890_151755750411060_8991575105941184081_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=m0xvr_w5v4AAX_gioZ9&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfB7uY16xmRuHtI1Dmdx57WiQ76kXhFphDZ_ofMn8OvjdQ&oe=64CA11B1&_nc_sid=1999b8",
    "timestamp": "1011-07-19T11:11:59.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18111191941174541",
    "text": "❤️❤️",
    "ownerUsername": "maryam_el_fatimi",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/161840698_6510848060161490_1671118508974115148_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=MYTwHBmzkgEAX9VoEuJ&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCw1mgH-JdoEYDqF1VoDNGIY71QA7cwtGydVFnx-PIHkA&oe=64CB18C1&_nc_sid=1999b8",
    "timestamp": "1011-07-19T11:58:56.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17867111101960598",
    "text": "Bonjour chère amie mademoiselle ou madame, Je suis nouveau sur le réseau et j'aimerais bien me faire de nouveau amis a travers j'aime découvrir de nouveaux horizons et j'aimerais que vous fassiez en partir de mes nouveaux amis",
    "ownerUsername": "ambrelemma",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/161510469_594771111801966_8607016895476946848_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Vu1DkXgzJmEAX8Zje0y&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDfNMdGVVhZ515qos9Hdj-iM1iSyUdL8FKRagalYV6cdA&oe=64CA81E7&_nc_sid=1999b8",
    "timestamp": "1011-07-19T15:18:18.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "17965715641570890",
    "text": "@thenorthwoodsnomad 😂🙏 Good thing changed the name.",
    "ownerUsername": "pattdw_ki",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/111070770_870691117114108_5156167419975580087_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Qbr0cyoJA_IAX-q1Itj&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDyQFwWJ1LYhMyQqJxYJ4lXIIZ8qYqw0i1iZqR_eM_apQ&oe=64CAB47E&_nc_sid=1999b8",
    "timestamp": "1011-07-19T16:59:08.000Z",
    "likesCount": 1
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18118019689117118",
    "text": "Greek & Roman mythology",
    "ownerUsername": "mike_otranto",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/185151715_986751768657510_6595751966519174015_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=COZlB0gf_YwAX8LDNHf&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDD0MS1htpEWWI1tL5KZInAS_Uoj7OFK0-x-hb1V8aLeA&oe=64CA1618&_nc_sid=1999b8",
    "timestamp": "1011-07-19T17:14:47.000Z",
    "likesCount": 0
  },
  {
    "postUrl": "https://www.instagram.com/p/CvK1iEUNVCD/",
    "id": "18017710111645650",
    "text": "🙌",
    "ownerUsername": "emeliegagnon1011",
    "ownerProfilePicUrl": "https://instagram.fccj1-1.fna.fbcdn.net/v/t51.1885-19/111161849_411168901111745_1110046175571970678_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=aQ101QBPCk8AX-8_E06&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCcOloOP1gRFVvqkLEezNhnYac1D14UjShNshv0GjwY9Q&oe=64CBDF14&_nc_sid=1999b8",
    "timestamp": "1011-07-19T19:49:55.000Z",
    "likesCount": 0
  }]
  console.log(useCommentConfig(comments, 1, true, '', true, '', [], ''))