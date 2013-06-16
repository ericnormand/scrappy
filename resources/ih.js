{
    "all_retailers": [{
        "name": "Hoodboyz.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?hoodboyz\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "SimplyElectronics.net",
        "scraper": {
            "title": {
                "regex": "<h1><b style=\"font-size:18px\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "InStock: \"1\", Price: \"(.+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?simplyelectronics\\.net",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Shoes.com",
        "scraper": {
            "title": {
                "regex": "<title>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "e4xprice_usd=\"(.+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?shoes\\.com/Shopping/productdetails",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Tower.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "<b class=\"price\">\\s*\\n(.+)<\\/b>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "(?:EAN|UPC):</b>[\\1-\\uFFFF]+?(\\d+)",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?tower\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Ebags.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - ",
                "js": null
            },
            "price": {
                "regex": "\"(?:redBld|priceLine|divFinalPrice)[\\1-\\uFFFF]+?\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?ebags\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Porzellantreff.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "<div class=\"price-bigger\"[\\1-\\uFFFF]+?EUR([\\1-\\uFFFF]+?)<\\/div",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?porzellantreff\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Baur.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\s*Online Shop",
                "js": null
            },
            "price": {
                "regex": "'minPrice'\\s*:\\s*'([\\d\\.,]+)'",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?baur\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Jessops.com",
        "scraper": {
            "title": {
                "regex": "h2 class=\"descriptionHeader\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "mainprodprice\" itemprop=\"price\">&pound;([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://www\\.jessops\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Ebay.com",
        "scraper": {
            "title": {
                "regex": "<h1.*?>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "id=\"prcIsum\" itemprop=\"price\"\\s+style=\".*?\">US \\$([\\d,.]+?)<\\/",
                "js": "var match = html.match(/x2-lpr bbx2-fb bbx2-pv\">\\$([\\d,.]+?)<\\/spa/);\r\n                                                                var match2 = html.match(/<span id=\"prcIsum\".+?US \\$([\\d,.]+?)<\\/spa/);\r\n                                                                \r\n                                                                if(match2)\r\n                                                                {callback(match2[1]);}\r\n                                                                else if (match)\r\n                                                                {callback(match[1]);}\r\n                                                                else{callback('');}"
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": "var match = html.match(/<t[dh] nowrap=\"nowrap\".+?vi-ia-attrLabel.+?(?:UPC|ISBN-1\\d):.+?<td.+?class=\"vi-ia-attrColPadding\".+?>(\\d+)<\\/td>/i) || \r\n                                                                                                                              html.match(/(?:isbn|ean).{1,200}?[^\\d](\\d{12,13})[^\\d]/i) || \r\n                                                                                                                              html.match(/isbn.{1,200}?[^\\d](\\d{10})[^\\d]/i) || \r\n                                                                                                                              html.match(/<meta name=\"keywords\" content=\"[^\"]*(\\d{12,13})/i) || \r\n                                                                                                                              html.match(/UPC<.+?<font.+?>(\\d+)/i);\r\n                                                                                                                              callback(match ? match[1] : '');"
            },
            "mpn": {
                "regex": "MPN<.+?<font.+?>(.+?)<",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": "body, #vi-container {\r\n  margin-top: <<0>>px !important;\r\n}",
        "region": "US",
        "regex": "^https?://(www|cgi|item)?\\.?(mobileweb\\.)?ebay\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Argos.co.uk",
        "scraper": {
            "title": {
                "regex": "s.prop5=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "<span class=\"price\">[^\\d]*(\\d+\\.\\d+)</span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "EAN/MPN/UPC/ISBN: (\\d+)",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://www\\.argos\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Amazon.ca",
        "scraper": {
            "title": {
                "regex": "<span id=\"btAsinTitle\"[^>]*>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"priceLarge\">CDN\\$(.+?)<\\/b>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": "var match = html.match(/<span id=\\\"pricePlusShippingQty\\\">.{0,50}<span class=\"plusShippingText\">(.*?)<\\/span>/i);\nif (match) {\n  var value = match[1];\n  if (value.match(/free/i)) {\n    callback('0.0');\n    return;\n  } else {\n    var price_match = value.match(/([\\d\\.,]+)/);\n    if  (price_match) {\n      var price = price_match[1];\n      callback(price);\n      return;\n    }\n  }\n} else {\n  match = html.match(/(FREE.{0,20}Super Saver Shipping|priceLarge[\\1-\\uFFFF]{4,200}FREE|qualifies for.{1,50}Free Shipping)/i);\n  if (match) {\n    callback('0.0');\n    return;\n  }\n}\ncallback('');\n"
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "CA",
        "regex": "^https?://www\\.amazon\\.ca",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Snowshack.com",
        "scraper": {
            "title": {
                "regex": "<h2\\s*.*description\">(.*)<\\/h2>",
                "js": null
            },
            "price": {
                "regex": "price\\s*.*\\$([\\d.,]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?snowshack\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Jeanswelt.de",
        "scraper": {
            "title": {
                "regex": "<h2 class=\"productsname\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price\">([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?jeanswelt\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Kiddisave.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "webprice\">&nbsp;&nbsp;&pound;([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?kiddisave\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "ToysRUs.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "Our Price:&nbsp;<span>(?:\\$|&#036;)(.+?)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<label>UPC/EAN/ISBN:</label>\\s*(\\d+)</p>",
                "js": null
            },
            "mpn": {
                "regex": "Manufacturer #:</label>(.+?)</p>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?toysrus\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "AlphaMusic.de",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": "var wt_co=\"([\\d\\.,]+)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "EAN:<\\/span>(\\d+)",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?alphamusic\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "RadioShack.com",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"title fn\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<span class=\"price\">&#036;(.+?)</span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?radioshack\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Buecher.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "<li class=\"new_price\">EUR (.+?)<\\/li>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<li>(?:ISBN-13|EAN): (\\d+)<\\/li>",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?buecher\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Sonystyle.ca",
        "scraper": {
            "title": {
                "regex": "<h2 id=\"productName\".+?>(.+?)</h2>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var dollars = html.match(/<p class=\"productPrice\">[\\1-\\uFFFF]{1,80}<span class=\"productDollars\">([\\1-\\uFFFF]+?)</);\nvar cents = html.match(/<p class=\"productPrice\">[\\1-\\uFFFF]{1,120}<span class=\"productCents\">([\\1-\\uFFFF]+?)</i);\nvar price;\nif (dollars && cents) {\n    price = dollars[1].replace(/[^0-9]/g, '') + cents[1].replace(/[^.0-9]/g, '');\n}   \ncallback(price);"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "class=\"productSku\">(.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "CA",
        "regex": "^https?://(www\\.)?sonystyle\\.ca",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Misco.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)- www.misco",
                "js": null
            },
            "price": {
                "regex": "Ex VAT.{1,20}<span style=\".+?\">&#163;(.+?)&nbsp;Inc VAT",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Manufacturer Part No:</td><td class=\"textblacksm\" nowrap> <strong>(.+?)\\s*</strong>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?misco\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Ebay.de",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"vi-is1-titleH1\">(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": ">Preis:<\\/th><td class=\".+?\"><span.+?class=\"vi-is1-prcp\".+?>EUR(.+?)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": "var match = html.match(/<t[dh] nowrap=\"nowrap\".+?class=\"vi-ia-attrLabel.+?(?:EAN|ISBN-1\\d):.+?<td.+?class=\"vi-ia-attrColPadding\".+?>(\\d+)<\\/td>/i);\nif (match) {\n  callback(match[1]);\n  return;\n} else {\n  match = html.match(/(?:isbn|ean).{1,200}?[^\\d](\\d{13})[^\\d]/i);\n  if (match) {\n    callback(match[1]);\n    return;\n  } else {\n    match = html.match(/isbn.{1,200}?[^\\d](\\d{10})[^\\d]/i);\n    if (match) {\n      callback(match[1]);\n      return;\n    }    \n  }\n  callback('');\n}"
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "DE",
        "regex": "^https?://(www|cgi|item)?\\.ebay\\.de",
        "use_inner_html": true,
        "category": "merchant"
    }, {
        "name": "Restockit.com",
        "scraper": {
            "title": {
                "regex": "<h2>(.+?)</h2>",
                "js": null
            },
            "price": {
                "regex": "prod_price.+?\\$([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<b>UPC: </b>(\\d+)<",
                "js": null
            },
            "mpn": {
                "regex": "<b>ITEM #: </b>([^<]+)",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^http://(www\\.)?restockit\\.com/.+?\\(.+?\\)\\.html",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Mytoys.de",
        "scraper": {
            "title": {
                "regex": "<h1>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "<div class=\"price\">&#8364;([\\1-\\uFFFF]+?)<span",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?mytoys\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Wwbw.com",
        "scraper": {
            "title": {
                "regex": "ProductTitle\">([^<]+)<",
                "js": null
            },
            "price": {
                "regex": "spanPrice\" Style=\"\">.([\\d.,]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?wwbw\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Plumbnation.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"title lowlight\">(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "<b>&pound;(.+?) inc VAT<\\/b>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?plumbnation\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "MotherNature.com",
        "scraper": {
            "title": {
                "regex": "title>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "\"p-ourprice\">Price:<span class=\"priceLarge\">\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?mothernature\\.com/p/",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "6ave.com",
        "scraper": {
            "title": {
                "regex": "pbCaption='(.+?)'",
                "js": null
            },
            "price": {
                "regex": "You Pay[\\1-\\FFFF]+?([\\d\\.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "pg_retsku = \"(.+?)\"",
                "js": null
            },
            "brand": {
                "regex": "images/manufacturer/.+?title='(.*)'",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?6ave\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Fragrancenet.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?fragrancenet\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Game.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>\\s*([\\1-\\uFFFF]+?)\\s*<",
                "js": null
            },
            "price": {
                "regex": "<input type='hidden' name='mintPrice' value='([\\d\\.,]+)'",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?game\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "GlassesUsa.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": "product-price.*?\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?GlassesUsa\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "1800pools.com",
        "scraper": {
            "title": {
                "regex": "<title>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?1800pools\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "SonyStyle.com",
        "scraper": {
            "title": {
                "regex": "<h2 id=\"productName\".+?>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "productDollars\">(.+?productCents\">.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "productSku\">(.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?sonystyle\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Onplumb.com",
        "scraper": {
            "title": {
                "regex": "<input type=\"hidden\" name=\"product\" value=\"(.+?)\">",
                "js": null
            },
            "price": {
                "regex": "<span id=\"product_price\" style=\"white-space: nowrap;\">.(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?onplumb\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Dog.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)\\s-",
                "js": null
            },
            "price": {
                "regex": "ItemPagePrice.*?\\$.*?([\\d.,]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?dog\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Hagebau.de",
        "scraper": {
            "title": {
                "regex": "<h1 id=\"insertpoint_name\"[\\1-\\uFFFF]+?>([\\1-\\uFFFF]+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": "<div class=\"product_price\"[\\1-\\uFFFF]+?EUR\\&nbsp;([\\1-\\uFFFF]+?)<\\/div",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?hagebau\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "PcConnectionExpress.com",
        "scraper": {
            "title": {
                "regex": "ctl00_Content_ucProductDetails_webName\">(.+?)\\<",
                "js": null
            },
            "price": {
                "regex": "\"ctl00_Content_ucOrderInfo_price\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Mfr. Part#:</strong> (.+?)<",
                "js": null
            },
            "brand": {
                "regex": "Term=\">(.+?)<",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?pcconnection\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "CaBuy.com",
        "scraper": {
            "title": {
                "regex": "<title>[\\1-\\uFFFF]+?Buy.com Canada -([\\1-\\uFFFF]+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "<span id=\"spanMainPrice\".+?\\$(.+?)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<div id=\"divUPC\"[\\1-\\uFFFF]+?<\\/b>\\&nbsp;00(\\d+)[\\1-\\uFFFF]+?<\\/div>",
                "js": null
            },
            "mpn": {
                "regex": "<div id=\"divMfgPartNo\"[\\1-\\uFFFF]+?<\\/b>([\\1-\\uFFFF]+?)<\\/div>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "CA",
        "regex": "^https?://ca\\.buy\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Kodak.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "purchase[\\1-\\uFFFF]+?container[\\1-\\uFFFF]+?dr_actualPrice[\\1-\\uFFFF]+?\\$([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "purchase[\\1-\\uFFFF]+?container[\\1-\\uFFFF]+?item.+?#(\\d+)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://store\\.kodak\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "MrWatch.com",
        "scraper": {
            "title": {
                "regex": "<meta name=\"title\" content=\"(.+?) at",
                "js": null
            },
            "price": {
                "regex": "\"right t_xlarge red\">\\$<span itemprop=\"price\">([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?mrwatch\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "DirectCosmetics.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - Direct Cosmetics",
                "js": null
            },
            "price": {
                "regex": "<input type=\"hidden\" name=\"price\" value=\"(.+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?directcosmetics\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Wirefly.com",
        "scraper": {
            "title": {
                "regex": "<span id=\"ucpAccessoryDescription1_lblAccName\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<span id=\"ucpAccessoryPricing1_lblPrice\">\\$(.+?)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<span id=\"ucpAccessoryDescription1_lblRefCode\">\\((.+?)\\)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?wirefly\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Homedepot.ca",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - Home Depot Canada",
                "js": null
            },
            "price": {
                "regex": "<input type=\"hidden\" name=\"offerPrice\" value=\"(.+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Model:&nbsp;(.+?)&nbsp;",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "CA",
        "regex": "^https?://(www\\.)?homedepot\\.ca",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "ThePerfumeSpot.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\| The Perfume Spot",
                "js": null
            },
            "price": {
                "regex": "class=\"orderFinalPrice\">\\$(.+?)<\\/td",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Item # (.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?theperfumespot\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Homelement.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\[.*<\\/title",
                "js": null
            },
            "price": {
                "regex": "price\">\\$([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?homelement\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Horse.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)\\s-",
                "js": null
            },
            "price": {
                "regex": "ItemPagePrice.*?\\$.*?([\\d.,]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?horse\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "ComfortFirst.com",
        "scraper": {
            "title": {
                "regex": "ProductName\">([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "Our Price:.*?\\$([\\d,.]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "UPC:\\s(\\d+)\\s",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?comfortfirst\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Pcwb.co.uk",
        "scraper": {
            "title": {
                "regex": "content=\"Buy the best deals on (.+?)right",
                "js": null
            },
            "price": {
                "regex": "<li><strong>(.+?)<\\/strong> <abbr title=\"including\">",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<li>Manufacturers #: <strong>(.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?pcwb\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Printronic.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)</",
                "js": null
            },
            "price": {
                "regex": "class=\"price\">\\$([\\d.,]+)</div>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?printronic\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Redcoon.de",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var price_element_regex = /<img src=\".+?\\/price\\/(.+?)\\.gif\"/g;\n                    var price_elements = html.match(price_element_regex);\n                    if (price_elements && (price_elements.length > 0)) {\n                      var price_string = '';\n                      var price_digit_regex = /<img src=\".+?\\/price\\/(.+?)\\.gif\"/;\n                      for (var i=price_elements.length - 1; i>=0; i--) {\n                        var digit = price_elements[i].match(price_digit_regex);\n                        if (digit != null) {\n                          price_string = price_string + digit[1];\n                        }\n                      }\n                      callback(price_string.replace('euro_detail', '').replace('komma', '.').replace(/_/g, ''));\n                    }"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?redcoon\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Hitseller.de",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "preis=([\\d.,].+?)\\&",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?hitseller\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Bol.de",
        "scraper": {
            "title": {
                "regex": "Artikeldetails zu.+?<span class=\"pm_titel\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "b9sellbox[\\1-u]+?.+?span>[\\1-u]+?b9Value\">(.+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<span class=\"value pm_ean\">(.+?)<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?bol\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Golfgalaxy.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "var price = \\'([\\d.,]+?)\\';",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?golfgalaxy\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Joylot.com",
        "scraper": {
            "title": {
                "regex": "<title>.*?\\.com\\s(.+?)</title>",
                "js": null
            },
            "price": {
                "regex": "<input type=\"hidden\" name=\"price\" value=\"(.+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?joylot\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "ModernFurnitureWarehouse.com",
        "scraper": {
            "title": {
                "regex": "<title>\\s?(.*)\\s?\\|",
                "js": null
            },
            "price": {
                "regex": "product-price.*?\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?modernfurniturewarehouse\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Very.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "class=\"productNowPrice\" title=\"Now \\Â£([\\d,.].+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "\"catalogueNumber\">(.+?)<\\/span>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?very\\.co\\.uk.*?\\.prd",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "OnSale.com",
        "scraper": {
            "title": {
                "regex": "<title>onsale \\| (.+?)<",
                "js": null
            },
            "price": {
                "regex": "infoPrice.+?>\\$([\\d.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "UPC:</td>[\\1-\\uFFFF]+?>(.+?)</td>",
                "js": null
            },
            "mpn": {
                "regex": "Mfr Part#:</td>[\\1-\\uFFFF]+?>(.+?)</td>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(store\\.)?onsale\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Pharmacy2u.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": "<div class=\"priceblock4detail\">.+?&pound;(.+?)<\\/div>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?pharmacy2u\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "PcMall.com",
        "scraper": {
            "title": {
                "regex": "<title>([\\1-\\uFFFF]+?)</title>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var match = html.match(/cartPriceDiv.+?\\$(.+?)</i) || html.match(/wt15.+?\\$(.+?)</i);\ncallback(match ? match[1] : '')\n"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "UPC:.+?strong>(.+?)<",
                "js": null
            },
            "mpn": {
                "regex": "Mfr Part#:.+?strong>(.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?pcmall\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Shindigz.com",
        "scraper": {
            "title": {
                "regex": "item_name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Your Price:  \\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?shindigz\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Jimmyjazz.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "product_price\">\\$([\\d.,].+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?jimmyjazz\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Air-n-water.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "our price.+?\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?air-n-water\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Odoroso.com",
        "scraper": {
            "title": {
                "regex": "<title>.+?-(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "class=\"price\">(.+[\\d])",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?odoroso\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Rebuy.de",
        "scraper": {
            "title": {
                "regex": "<h1>[\\1-\\uFFFF]*?(\\w[^<>]+\\w)[\\1-\\uFFFF]*?<",
                "js": null
            },
            "price": {
                "regex": "class=\"buy\">([\\d.,].+?) â‚¬</",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?rebuy\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Hitflip.de",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?hitflip\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cyberport.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<meta itemprop=\"price\" content=\"([\\d\\.,]+)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?cyberport\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Scentiments.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Our Price:[^\\$]*?\\$\\s?([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?scentiments\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Compuplus.com",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "our price.+?\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?compuplus\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Diamondharmony.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "our price.+?\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?diamondharmony\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "BiggerBooks.com",
        "scraper": {
            "title": {
                "regex": "class=\"title-row\"><h1>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "availability\">New Copy: .+?<\\/div>[\\S\\s]+?<\\/div>[\\S\\s]+?<div class=\"add\">[\\S\\s]+?<div class=\"price\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<li>ISBN: (\\d{13})",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?biggerbooks\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Brookstone.com",
        "scraper": {
            "title": {
                "regex": "var CI_ItemName = \"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "Now \\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www|m)?\\.?brookstone\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Diytools.co.uk",
        "scraper": {
            "title": {
                "regex": "\"og:title\" content=\"(.+?)\"/>",
                "js": null
            },
            "price": {
                "regex": "<span class=\"price\">\\Â£([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?diytools\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cymax.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?cymax\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Vanns.com",
        "scraper": {
            "title": {
                "regex": "h1 style=\"margin-bottom:10px;\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price\\s*.*\\$([\\d.,]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "entity.upc=(.+?)'",
                "js": null
            },
            "mpn": {
                "regex": "var CI_ItemMfrNum = '(.+)';",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?vanns\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "LaptopsDirect.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - Laptops Direct<",
                "js": null
            },
            "price": {
                "regex": "<img.+?pound;(.+?)'",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<h1>.+?<span.+> -(.+?)<\\/span",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?laptopsdirect\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Pixmania.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\s*Preisvergleich",
                "js": null
            },
            "price": {
                "regex": "<span itemprop=\"price\">([\\d\\.,]+)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://www\\.pixmania\\.(de|com)/de/de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Betterworldbooks.com",
        "scraper": {
            "title": {
                "regex": "meta property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "NEW:<\\/span> <span class=\"strikeout\" style=\"\">[\\S\\s]+?</span><\\/em> <em><strong>[\\S\\s]+?\\$([\\d,\\.]+?)</",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?betterworldbooks\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Missionrs.com",
        "scraper": {
            "title": {
                "regex": "\"og:title\" content=\"(.+?)\"/>",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?missionrs\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Morphyrichards.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?)\\s*\\|",
                "js": null
            },
            "price": {
                "regex": "span>Price:<\\/span>&nbsp;&nbsp;&pound;([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?morphyrichards\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Koffer-direkt.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?koffer-direkt\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Newegg.ca",
        "scraper": {
            "title": {
                "regex": "<title>Newegg.ca - (.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"price\" id=\"addontotal\">[\\1-uFFFF]+?([\\d].+)",
                "js": "var price = \"\";\n          var match = html.match(/singleFinalPrice.+?\\$<\\/span>(.+?)<\\/sup/);\n          if (match) {\n            price = match[1].replace('<sup>', '');\n          }\n          callback(price);"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Model</dt>[\\1-\\uFFFF]{1,20}<dd>(.+?)<",
                "js": null
            },
            "brand": {
                "regex": "Brand</dt>[\\1-\\uFFFF]{1,20}<dd>(.+?)<",
                "js": null
            }
        },
        "style_override": null,
        "region": "CA",
        "regex": "^https?://(www\\.)?newegg\\.ca",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "CymaxStores.com",
        "scraper": {
            "title": {
                "regex": "title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "TotalBase = ([\\d].+?);",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "title>.+? - (.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?cymaxstores\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Sole.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) Kolibrishop.com",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var euro_match = html.match(/<p class=\"prodetails-price\">(\\d+)/i)\n                            var cent_match = html.match(/<span class=\"prodetails-price-small\">(\\d+)</i);\n                            if (euro_match && cent_match) {\n                              callback(euro_match[1] + \".\" + cent_match[1]);\n                            } else\n                              callback('');"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<b>Herstellernummer:<\\/b>(.+?)<\\/div>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?sole\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Ebay.ca",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"vi-is1-titleH1\">(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "Price:[\\1-\\uFFFF]*?<span.+?class=\"vi-is1-prcp\".+?>[\\1-\\uFFFF]*?C \\$([\\d\\.]+)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": "var match = html.match(/(?:UPC|ISBN-1\\d):.+?<td.+?class=\"vi-ia-attrColPadding\".+?>(\\d+)<\\/td>/i);\n              if (match) {\n                callback(match[1]);\n                return;\n              } else {\n                match = html.match(/(?:isbn|ean).{1,200}?[^\\d](\\d{12,13})[^\\d]/i);\n                if (match) {\n                  callback(match[1]);\n                  return;\n                } else {\n                  match = html.match(/isbn.{1,200}?[^\\d](\\d{10})[^\\d]/i);\n                  if (match) {\n                    callback(match[1]);\n                    return;\n                  }    \n                }\n                callback('');\n              }"
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "CA",
        "regex": "^https?://(www|cgi|item)?\\.ebay\\.ca",
        "use_inner_html": true,
        "category": "merchant"
    }, {
        "name": "Inkfactory.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": " id=\"price-including-tax-.+?\">Â£([\\d.,].+?)</span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?inkfactory\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Electrical123.com",
        "scraper": {
            "title": {
                "regex": "<meta name=\"Description\" content=\"([^\"]+)\"",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var poundMatch = html.match(/<div id=\"productWebPrice\"><span>.+?<\\/span><span>([\\d.,].+?)</);\n                                                            \n                                                            var penceMatch = html.match(/<div id=\"productWebPrice\"><span>.+?<\\/span><span>.+?<\\/span><span class=\"super\">([\\d.,].+?)</);\n                                                            \n                                                            if(poundMatch){\n                                                            var price = poundMatch[1];\n                                                            callback(price);\n                                                            \n                                                            }else {\n                                                            callback('');\n                                                            }"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?electrical123\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Goldsmiths.co.uk",
        "scraper": {
            "title": {
                "regex": "jpg\" alt=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "isCost'>&pound;([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?goldsmiths\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Dnet24.de",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "boxPricePrice\" align=\"left\"><strong style=\"font-size:24px\"> ([\\d.,].+?) EUR<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?dnet24\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Elektromall.de",
        "scraper": {
            "title": {
                "regex": "<h1 .+?>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": ">Preis: ([\\d.,].+?) EURO<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?elektromall\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Porzellanhandel24.de",
        "scraper": {
            "title": {
                "regex": "emosECPageArray\\['name'\\] = '(.+?)';",
                "js": null
            },
            "price": {
                "regex": "\\['preis'\\] = '([\\d.,].+?)';",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?porzellanhandel24\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Wwwhoodboyz.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?(www)?hoodboyz\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Streetsideauto.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "\nvar dollar = /class=\"amount\">(.+?)</;\nvar cents = /class=\"cents\">(.+?)</;\n\nvar matchDollar = html.match(dollar);\nvar matchCents = html.match(cents);\n\nif (matchDollar){\n\tvar price =  matchDollar[0] + '.'+ matchCents[0];\ncallback(price);\n}else \ncallback('');\n"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?streetsideauto\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Zavvi.com",
        "scraper": {
            "title": {
                "regex": "<span itemprop=\"name\">\\s*(.*)\\s*.*\\s*</span>",
                "js": null
            },
            "price": {
                "regex": "Â£([\\d.,]+).*\\s*",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?zavvi\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Onestopfanshop.com",
        "scraper": {
            "title": {
                "regex": "<h1>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "Our Price:[^\\$]*?\\$\\s?([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?onestopfanshop\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Beck-shop.de",
        "scraper": {
            "title": {
                "regex": "ProductTitle\">([^<]+)<",
                "js": null
            },
            "price": {
                "regex": "ContentPlaceHolder1_spnPrice\"><strong>([\\d.,].+?)\\&nbsp\\;\\â‚¬",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?beck-shop\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Vividracing.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price\\s*.*\\$([\\d.,]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?vividracing\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Babyearth.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - babyearth.com",
                "js": null
            },
            "price": {
                "regex": ".*price.*\">\\$([\\d.,]+)</span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?babyearth\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Elightbulbs.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) at eLightBulbs.com",
                "js": null
            },
            "price": {
                "regex": "<input type=\"hidden\" name=\"price\" value=\"(.+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?elightbulbs\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Shopchristmascentral.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?):",
                "js": null
            },
            "price": {
                "regex": "<b>Now&nbsp;\\$([\\d.,].+)</b>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(shop.)?christmascentral\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Sweatband.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)</",
                "js": null
            },
            "price": {
                "regex": "class=\"priceExposed\" style=\"\">Â£([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?sweatband\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Stylintrucks.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<span>List Price: <em>.+?<\\/em><\\/span>[\\S\\s]+?<strong>\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?stylintrucks\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Streetbeatcustoms.com",
        "scraper": {
            "title": {
                "regex": "h1 class='normal'>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Selling Price: <strong>\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?streetbeatcustoms\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Mydesignshop.com",
        "scraper": {
            "title": {
                "regex": "<h1 style=\"margin:0;\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Your price:&nbsp; \\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?mydesignshop\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Samsclub.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)-",
                "js": null
            },
            "price": {
                "regex": "class=\"price-side\">\\$([\\d.,]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?samsclub\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Mwave.com",
        "scraper": {
            "title": {
                "regex": "class='prodDesc'>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<span class=\"maroonArea\".*>\\$([\\d.,].+?)</span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?mwave\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Garden.com",
        "scraper": {
            "title": {
                "regex": "itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price\">([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?garden\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Rockymountaintrail.com",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"detailsH1\">[\\S\\s]+?(.+)",
                "js": null
            },
            "price": {
                "regex": "class=\"priceBarExtras\">Price:<\\/span> \\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?rockymountaintrail\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Jomashop.com",
        "scraper": {
            "title": {
                "regex": "productname','(.+?)'",
                "js": null
            },
            "price": {
                "regex": "<span class=\"price-cell-r\"><b><font color=cc0000>\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": "span class=\"shipping-r\">\\$([\\d,\\.]+?)<",
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?jomashop\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Raffaello-network.com",
        "scraper": {
            "title": {
                "regex": "<h2>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "detailprice\">\\$([\\d.,].+?)</p>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?raffaello-network\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Efaucets.com",
        "scraper": {
            "title": {
                "regex": "prodname.*?>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "productsale\">\\$([\\d.,]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?efaucets\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "PetSupplies.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)\\s-",
                "js": null
            },
            "price": {
                "regex": "Price\".*?\\$([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?petsupplies\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Etronics.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - Compare Prices",
                "js": null
            },
            "price": {
                "regex": "productdisplayprice.+\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Manufacturer Part[\\1-\\uFFFF]+?<b>(.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?etronics\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Ccmusic.com",
        "scraper": {
            "title": {
                "regex": "h1 class=\"clr-primary\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "h3 class=\"clr-highlight\">\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "UPC:(.+?)<br",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?ccmusic\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Douglas.de",
        "scraper": {
            "title": {
                "regex": "breadcrumbs[\\1-\\uFFFF]+?(?:product_|productbrand_)\\d+\\.html.+([\\1-\\uFFFF]+?)<\\/",
                "js": null
            },
            "price": {
                "regex": "<div class=\"price\"[\\1-\\uFFFF]+?>(?:jetzt: )?&euro; (.+?)<\\/",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "DE",
        "regex": "^https?://(www\\.)?douglas\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Zipzoomfly.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) at ZipZoomfly",
                "js": null
            },
            "price": {
                "regex": "Final Price[\\1-\\uFFFF]+?\\$(.+?)&",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Manufacturer SKU[\\1-\\uFFFF]+?left\">(.+?)<\\/td",
                "js": null
            },
            "brand": {
                "regex": "s\\.prop3=\"(.+?)\"",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?zipzoomfly\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Tooled-Up.com",
        "scraper": {
            "title": {
                "regex": "<title>([\\S\\s]+?): Tooled-Up.com",
                "js": null
            },
            "price": {
                "regex": "<span class=\"ourpricefeat(?:offer)?\">.*?([\\d,\\.]+?)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<b>Mfr Part Number<\\/b>(.+?)<\\/li>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?tooled-up\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Luggagepoint.com",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?) \\| ",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?luggagepoint\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Mymemory.co.uk",
        "scraper": {
            "title": {
                "regex": "<\\/h2>.+?<h3>(.+?)<\\/h3",
                "js": null
            },
            "price": {
                "regex": "var price = \\'([\\d.,]+?)\\';",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<h4>Product Code[\\1-\\uFFFF]{1,200}<p>(.+?)<\\/p>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?mymemory\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Masseysoutfitters.com",
        "scraper": {
            "title": {
                "regex": "<title>[\\1-\\uFFFF]+?(\\w.+)",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?masseysoutfitters\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "SuperWarehouse.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\s-",
                "js": null
            },
            "price": {
                "regex": "Your Price:[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?superwarehouse\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Thatpetplace.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\| ThatPetPlace.com\\<",
                "js": null
            },
            "price": {
                "regex": "Now <span>\\$([\\d,.]+?)<\\/spa",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?thatpetplace\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Hollywoodtoysandcostumes.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "<span style=\"font-size:20px\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?hollywoodtoysandcostumes\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Leekes.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "NOW&nbsp;.([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?leekes\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Perfumeemporium.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?perfumeemporium\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Computers4sure.com",
        "scraper": {
            "title": {
                "regex": "<td class=\"reshead\">(.+?)</td>",
                "js": null
            },
            "price": {
                "regex": "our price.+?\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?computers4sure\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Medpex.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)-",
                "js": null
            },
            "price": {
                "regex": "\"detail-price\">([\\d.,].+?) \\&",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?medpex\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "CcVideo.com",
        "scraper": {
            "title": {
                "regex": "h1 class=\"clr-primary\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "TargetPrice\">Current Price: \\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "id=\"lblUpc\">([\\d]+?)<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?ccvideo\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Musicfactorydirect.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?musicfactorydirect\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Searsoutlet-new.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?searsoutlet-new\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Buch.de",
        "scraper": {
            "title": {
                "regex": "meta Property=\"og:Title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?buch\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Seapets.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Â£([\\d.,]+).*\\s*",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?seapets\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Apple.com/US",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://store\\.apple\\.com/us/configure",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Mobilejoker.de",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?mobilejoker\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "E2save.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?e2save\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Longtallsally.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "strike><ins>&pound;([\\d,\\.]+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?longtallsally\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Taylorgifts.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+)<small",
                "js": null
            },
            "price": {
                "regex": "\"price\"><strong>now \\$([\\d.,].+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?taylorgifts\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Zoobuy.net",
        "scraper": {
            "title": {
                "regex": "\" title=\"(.+?)\" width=\"200\"",
                "js": null
            },
            "price": {
                "regex": "width=\"60%\"><span class=\"Text17\">([\\d,.].+?) EUR",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?zoobuy\\.net",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Shophistory.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "\"salePrice\">\\$([\\d.,]+.?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(shop|mshop)?\\.?history\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Gbdollarnights.com",
        "scraper": {
            "title": {
                "regex": "\"og:title\" content=\"(.+?)\"/>",
                "js": null
            },
            "price": {
                "regex": "td><td><\\/td><td itemprop=\"price\">\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(gb.)?dollarnights\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Qvc.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) . QVC.com",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var dollar = html.match(/<p id=\"parProductDetailPrice\">\\$([\\d,.]+?)</);\nvar pence = html.match(/parProductDetailPrice\">.+?<span class=\"superscript\">([\\d,.]+?)</);\nif(dollar && pence){\ncallback(dollar[1] + pence[1]);}else\n{callback('')}"
            },
            "pnp": {
                "regex": "Shipping &amp; Handling: \\$([\\d.,].+?)<br",
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?qvc\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Stumpsparty.com",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var salePrice = html.match(/Sale Price:.+\\$([\\d].+?)</);\nvar yourPrice = html.match(/Your Price:.+\\$([\\d].+?)</);\n \n              if (salePrice){\n               var price = salePrice[1];\n              callback(price);\n              } else if(yourPrice){\n               var price = yourPrice[1];\n              \tcallback(price);\n              }else{\n              callback('');\n              }"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?stumpsparty\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Tiptoeturtle.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+) \\| ",
                "js": null
            },
            "price": {
                "regex": "'regular_price'>\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?tiptoeturtle\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Reifen.com",
        "scraper": {
            "title": {
                "regex": "\"og:title\" content=\"(.+?)\"/>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var euroPrice = html.match(/priceDetails\">[\\1-u]+<b>([\\d.,].+?)</);\nvar centPrice = html.match(/priceDetails\">[\\1-u]+<sup>([\\d.,].+?)</);\n\nif (euroPrice){\n var price = euroPrice + centPrice;\ncallback(price);\n}else{\ncallback('');\n}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?reifen\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Macys.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var standardPrice = html.match(/<!-- PRICE BLOCK: Single Price -->[\\S\\s]+?<span>\\$([\\d,.].+?)</);\r\nvar salePrice = html.match(/priceSale\">Sale \\$([\\d.,].+?)<[\\s\\S]*?Sale ends/);\r\n\r\nif (salePrice) {\r\n  price = salePrice[1];\r\n  callback(price);\r\n}\r\nelse if (standardPrice) {\r\n  price = standardPrice[1];\r\n  callback(price);\r\n}\r\nelse {\r\n  callback('')\r\n}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www1.)?macys\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Bravado.de",
        "scraper": {
            "title": {
                "regex": "<title>Bravado -\\s*(.*) -.*?<\\/title",
                "js": null
            },
            "price": {
                "regex": "<div class=\"SFCBuy-our_price\"><strong class=\"SFCBuy-text SFCBuy-text-our_price\">EUR ([\\d\\.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?bravado\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Doit24.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)- online",
                "js": null
            },
            "price": {
                "regex": "id=\"ArtPreis\">[\\1-u]+?([\\d.,].+?)&nbsp;&euro;",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?doit24\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Parfumdreams.de",
        "scraper": {
            "title": {
                "regex": "<title>[\\1-u]+?(.+)\\| Parfumdreams.de",
                "js": null
            },
            "price": {
                "regex": "class=\"VariationDetail3\">([\\d.,].+?) \\â‚¬",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?parfumdreams\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Fahrrad.de",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var euro = html.match(/\\/([\\d])_xxl.gif/g);\nvar cents = html.match(/\\/([\\d])_decimal_xxl.gif/g);\n\nif(euro){\n\tvar price1 =  euro[0];\n        var price2 = euro[1];\n\nvar price = price1;\n\n\n\tcallback(price);\n\n}else {\ncallback(\"\");\n}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?fahrrad\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Myjewelrybox.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "id=\"myFinalPrice\" itemprop=\"price\">\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?myjewelrybox\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Hagelshop.de",
        "scraper": {
            "title": {
                "regex": "<h1>[\\1-u](.+?)<",
                "js": null
            },
            "price": {
                "regex": "lb_priceDetail\">([\\d.,].+?) EUR<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?hagelshop\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Imwalking.de",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?imwalking\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Petsmart.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "Our Price:[^\\$]*?\\$\\s?([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?petsmart\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Zooroyal.de",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "class=\"price\">(.+[\\d])",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?zooroyal\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Buero-direkt.de",
        "scraper": {
            "title": {
                "regex": "<h1>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"aktionspreis\"> ([\\d.,].+?) EUR <",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?buero-direkt\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Taschenkaufhaus.de",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": "\"price\">(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?taschenkaufhaus\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Manalive.com",
        "scraper": {
            "title": {
                "regex": "\"pitleft\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "pipriceright\">\\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?manalive\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Seaofdiamonds.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?seaofdiamonds\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Llewellyn.com",
        "scraper": {
            "title": {
                "regex": "page_title\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var salePrice = html.match(/n=top>Price:  <\\/td>[\\S\\s]+?n class='sale'>[\\S\\s]+?([\\d,.]+?) On S/);\r\nvar normalPrice = html.match(/\t\t\t<td class=\"smtext\">\\$([\\d,.]+?)<\\/td>/);\r\n                                \r\nif (normalPrice){\r\n  var price = normalPrice[1];\r\n  callback(price); \r\n} else {\r\n  price = salePrice[1];\r\n  callback(price);\r\n}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?llewellyn\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Pasttimes.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)at Past ",
                "js": null
            },
            "price": {
                "regex": "\"price\">.([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?pasttimes\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Golfetail.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "\"nprice.+?Only \\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?golfetail\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Sitstay.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?sitstay\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Shopecko.com",
        "scraper": {
            "title": {
                "regex": "class=\"prodTitle\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"saleprice\">\\$([/\\d].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?shopecko\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Tnvitamins.com",
        "scraper": {
            "title": {
                "regex": "\"itemTitle\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "temPriceSale\">Now Only: \\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?tnvitamins\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Pacificgeek.com",
        "scraper": {
            "title": {
                "regex": "<title>.+?-(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "bodytextred\">\\$([\\d.,].+)[\\1-u]+<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?pacificgeek\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Forzieri.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "\"price\" class=\"list_price\" id=\"listPrice\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?forzieri\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Homelife24.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?homelife24\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Babyviva.com",
        "scraper": {
            "title": {
                "regex": "\">(.+?)<\\/a><\\/h1>",
                "js": null
            },
            "price": {
                "regex": "<div class=\"pricing\">\\s*?<div class=\"price\">\\$([\\d\\.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?babyviva\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Time2.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?time2\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Rockbottomgolf.com",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "Price\".*?\\$([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?rockbottomgolf\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Builddirect.com",
        "scraper": {
            "title": {
                "regex": "manufacturerLogo\" title=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "pdp_bluepriceb\"> \\$(\\d.+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?builddirect\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Overtons.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var soldOut = html.match(/>Availability:&nbsp;<\\/span>Sold Out</);\nvar price = html.match(/<span class=\"regPrice\">\\$([\\d,.].+?)</);\nif(price && !soldOut){callback(price[1]);}else{callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?overtons\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Folica.com",
        "scraper": {
            "title": {
                "regex": "<h1 .+?>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": "class=\"price\"[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?folica\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Willygoat.com",
        "scraper": {
            "title": {
                "regex": "mg border=\"0\" onclick=\"submit\" alt=\"(.+?)\" src=\"",
                "js": null
            },
            "price": {
                "regex": "width=\"50\"><font face=\"arial\" size=\"-1\" color=\"red\"><b>([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?willygoat\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Businessitonline.com",
        "scraper": {
            "title": {
                "regex": "<h1 .+?>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var matchedPrice = html.match(/ec_large_action_link_s2\">OUR PRICE: \\Â£([\\d.,].+?)</);\n                                                        \n              if(matchedPrice){\n                   var price = parseFloat(matchedPrice[1]);\n                   if(price > 20 && price < 40){\n                      var delivery = 3.95;\n                      }\n                   else if(price > 40){\n                      var delivery = 0;\n                      }\n                   else {\n                   var delivery = 5.95;\n                   } \n\n                   // Delivery is added from the feed so the full price is just the vat added from the delivery and price added to the price without delivery :p  \n                     \n                   var pricePlusDelivery = price + delivery;\n                   var vat = pricePlusDelivery / 100 * 20;\n                   var priceIncVat = price + vat;\n                   var fullPrice = priceIncVat.toString();\n                   callback(fullPrice);\n              }else{\n                    callback('');\n              }"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?businessitonline\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Mainzoo.de",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?mainzoo\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Asda.com",
        "scraper": {
            "title": {
                "regex": "h1 class=\"hide\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "span class=\"currency\">[\\S\\s]*&pound;[\\S\\s]*<\\/span>[\\s]*([\\d.]+)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": "var isBook = html.match(/dept: 'books'/);\n                                                                                                                                                      if (isBook){\n                                                                                                                                                      callback(1.99);} else {\n                                                                                                                                                      callback('');}"
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(m\\.)?(direct\\.)?asda\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Hq-patronen.de",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "<h4>([\\d.,].+?) .</h4>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?hq-patronen\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cpotools.com",
        "scraper": {
            "title": {
                "regex": "<!-- Product Name Display -->(.+?)<",
                "js": null
            },
            "price": {
                "regex": "sale: \"([\\d.,].+?)\",",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?cpotools\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "JR.com",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"souvenir\">(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "Now:[^\\$]{0,300}\\$([\\d,\\.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Mfr\\.&nbsp;Part&nbsp;# (.+)\\b",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?jr\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Toolschest.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "<div class=itemPrice>\\$([\\d\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?toolschest\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "BarnesAndNoble.com",
        "scraper": {
            "title": {
                "regex": "data-cm-title=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "price hilight\" itemprop=\"price\" data-bntrack=\"Price\" data-bntrack-event=\"click\">\\$([\\d,.].+?)<",
                "js": "var matchVideo= html.match(/onlinePrice[\\1-\\uFFFF]+?\\$([^<>]+?)</);\n                                                            var matchStandard = html.match(/itemprop=\"price\"> \\$([\\d,.].+?) </);\n                                                                                          \n                                                                                          if(matchStandard){\n                                                                                          var price = matchStandard[1];\n                                                                                          callback(price);} else if (matchVideo){\n                                                                                          var price = matchVideo[1];\n                                                                                          callback(price);} else {\n                                                                                          callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "id=\"ean1\" value=\"(.+?)\"",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "https?://(?:www|search|gifts|music|video|videogames)\\.barnesandnoble\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Gettington.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "priceNormal\">\\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www|m)?\\.?gettington\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Birthdayinabox.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "\"price\" itemprop=\"price\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?birthdayinabox\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Amazon.de",
        "scraper": {
            "title": {
                "regex": "<span id=\"btAsinTitle\"[^>]*>(.+?)</span>",
                "js": null
            },
            "price": {
                "regex": "class=\"priceLarge\">EUR ([\\d.,]+)",
                "js": "var match = html.match(/<input[^>]+id=\"ASIN\"[^>]+value=\"(.+?)\"/);\n                              var price_url = 'http://www.amazon.de/gp/product/du/map-popover-update.html?a=' + match[1];\n                              getHttp(price_url, function(data) {\n                                var match = data.match(/class=\"priceLarge\">\\$([\\d.,]+)/);\n                                if (match){\n                                  callback(match[1]);\n                                } else {\n                                  callback('');\n                                }\n                              });"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "DE",
        "regex": "^https?://www\\.amazon\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "CapitolSupply.com",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?)\\s\\s",
                "js": null
            },
            "price": {
                "regex": "updateoption_without_image\\([^)]+?'([\\d]+\\.\\d{0,2})\\d+?','[^']+?'\\)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "MFG Part: <b>(.+?)<",
                "js": null
            },
            "mpn": {
                "regex": "<title>(.+?)-",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "#mega_menu {  \r\n  margin-top: <<-95>>px !important;\r\n}\r\n#mainmenu {  \r\n  padding-top: <<56>>px !important;\r\n}",
        "region": "US",
        "regex": "^https?://(www\\.)?capitolsupply\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Bookdepository.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1><strong><span property=\"dc:title\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<div class=\"mainDetails\">[\\S\\s]{1,100}<span class=\"value\" id=\"priceBlock\">[\\S\\s]*?<span class=\"price\" title=\"Our price\\s*\"><strong>.*?;([\\d,\\.]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<span property=\"dc:identifier\"> (.+?)<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(www\\.)?bookdepository\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Expansys.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - Expansys.com UK",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var pound = html.match(/temprop=\"price\">&pound;([\\d,\\.]+?)</);\nvar pence = html.match(/itemprop=\"price\">&pound;.+?<sup>(.+?)</);\nif(pound){\n  var price = pound[1] + pence[1];\n  callback(price);\n} else{\n  callback('');\n}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "content=\"ean:(.+?)\"",
                "js": null
            },
            "mpn": {
                "regex": "content=\"mpn:(.+?)\"",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www|m)?\\.?expansys\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Amazon.co.uk",
        "scraper": {
            "title": {
                "regex": "<span id=\"btAsinTitle\"[^>]*>(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var price = html.match(/class=\"priceLarge\">.([,.\\d]+)/);\n                                                                                                                            if(price){\n                                                                                                                            var cost = price[1];\n                                                                                                                            callback(cost);}\n                                                                                                                            else{callback('')}"
            },
            "pnp": {
                "regex": null,
                "js": "var match = html.match(/<span id=\\\"pricePlusShippingQty\\\">.{0,50}<span class=\"plusShippingText\">(.*?)<\\/span>/i);\nif (match) {\n  var value = match[1];\n  if (value.match(/free/i)) {\n    callback('0.0');\n    return;\n  } else {\n    var price_match = value.match(/([\\d\\.,]+)/);\n    if  (price_match) {\n      var price = price_match[1];\n      callback(price);\n      return;\n    }\n  }\n} else {\n  match = html.match(/(FREE.{0,20}Super Saver Shipping|priceLarge[\\1-\\uFFFF]{4,200}FREE|qualifies for.{1,50}Free Shipping)/i);\n  if (match) {\n    callback('0.0');\n    return;\n  }\n}\ncallback('');\n"
            },
            "identifier": {
                "regex": "\"ASIN\" name=\"ASIN\" value=\"(.+?)\"",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": "&amp;search-type=ss\">(.+?)</a>",
                "js": null
            }
        },
        "style_override": "body {\r\n  margin-top: <<0>>px !important;\r\n}",
        "region": "UK",
        "regex": "^https?://www\\.amazon\\.co\\.uk.*(dp/|gp/product|gp/aw|o/ASIN)",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Abt.com",
        "scraper": {
            "title": {
                "regex": "h1 id=\"product_title\"><span itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price: '([\\d,.].+?)'",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "class=\"abt_model\">Abt Model:(.+?)<",
                "js": null
            },
            "brand": {
                "regex": "href=\"/brand/(.+?)\"><",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?abt\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Onestopplus.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?onestopplus\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Lifeuniform.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?lifeuniform\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Bookbyte.com",
        "scraper": {
            "title": {
                "regex": "ctl00_ContentPlaceHolder1_lblTitleBreadcrumb\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "id=\"ctl00_ContentPlaceHolder1_lblBestNew\">\\$([\\d.,]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "ISBN10\">(\\d{10})<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?bookbyte\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Scan.co.uk",
        "scraper": {
            "title": {
                "regex": "h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "OfferPrice2\">&pound;(.+?) Inc VAT",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "</h1><h2>(.+?)-",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?scan\\.co\\.uk/products",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "FactoryOutletStore.com",
        "scraper": {
            "title": {
                "regex": "<h2>([\\w\\s]*)</h2>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var match = html.match(/<span class=\"Purchase_Price_Heading\">\\$(.+)<\\/span>/);\r\n                                                            \r\n                                                            if(match){\r\n                                                            var price = parseFloat(match[1].replace(\",\",\"\"));\r\n                                                            var discount =  10;\r\n                                                            var new_price = price;\r\n                                                            callback(new_price);} else {\r\n                                                            callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(\\w+)\\.factoryoutletstore\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Base.com",
        "scraper": {
            "title": {
                "regex": "<img alt=\"Buy (.+?) :",
                "js": null
            },
            "price": {
                "regex": "'price'>Â£([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Catalogue No:(.+)",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?base\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Plantmenow.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "Availability[\\1-\\uFFFF]{0,250}<span class=\\\"price\\\">.(.+?)<\\/span",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "\"label\">EAN</td>[\\1-\\uFFFF]{0,20}<td class=\"data\">(.+?)</td>",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?plantmenow\\.co\\.uk/.+aspx",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Schuh.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "<span id=\"spPrice\">[\\1-\\uFFFF]+?;(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?schuh\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Ashford.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\| Ashford.com",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var price = html.match(/Retail:<\\/th>[\\S\\s]+?<td>[\\S\\s]+?\\$([\\d,\\.]+?)</);\r\nvar sale = html.match(/Your Price:<\\/th>[\\S\\s]+?<td class=\"highlight\">[\\S\\s]+?\\$([\\d,.].+?)</);\r\nif(price){callback(price[1]);}else if (sale){callback(sale[1]);}else {callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?ashford\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Lowes.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<p id=\"pricing\">[\\1-\\uFFFF]{1,200}<span class=\"price\">\\$(.+?)</span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Model #:([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?lowes\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Ryman.co.uk",
        "scraper": {
            "title": {
                "regex": "name:\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "pricestring:\"(.+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?ryman\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Diapers.com",
        "scraper": {
            "title": {
                "regex": "\"og:title\" content=\"(.+?)\"/>",
                "js": null
            },
            "price": {
                "regex": "singlePrice.*?\\$([\\d,.]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?diapers\\.com/p/",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Karstadt.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - Karstadt",
                "js": null
            },
            "price": {
                "regex": "<nobr>EUR&nbsp;([\\d\\.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "DE",
        "regex": "^https?://(www\\.)?karstadt\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Sundiego.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\s:",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var salePrice =  html.match(/\"price_sale\">Sale: \\$([\\d.,].+?)</);\n                              var  regPrice =  html.match(/\"price_regular\">\\$([\\d.,].+?)</);\n                              \n                              if(salePrice){\n                              price = salePrice[1];\n                              callback(price);\n                              \n                              }else {\n                              price = regPrice[1];\n                              callback(price);\n                              }"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?sundiego\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Roadrunnersports.com",
        "scraper": {
            "title": {
                "regex": "<title>Buy ([^<]+?) at Road Runner",
                "js": null
            },
            "price": {
                "regex": "class=\"prod_detail_reg_price \"> \\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?roadrunnersports\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Wateroutfitters.com",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?wateroutfitters\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Music123.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "\"price\">\\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?music123\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Viking-direct.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title>",
                "js": null
            },
            "price": {
                "regex": "class=\"price_incVAT\">[\\S\\s]+?Â£([\\d,.]+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?viking-direct\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "1800lighting.com",
        "scraper": {
            "title": {
                "regex": "title>(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "productprice\" class=\"main-price resetDefault\">[\\S\\s]+?\\$([\\d,.].+?)\\b",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "name=\"itemsku\" value=\"(.+?)\"",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?1800lighting\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Boots.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - Boots<",
                "js": null
            },
            "price": {
                "regex": "price\" property=\"v:price\">[\\S\\s]+?\\&pound;([\\d,.].+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www|m)?\\.?boots\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Lambda-Tek.com",
        "scraper": {
            "title": {
                "regex": "<HEAD><TITLE>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "PriceSmall>(.+?) inc. VAT",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Mfr. Part Number:</B>(.+?)</P>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?lambda-tek\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Housershoes.com",
        "scraper": {
            "title": {
                "regex": " class=\"product\">[\\1-u]+?<strong>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "productPrice\":([\\d,.].+?),",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?housershoes\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Leftlanesports.com",
        "scraper": {
            "title": {
                "regex": "name=\"title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?leftlanesports\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Overstock.com",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"productName\">(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "<span name=\"Ovalue\" class=\"Ovalue\"[\\S\\s]+?itemprop=\"price\"[\\S\\s]+?>[\\S\\s]+?GBP[\\S\\s]+?([\\d,.]+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "ISBN[\\S\\s]+?<dd>(.+?)<",
                "js": null
            },
            "mpn": {
                "regex": "<dt>Model No:</dt>[\\1-\\uFFFF]+?<dd>(.+?)</dd>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?overstock\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Bulbamerica.com",
        "scraper": {
            "title": {
                "regex": "<h1><span itemprop=\"itemreviewed\">(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "\"price\">\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?bulbamerica\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Discovery.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "Price:</span><span class=\".+?\">[\\S\\s]+?\\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(store|mstore)?\\.?discovery\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Gamefly.com",
        "scraper": {
            "title": {
                "regex": "\"title h2\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": " for: <strong>\\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?gamefly\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "PcRush.com",
        "scraper": {
            "title": {
                "regex": "\"producttag\"><h1>([^<]+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var noStock = html.match(/span class=\"product_name\">Not Available</);\nvar price = html.match(/\"big_red_price\">\\$([\\d.,]+?)</);\nif(!noStock && price){callback(price[1]);}else{callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?pcrush\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Heatandplumb.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?heatandplumb\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Abebooks.de",
        "scraper": {
            "title": {
                "regex": "<h1 id=\"book-title\">(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "<b>Preis: <\\/b>.*?EUR ([\\d\\,\\.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "isbn.+?>(\\d{10})<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?abebooks\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "OfficeMax.com",
        "scraper": {
            "title": {
                "regex": "div class=\"skuHeading\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Your Price: <\\/span>[\\S\\s]+?<span class=\"skuPrice\">[\\S\\s]+?\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Manufacturer #:[\\1-\\uFFFF]+?(.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www|m)?\\.?officemax\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Kmart.com",
        "scraper": {
            "title": {
                "regex": "property=\"gr:name\" content=\"\\s*(.+?)\\s*\"",
                "js": null
            },
            "price": {
                "regex": "input type=\"hidden\" value=\"([\\d,\\.]+?)\" id=\"numPrdSalePrice",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www\\.)?kmart\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Feelunique.com",
        "scraper": {
            "title": {
                "regex": "<title>(.*) - feelunique.com<\\/title>",
                "js": null
            },
            "price": {
                "regex": "<h3 class=\"\">&pound;([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<input name=\"p\" id=\"p\" type=\"hidden\" value=\"(\\d+)\" \\/>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www|m)?\\.?feelunique\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Homeclick.com",
        "scraper": {
            "title": {
                "regex": "itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?homeclick\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Herroom.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?herroom\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Photo4less.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?photo4less\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Carsons.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?carsons\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Younkers.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?younkers\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Secondspin.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?secondspin\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Theblackbow.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?theblackbow\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Dialaphone.co.uk",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?dialaphone\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Fiftyplus.co.uk",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?fiftyplus\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Tylertool.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Our Price:[\\1-\\uFFFF]+?\\$([\\d\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?tylertool\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Marinedepot.com",
        "scraper": {
            "title": {
                "regex": "umb\" class=\"breadcrumbs\">([a-zA-Z\\d].+?)<\\/spa",
                "js": null
            },
            "price": {
                "regex": "geBody_lblProductPrice\">\\$([\\d,.]+?)<\\/spa",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?marinedepot\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Arkivmusic.com",
        "scraper": {
            "title": {
                "regex": ">(.+?) \\| ArkivMusic<",
                "js": null
            },
            "price": {
                "regex": "<span class=\"price\">\\$([\\d,.]+?)<\\/spa",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?arkivmusic\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Fathead.com",
        "scraper": {
            "title": {
                "regex": "<h1 itemprop=\"name\">(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "Price:.+\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?fathead\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "123inkjets.com",
        "scraper": {
            "title": {
                "regex": "<h1.*?>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?123inkjets\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Mankind.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?)\\s*\\|",
                "js": null
            },
            "price": {
                "regex": "\"price\">[\\1-u]+\\&#163;(.+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?mankind\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Compsource.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\s:",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?compsource\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "OfficeDepot.com",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"fn\">(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "noProd =  html.match(/is not available for purchase at this time/)\r\nmatch = html.match(/class=\"price_amount\">[\\S\\s]+?\\$([\\d,\\.]+)/);\r\nif (match && !noProd){callback(match[1]);}else{callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<td id=\"basicInfoManufacturerSku\">(.+?)Â <\\/td>",
                "js": null
            },
            "brand": {
                "regex": "<td id=\\'attributebrand_nameKey\\'>(.+?)Â <\\/td>",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?officedepot\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Valuepetsupplies.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?):",
                "js": null
            },
            "price": {
                "regex": "class=\"productSalePrice\">[\\S\\s]+?Sale Price: \\$<span class=\"price\">([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?valuepetsupplies\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "HerbsPro.com",
        "scraper": {
            "title": {
                "regex": "class=\"prodeth1\"><b>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "width=\"104\"><span class=\"style18\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "UPC : (\\d+)",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?herbspro\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Shoplet.com",
        "scraper": {
            "title": {
                "regex": "<title>(.*?)<",
                "js": null
            },
            "price": {
                "regex": "pvalue: '([\\d,\\.]+?)',",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?shoplet\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Nike.com",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"product-title\">(.+)",
                "js": null
            },
            "price": {
                "regex": "span itemprop =\"price\" class=\"local\">.*?([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "http\\://nike\\.com",
        "use_inner_html": null,
        "category": null
    }, {
        "name": "Rakuten.com",
        "scraper": {
            "title": {
                "regex": "<meta property=\"og:title\" content=\"(.+)\"\\s*\\/>",
                "js": null
            },
            "price": {
                "regex": "\"pr-pricing-total-price\">\\$([\\d\\,.]+?)<",
                "js": "var hidden = html.match(/dtmc_product_price = ([\\d,\\.]+?)00;/);\r\nvar price = html.match(/\"pr-pricing-total-price\">\\$([\\d\\,.]+?)</);\r\nif(price){\r\n  callback(price[1]);} \r\nelse if(hidden && !price)\r\n{callback(hidden[1]);}\r\nelse\r\n  {callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<b>UPC:<\\/b>Â (.+)",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": "<meta itemprop=\"brand\" content=\"(.+?)\"",
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www|mobile|m)?\\.?rakuten\\.com",
        "use_inner_html": false,
        "category": ""
    }, {
        "name": "BicWarehouse.com",
        "scraper": {
            "title": {
                "regex": "div class=\"title\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "sprice\">Sale Price: \\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "UPC:.*?(\\d+)",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?bicwarehouse\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Diy.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "\"onlyPrice\">Only &pound;([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?diy\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Barratts.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "aSkuPrice = new Price \\(\"&pound;([\\d,.].+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?barratts\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Drjays.com",
        "scraper": {
            "title": {
                "regex": "\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?drjays\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "DirectAsda.com",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "default_details_GM&price=([\\d,.]+?)&styl",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "\"upc\" value=\"000(.+?)\"",
                "js": null
            },
            "mpn": {
                "regex": "\"upc\" value=\"000(.+?)\"",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www|m)?\\.?direct\\.asda\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Geeks.com",
        "scraper": {
            "title": {
                "regex": "<title>([\\S\\s]+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "price = html.match(/span class='prodetprice'>\\$([\\d,.].+?)</);\r\nout = html.match(/Â Â <FONT Color=\"#FF0000\">Out of Stock<\\/FONT/);\r\n\r\nif(out)\r\n{ \r\n  callback('');\r\n}\r\nelse\r\n{\r\n  callback(price[1]);\r\n}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?geeks\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Danskin.com",
        "scraper": {
            "title": {
                "regex": "h1 class=\"prodTitle\" itemprop=\"name\">[\\S\\s]+?(.+)",
                "js": null
            },
            "price": {
                "regex": "var price = \"([\\d,.].+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?danskin\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Microwarehouse.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var price = html.match(/<span class=\"price\">\\Â£([\\d,.]+?)</);\nif(price){\n\nvar vat = ((parseFloat(price[1]) / 100) * 10) * 2;\nvar finalPrice = parseFloat(price[1]) + vat \n \ncallback(finalPrice.toString());\n\n}else {callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "\"mpn\">Manufacturer ID: (.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?microwarehouse\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "BbcShop.com",
        "scraper": {
            "title": {
                "regex": "class=\"bg_header_top\"><\\/div><h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Our  Price.*?([\\d,.]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "Product Ref:.*?(\\d{13})<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?bbcshop\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Halloweenmart.com",
        "scraper": {
            "title": {
                "regex": "title>(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "var onlinePrice = \"\\$([\\d,.].+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?halloweenmart\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Eforcity.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)</",
                "js": null
            },
            "price": {
                "regex": "<div class=\"itemProdInfoSalePriceValue\".+?\\$(.+?)<\\/div>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www|m)?\\.?eforcity\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "ToysRUs.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "<li class=\"total_price\">.(.+?)<\\/li>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www|m)?\\.?toysrus\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Passiontec.de",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "preis=([\\d.,].+?)\\&",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?passiontec\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Digitalo.de",
        "scraper": {
            "title": {
                "regex": "<meta property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "class=\"productListing-price productListing-data\">([\\d.,].+?)</td>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?digitalo\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Uhrcenter.de",
        "scraper": {
            "title": {
                "regex": "<h1 itemprop=\"name\">(.*)</h1>",
                "js": null
            },
            "price": {
                "regex": "&euro; ([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?uhrcenter\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Chefscatalog.com",
        "scraper": {
            "title": {
                "regex": "class=\"product_title\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "InfoControl_ctl00_skuRepeater_ctl00_inpSkuPrice\" class=\"skuPrice\" value=\"\\$([\\d\\.,]+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?chefscatalog\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Ukforzieri.com",
        "scraper": {
            "title": {
                "regex": "<h4>(.*)</h4>",
                "js": null
            },
            "price": {
                "regex": "id=\"listPrice\">&pound;([\\d]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?uk.forzieri\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Yagma.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)-",
                "js": null
            },
            "price": {
                "regex": "price.*\\s*<strong>\\s*([\\d.,]+)\\s*.*<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?yagma\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Pgestore.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\s*\\|",
                "js": null
            },
            "price": {
                "regex": "<meta name=\"pgeprice\" content=\"\\$([\\d\\.]+)\"\\/>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": "<span class=\"brand\">(.+?)<\\/span>",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?pgestore\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Bootskitchenappliances.com",
        "scraper": {
            "title": {
                "regex": "<strong class='title'>(.+?)<\\/strong>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var price = html.match(/ctl00_ctl00_MasterContentPlaceHolder_ChildContentCenter_Prices_Top_nowPrice\">NowÂ \\Â£([\\d,.].+?)</);\r\nif (!price) price = html.match(/ctl00_ctl00_MasterContentPlaceHolder_ChildContentCenter_Prices_Top_liPrice\"><span class='price' property='v:price'>Â£([\\d\\,.]+)</);\r\nif(price){\r\n  cost = price[1].replace(',','');\r\n  callback(cost);\r\n} else {\r\n  callback('');\r\n}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?bootskitchenappliances\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Universitybooksonline.com",
        "scraper": {
            "title": {
                "regex": "<h2>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<div id=\"divProdNewPrice\" style=\"display:inline;\">.+? class=\"CopyRed\">\\$([\\d,.].+?)[<|&]",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<div id=\"divProdNewPrice\" style=\"display:inline;\"><span style=\"text-decoration: line-through;\">\\$.+?<\\/span>&nbsp;Retail<br \\/><span class=\"CopyRed\">\\$([\\d,.].+?)&",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?universitybooksonline\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Michaelstars.com",
        "scraper": {
            "title": {
                "regex": "<h1 style=\"font-size:15px; color:#000000; margin:0px 0px 5px 0px;\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var matchPrice = html.match(/[^']<b>PRICE: \\$([\\d,.].+?)</);\n                                var matchSale = html.match(/<font color=\"red\">Now \\$([\\d,.]+?)</);\n                                \n                                if (matchSale){\n                                callback(matchSale[1]);\n                                }\n                                else if (matchPrice) {\n                                callback(matchPrice[1]);\n                                }\n                                else {callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?michaelstars\\.com/p-",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Giftcollector.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "<img style=\"float: right; margin: .+? width:100px;\" src=\"\\/media\\/catalog\\/brands\\/.+?.jpg\" alt=\".+?\" \\/>[\\S\\s]+?class=\"price-box\">[\\S\\s]+?<span class=\"regular-price\" id=\"product-price-.+?\"><span class=\"price\">\\$([\\d,.]+?)</span><",
                "js": "var matchId = html.match(/input type=\"hidden\" name=\"product\" value=\"(.+?)\" \\/>/);\n                                \n                                if (matchId){\n                                var patt = new RegExp('regular-price\" id=\"product-price-' + matchId[1] +'\"><span class=\"price\">\\$(.+?)<');\n                                           var matchPrice = html.match(patt);\n                                \n                                if(matchPrice){callback(matchPrice[1]);}else{callback(\"\")};\n                                }\n                                else \n                                {callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?giftcollector\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cyberguys.com",
        "scraper": {
            "title": {
                "regex": "ctl00_HtmlHead\"><title>[\\S\\s]+?(.+?)\\s{2,3}",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?cyberguys\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Laptopz.com",
        "scraper": {
            "title": {
                "regex": "h1 id=\"productName\" class=\"productGeneral\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var match = html.match(/<span class='show-price'>Price:<\\/span>\\$([\\d,.].+?)</);\nvar noStock = html.match(/\"out-of-stock\">OUT OF STOCK</);\nif(match && !noStock){\ncallback(match[1]);}else\n{callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?laptopz\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Smartbargains.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var soldOut = html.match(/color=\"#C61344\" face=arial size=3>Â  Â  sold out</);\r\n                                var match = html.match(/Your Price:<\\/font><\\/td><td align=left><FONT COLOR=\"red\" face=arial size=3>\\$([\\d,\\.]+?)</);\r\n                                \r\n                                if(match && !soldOut){\r\n                                callback(match[1]);\r\n                                }else{\r\n                                callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?smartbargains\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Mattressesworld.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1.*?>(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?mattressesworld\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Organize.com",
        "scraper": {
            "title": {
                "regex": "\"og:title\" content=\"(.+?)\"/>",
                "js": null
            },
            "price": {
                "regex": "<div class=\"item-price\">\\$([\\d\\.]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?organize\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Catfootwear.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?catfootwear\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Lookfantastic.com",
        "scraper": {
            "title": {
                "regex": "\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "itemprop=\"price\" class=\"price\">[\\S\\s]+?&#163;([\\d,\\.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?lookfantastic\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Crucial.com",
        "scraper": {
            "title": {
                "regex": "\"/favicon.png\" /><title>[\\S\\s]+?([a-zA-Z\\d].+?) from Crucial.com",
                "js": null
            },
            "price": {
                "regex": "div class=\"finalprice\">.*?([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?crucial\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Giggle.com",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"productname\"><!-- Product Name Display -->(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?giggle\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Sarenza.co.uk",
        "scraper": {
            "title": {
                "regex": "\"og:title\" content=\"(.+?) @Saren",
                "js": null
            },
            "price": {
                "regex": "\"price\">\\Â£([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?sarenza\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Djpremium.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?djpremium\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Simplyhe.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)-",
                "js": null
            },
            "price": {
                "regex": "id=\"our_price_display\">\\Â£([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?simplyhe\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Bestbullysticks.com",
        "scraper": {
            "title": {
                "regex": "<h1 .+?>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": "price\\s*.*\\$([\\d.,]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?bestbullysticks\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Comtech.de",
        "scraper": {
            "title": {
                "regex": "h1 itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "span itemprop=\"price\">([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?comtech\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Ajmadison.com",
        "scraper": {
            "title": {
                "regex": "<h1.*?><span.*?>(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var todays = html.match(/Today's Price:<\\/td>[\\S\\s]+?<td class=\"t18\"\\s*?>\\$([\\d,\\.]+?)\\s*?</); \r\nvar normal = html.match(/Your Price:[\\S\\s]*?itemprop=\"price\"\\s*?>\\$([\\d,\\.]+)/);\r\nif(todays){\r\n  callback(todays[1]);}else if (normal){callback(normal[1]);} else{callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?ajmadison\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Proaudiostar.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": " class=\"price\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?proaudiostar\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Musicarts.com",
        "scraper": {
            "title": {
                "regex": "<h1> (.+?) <",
                "js": null
            },
            "price": {
                "regex": "Price:[\\S\\s]+?\\$([\\d\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?musicarts\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "UkOfficeDirect.co.uk",
        "scraper": {
            "title": {
                "regex": "\"mainItemImage\" alt=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var match = html.match(/\"m_c_ctl00_lblPrice\">&pound;([\\d,.]+?)</i);\n                                if (match) {\n                                \tvar price = Math.round(parseFloat(match[1])*120)/100; /* vat */\n                                \tcallback(price.toString());\n                                } else {\n                                \tcallback('');\t\n                                }"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?ukofficedirect\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Swell.com",
        "scraper": {
            "title": {
                "regex": " <h1 class=\"prod-Name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?swell\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Electricaldiscountuk.co.uk",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?electricaldiscountuk\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Milanoo.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "class=\"s-final_price final_price\" price=\"([\\d,.]+?)\">",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?milanoo\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Electronicexpress.com",
        "scraper": {
            "title": {
                "regex": "<h1>([\\S\\s]+?)<",
                "js": null
            },
            "price": {
                "regex": "\"new-price\">Your Price: <span>\\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?electronicexpress\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Expansys-usa.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - Expansys",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var pound = html.match(/id='price' ><meta itemprop=\"currency\" content=\"USD\"><strong><span itemprop=\"price\">\\$(.+?)</);\n\n\n var pence = html.match(/id='price' ><meta itemprop=\"currency\" content=\"USD\"><strong><span itemprop=\"price\">\\$.+?<sup>(['\\d,.]+?)<\\/su/);\n                                                              if(pound){\n                                                              var price = pound[1] + pence[1];\n                                                              callback(price);}\n                                                              else{callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "content=\"ean:(.+?)\"",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?expansys-usa\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Bonton.com",
        "scraper": {
            "title": {
                "regex": "id=\"prodName\" value=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var salePrice = html.match(/d=\"prodSalePrice\" value=\"\\$([\\d,.]+?)\"/);\n                                var regPrice = html.match(/class=\"price\">Price: \\$([\\d,.]+?)</);\n                                \n                                if(salePrice){\n                                callback(salePrice[1]);\n                                }else if( regPrice){\n                                callback(regPrice[1]);\n                                }else{\n                                callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?bonton\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "MacConnection.com",
        "scraper": {
            "title": {
                "regex": "ucProductDetails_webName\">(.*?)<",
                "js": null
            },
            "price": {
                "regex": "id=\"ctl00_Content_ucOrderInfo_price\"[\\s\\S]*?>\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?macconnection\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Yoursclothing.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>([\\S\\s]+?)<",
                "js": null
            },
            "price": {
                "regex": "><span style='color: #ff0000;'>BUY NOW .*?([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?yoursclothing\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Ulta.com",
        "scraper": {
            "title": {
                "regex": "<h1>[\\S\\s]+?(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "<!-- Reg. Price: -->[\\S\\s]+?\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?ulta\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Toolking.com",
        "scraper": {
            "title": {
                "regex": "<title>ToolKing.com: (.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "TooKing.com Price</dt><dd itemprop=\"price\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?toolking\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Tmart.com",
        "scraper": {
            "title": {
                "regex": "h1 class=\"fl\"><span itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"productSpecialPrice\" itemprop=\"price\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?tmart\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Surffanatics.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "jpg\\|pr\\:([\\d,.]+?)\\|ct",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?surffanatics\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Sportsmith.net",
        "scraper": {
            "title": {
                "regex": "<title>[\\S\\s]+?(.+?) \\| SPORTS",
                "js": null
            },
            "price": {
                "regex": ", Price: \\$([\\d,\\.]+?), SKU",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?sportsmith\\.net",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Beautyexpert.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "itemprop=\"price\" class=\"price\">[\\S\\s]+?&#163;([\\d,.].+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?beautyexpert\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Ecampus.com",
        "scraper": {
            "title": {
                "regex": "h1 class=\"title\" itemprop=\"name\">(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": "<h2>Buy New Textbook<\\/h2></div>[\\S\\s]+?<div class=\"availability\">.+?<\\/div>[\\S\\s]+?<\\/div>[\\S\\s]+?<div class=\"buy\">[\\S\\s]+?<div itemprop=\"offers\" itemscope itemtype=\".+?\">[\\S\\s]+?<div class=\"price\" itemprop=\"price\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "productId=(\\d+)",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.|new\\.)?ecampus\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Bhs.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?)\\s*\\-",
                "js": null
            },
            "price": {
                "regex": "product_price\">(?:Price:|Now)&nbsp;<span>&pound;([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?bhs\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Kazootoys.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "\"price\">Price: <span .+?<span class=\"new\"><em>\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?kazootoys\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Walmart.com",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"productTitle\"[\\S\\s]*?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "setSalePrice\\('([\\d.,].+?)'\\)",
                "js": "var match1 = html.match(/priceWeight:'([\\d,.].+?)'/);\r\n                                                                                              var match2 = html.match(/setSalePrice\\('([\\d.,].+?)'\\)/);\r\n                                                                                              var outOfStock = html.match(/grayWMAvailability\" style=\"display: block;/);\r\n                                var notInStock = html.match(/Not Available at this time/);\r\n                                                                                                                                                                                                                      \r\n                                                                                              if (outOfStock || notInStock) \r\n                                                                                               {\r\n                                                                                                callback('');\r\n                                                                                               } \r\n                                                                                              else if (match2)\r\n                                                                                               {\r\n                                                                                                 callback(match2[1]);\r\n                                                                                               }\r\n                                                                                               else\r\n                                                                                               {\r\n                                                                                                  callback(match1[1]);\r\n                                                                                               }"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Model No\\.[\\S\\s]+?LightRow\">(.{2,20})<\\/td",
                "js": null
            },
            "brand": {
                "regex": "setBrand\\('(.+?)'\\)",
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www|mobile)?\\.?walmart\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Soap.com",
        "scraper": {
            "title": {
                "regex": "\"og:title\" content=\"(.+?)\"/>",
                "js": null
            },
            "price": {
                "regex": "singlePrice.*?\\$([\\d,.]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?soap\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Petmountain.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "dollar_sign\">\\$<\\/span>[\\S\\s]+?<span itemprop=\"price\">([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?petmountain\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Mothercare.com",
        "scraper": {
            "title": {
                "regex": "<h1.*?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "payprice: ([\\d,.]+?),",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?mothercare\\.com/",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Visiondirect.com",
        "scraper": {
            "title": {
                "regex": "<meta property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "price\\s*.*\\$([\\d.,]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?visiondirect\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Thebookpeople.co.uk",
        "scraper": {
            "title": {
                "regex": "h1 class=\"fn\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<span>Our price:<\\/span> &pound;([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": "var price = html.match(/\"price\">&pound;([\\d,.]+?)</);\n                                                                                                                                var pp = html.match(/singleDelAmount:'([\\d,.]+?)'/);\n                                                                                                                                                                \n                                                                                                                                                                if(price){\n                                                                                                                                                                    var cost = parseFloat(price[1]);\n                                                                                                                                                                    if(cost < 24.99)\n                                                                                                                                                                        {callback(pp[1]);}\n                                                                                                                                                                    else\n                                                                                                                                                                        {callback('');}\n                                                                                                                                                                }\n                                                                                                                                                                else {callback('');}"
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?thebookpeople\\.co\\.uk/webapp/wcs/stores/servlet/qs_product_tbp.+?productId=",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Smartbuyglasses.co.uk",
        "scraper": {
            "title": {
                "regex": " class='big_image'  alt=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": " name=\"price\" type=\"hidden\" value=\"([\\d,\\.]+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?smartbuyglasses\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Heartlandamerica.com",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var priceMatch = html.match(/price_super\">\\$<\\/span><span class=\"price\">([\\d.,].+?)<\\/span><span class=\"price_super\">([\\d.,].+?)<\\/span>/);\r\n\r\nif(priceMatch){\r\n var priceMatchPence = priceMatch[2].replace(' ', '');\r\nvar price = priceMatch[1] + '.'+ priceMatchPence;\r\ncallback(price);}else{\r\ncallback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?heartlandamerica\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Screwfix.com",
        "scraper": {
            "title": {
                "regex": "<h1.*?>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "span itemprop=\"price\">.*?([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?screwfix\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cafepress.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1 itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "itemprop=\"price\">&#163;([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?cafepress\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cafepress.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "><span itemprop=\"price\">\\$([\\d,.]+?)<\\/spa",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?cafepress\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Pickabook.co.uk",
        "scraper": {
            "title": {
                "regex": "class=\"bookTitleItemDetail\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"ourPriceNumber\">.*?([\\d,\\.]+?)<\\/span",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "http\\://pickabook\\.co\\.uk",
        "use_inner_html": null,
        "category": null
    }, {
        "name": "Brylanehome.com",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.*?)\\|",
                "js": null
            },
            "price": {
                "regex": "<span class='salepricestyle'>Sale.*?:\\s*\\$([\\d.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?brylanehome\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cotswoldoutdoor.com",
        "scraper": {
            "title": {
                "regex": "meta Property=\"og:Title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "itemprop=\"price\">([\\d\\.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?cotswoldoutdoor\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Ebay.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1.*?>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "id=\"prcIsum\" itemprop=\"price\"  style=\"\">.*?([\\d,\\.]+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "<span id=\"fshippingCost\"[^>]*?>.([\\d\\.]+)</span>",
                "js": ""
            },
            "identifier": {
                "regex": "valign=\"top\">EAN:<\\/td><td width=\"80%\" valign=\"top\">([\\d]+?)<",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": "body, #vi-container {\r\n  margin-top: <<0>>px !important;\r\n}",
        "region": "UK",
        "regex": "^https?://(www|cgi|item)?\\.(mobileweb\\.)?ebay\\.co\\.uk",
        "use_inner_html": true,
        "category": "merchant"
    }, {
        "name": "Google.com",
        "scraper": {
            "title": {
                "regex": "",
                "js": null
            },
            "price": {
                "regex": "",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": "if (html.match(/igoogle_gadget_loader/i)) \r\n { \r\n callback({}); \r\n } \r\n else  \r\n {  \r\n var res = {}; \r\n var asin_1 = html.match(/amazon.com.+?\\/dp\\/([0-9A-Za-z]{10})/); \r\n var asin_2 = html.match(/amazon.com.+?%2Fdp%2F([0-9A-Z]{10})/); \r\n var title = unescape(scrapeField(html, 'q=(.+?)&').replace(/\\+/g, ' ')); \r\n if (asin_1)  \r\n { \r\n res.asin = asin_1[1];  \r\n } \r\n else if (asin_2) \r\n { \r\n res.asin = asin_2[1]; \r\n }  \r\n  \r\n else \r\n {  \r\n var shopping_results_present = html.match(/(shopping results (for|from) .{2,6} (new|used))/i); \r\n if (shopping_results_present ) \r\n {  \r\n res.product_query = title;  \r\n } \r\n } \r\n  \r\n if (res.asin || res.product_query) \r\n { \r\n res.title = title; \r\n } \r\n \r\ncallback(res); \r\n }"
        },
        "style_override": "#searchform {  \n  margin-top: <<0>>px !important;\n}\n#gbx3, #gbx4, #gbz, #gbg {  \n  top: <<0>>px !important;\n}\n#gbq, #gbu{  \n  top: <<30>>px !important;\n}\n#gbx1{ \n margin-top: <<0>>px !important;\n}",
        "region": "US",
        "regex": "^https?://(www\\.)?google\\.com/(?:#|search|webhp)(?!.*tbm=isch)",
        "use_inner_html": true,
        "category": "search_engine"
    }, {
        "name": "Google.co.uk",
        "scraper": {
            "title": {
                "regex": "",
                "js": null
            },
            "price": {
                "regex": "",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": "if (html.match(/igoogle_gadget_loader/i)) {\r\n    callback({});\r\n} else {\r\n  var res = {};\r\n  res.asin = scrapeField(html, \"amazon\\.co\\.uk/.{2,100}/.{1,4}/([0-9A-Z]{10})\");\r\n  if (!res.asin){res.asin = scrapeField(html, \"amazon\\.co\\.uk%2F.{2,100}%2F.{1,4}%2F([0-9A-Z]{10})\");}else{res.asin = res.asin}; \r\n  var shopping_results_present = html.match(/(shopping results (for|from) .{2,6} (new|used))/i);\r\n  var title = unescape(scrapeField(html, \"q=(.+?)&\").replace(/\\+/g, ' '));\r\n  if (shopping_results_present && res.asin == '') \r\n    res.product_query = title;\r\n  if (res.asin || res.product_query) \r\n    res.title = title;\r\n  callback(res);\r\n}"
        },
        "style_override": "#searchform {  \n  margin-top: <<0>>px !important;\n}\n#gbx3, #gbx4, #gbz, #gbg {  \n  top: <<0>>px !important;\n}\n#gbq, #gbu{  \n  top: <<30>>px !important;\n}\n#gbx1{ \n margin-top: <<0>>px !important;\n}",
        "region": "UK",
        "regex": "^https?://(www\\.)?google\\.co\\.uk/(?:#|search)(?!.*tbm=isch)",
        "use_inner_html": true,
        "category": "search_engine"
    }, {
        "name": "UkSearchYahoo.com",
        "scraper": {
            "title": {
                "regex": "",
                "js": null
            },
            "price": {
                "regex": "",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": "var res = {};\r\nres.asin = scrapeField(html, 'amazon\\\\\\\\.co\\\\\\\\.uk/[^/]{2,100}/dp/([a-z0-9]{10})');\r\nvar title = scrapeField(html, '<title>(.+?) - Yahoo! Search Results</title>');\r\nif (html.match(/Amazon \\\\(UK\\\\)/i) && !res.asin)\r\n  res.product_query = title;               \r\nif (res.asin || res.product_query)\r\n  res.title = title;\r\ncallback(res);"
        },
        "style_override": null,
        "region": "UK",
        "regex": "^http://uk\\.search\\.yahoo\\.com/",
        "use_inner_html": false,
        "category": "search_engine"
    }, {
        "name": "Yahoo.com",
        "scraper": {
            "title": {
                "regex": "",
                "js": null
            },
            "price": {
                "regex": "",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": "var res = {};\r\nres.asin = scrapeField(html, 'amazon.com/[^/]{2,100}/dp/([a-z0-9]{10})');\r\nvar title = scrapeField(html, '<title>(.+?) - Yahoo! Search Results</title>');\r\nif (html.match(/Amazon\\\\.com/) && !res.asin)\r\n  res.product_query = title;               \r\nif (res.asin || res.product_query)\r\n  res.title = title;\r\ncallback(res);\r\n"
        },
        "style_override": null,
        "region": "US",
        "regex": "^http://search\\.yahoo\\.com/",
        "use_inner_html": false,
        "category": "search_engine"
    }, {
        "name": "Mywebsearch.com",
        "scraper": {
            "title": {
                "regex": "",
                "js": null
            },
            "price": {
                "regex": "",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": "var res = {};\r\nres.asin = scrapeField(html, \\\"amazon\\\\\\\\.com\\\\\\\\/.{2,100}\\\\\\\\/dp\\\\\\\\/([0-9A-Z]{10})\\\");\r\nvar shopping_results_present = html.match(/(product search results (for|from) .{2,6} (new|used))/i);\r\nvar title = unescape(scrapeField(html, \\\"searchfor=(.+?)&\\\").replace(/\\\\+/g, ' '));\r\nif (shopping_results_present && res.asin == '') \r\n  res.product_query = title;\r\nif (res.asin || res.product_query) \r\n  res.title = title;\r\ncallback(res);"
        },
        "style_override": "#searchform { \nmargin-top: <<0>>px !important;\n}\n#gbx3, #gbx4, #gbz, #gbg { \ntop: <<0>>px !important;\n}",
        "region": "US",
        "regex": "^http://(search\\.)?mywebsearch\\.com/",
        "use_inner_html": true,
        "category": "search_engine"
    }, {
        "name": "Dealyard.com",
        "scraper": {
            "title": {
                "regex": "property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "<\\/h1>[\\S\\s]+?<div class=\"clear\"><\\/div>[\\S\\s]+?<div id=\"prodpage_pricearea\">[\\S\\s]+?<p class=\"prodpage-retailprice\">List Price:[\\S\\s]+?<span class=\"linethrough\">\\$.+?<\\/span><\\/p>[\\S\\s]+?<p class=\"prodpage-price\">Our Price: \\$(.+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?dealyard\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Ambrosewilson.com",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?)\\s*\\|",
                "js": null
            },
            "price": {
                "regex": "id=\"priceRange\" name=\"prices.hasSellingPriceRange\" class=\"priceRange\">[\\S\\s]+?&po.+?;([\\d,\\.]+)",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?ambrosewilson\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Tools-Plus.com",
        "scraper": {
            "title": {
                "regex": "<div class=\"pagename\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "our price.+?\\$(.+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?tools-plus\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Target.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) : Target<\\/title>",
                "js": null
            },
            "price": {
                "regex": "price\"[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?target\\.com.*?/p/",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Schlecker.com",
        "scraper": {
            "title": {
                "regex": "<input name=\"warenkorb_marke_kurzauslobung\" .+? value=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "<font id=\"TxtPrice.+?>(.+?)</",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.?\\.)?schlecker\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Schwab.de",
        "scraper": {
            "title": {
                "regex": "<h2>(.+?)<\\/h2>",
                "js": null
            },
            "price": {
                "regex": "class=\"price\">(.+[\\d])",
                "js": "var match = html.match(/av.initial_article_selection.product_ref = '(.+?)'/)\n         \n          if (match) {\n            var price_url = 'http://www.schwab.de/is-bin/INTERSHOP.enfinity/WFS/Schwab-SchwabDe-Site/de_DE/-/EUR/DisplayProductInformation-GetVariationsDetailViewKAL?backgcolor=&ProductRef=' + match[1];\n            getHttp(price_url, function(data) {\n              match = data.match(/<div class=\"pspreisjetztneu\"[\\1-\\uFFFF]+?&euro;&nbsp;([\\1-\\uFFFF]+?)</i);\n              if (match) callback(match[1]);\n            })\n          }"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?schwab\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "4electronicwarehouse.com",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?)\\s*\\|",
                "js": null
            },
            "price": {
                "regex": "v><div class=\"catPrice\">\\$([\\d,.]+?)<\\/div",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "var man = \"(.+?)\"",
                "js": null
            },
            "brand": {
                "regex": "<span itemprop=\"brand\">(.+?)<",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?4electronicwarehouse\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "MarksAndSpencerAppliances.com",
        "scraper": {
            "title": {
                "regex": "ProdTitle\">(.+?)\\s*<",
                "js": null
            },
            "price": {
                "regex": "<span class='price'.*?>([^<]+?)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://www\\.marksandspencer-appliances\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Picstop.co.uk",
        "scraper": {
            "title": {
                "regex": " class=\"product\">[\\1-u]+?<strong>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "0\"><span class=\"price\">\\Â£([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": "callback('0');"
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Model Number<\\/td>[\\1-\\uFFFF]+?>(.+?)<\\/td>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?picstop\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "HomeDepot.com",
        "scraper": {
            "title": {
                "regex": "CI_ItemName='(.+?)'",
                "js": null
            },
            "price": {
                "regex": "CI_ItemPrice='([\\d,.]+?)';",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "inline;\">Model  # <span>(.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?homedepot\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "BraceShop.com",
        "scraper": {
            "title": {
                "regex": "name=\"top\"></a>\\s*<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "span id=\"mainprice\">\\$(.+?)</span",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "input name=\"sku\" type=\"text\" value=\"(.+?)\"",
                "js": null
            },
            "brand": {
                "regex": "\"Keywords\" CONTENT=\"(.+?),",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?braceshop\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Otto.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) &ndash; OTTO",
                "js": null
            },
            "price": {
                "regex": "id=\"preis\"[\\1-\\uFFFF]+?&euro;[\\1-\\uFFFF]*?(\\d+(,\\d\\d)?)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^http://(?:www\\.)?otto\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "StateLineTack.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)\\s-",
                "js": null
            },
            "price": {
                "regex": "PagePrice.*?\\$.*?>([\\d.,]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?statelinetack\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "BestbuyEyeGlasses.com",
        "scraper": {
            "title": {
                "regex": "name:\"(.+?)\",",
                "js": null
            },
            "price": {
                "regex": "price: \\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?bestbuyeyeglasses\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Destinationlighting.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\|",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?destinationlighting\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "HealthCheckSystems.com",
        "scraper": {
            "title": {
                "regex": "\"pageTitle\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Price:[\\S\\s]+?<strong>\\$([\\d.,]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "UPC:[\\S\\s]+?<strong>([\\d.,]+)<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?healthchecksystems\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "PcWorld.co.uk",
        "scraper": {
            "title": {
                "regex": "property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "\"currentPrice\" itemprop=\"price\">[\\S\\s]+?&pound;([\\d,.]+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://www\\.pcworld\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Scrapbookingalley.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?-.+?)-.*<\\/title",
                "js": null
            },
            "price": {
                "regex": "Our Price:.+?id=\"productPrice\".+?\\$(.+?)<\\/",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "og:upc\" content=\"(\\d+)\"",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?scrapbookingalley\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "DiscountGolfWorld.com",
        "scraper": {
            "title": {
                "regex": "<title>(.*?) \\|",
                "js": null
            },
            "price": {
                "regex": "catPrice[\\1-\\uFFFF]+?\\$([\\d\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "model = \"(.+?)\"",
                "js": null
            },
            "brand": {
                "regex": "man = \"(.+?)\"",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?discountgolfworld\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "LightingCatalog.com",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?)\\s*\\-",
                "js": null
            },
            "price": {
                "regex": "Your Price:[\\1-\\uFFFF]+?\\$([\\d\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "ctl00_MainContentHolder_lblName2\">(.+?)<",
                "js": null
            },
            "brand": {
                "regex": "ctl00_MainContentHolder_MfgTitleName2\">(.+?)<",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?lightingcatalog\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "ShopBt.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\(",
                "js": null
            },
            "price": {
                "regex": "<span class=\"lprice\">&#163;(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Mfr#: <span .+?>(.+?)<",
                "js": null
            },
            "brand": {
                "regex": "<td class=\"lb la\">[\\1-\\uFFFF]{1,200}Brand[\\1-\\uFFFF]{1,200}\"lb la\">([\\1-\\uFFFF]+?)</",
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://www\\.shop.bt.\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "FashionbugLanebryant.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\s?\\|",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var match = html.match(/salePrice.+?\\$([\\d,.]+)/) || html.match(/\"price.+?\\$([\\d,.]+)/);\ncallback(match ? match[1] : '');"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(?:www\\.)?fashionbug\\.lanebryant\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "ChaptersIndigo.ca",
        "scraper": {
            "title": {
                "regex": "<title>chapters.indigo.ca: (.+): .+<\\/title>",
                "js": null
            },
            "price": {
                "regex": "class=\"price\">\\$(.+?)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<label>(?:ISBN - 13|UPC):<\\/label>(\\d+)",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "CA",
        "regex": "^https?://(www\\.)?chapters\\.indigo\\.ca",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Bookshop.Blackwell.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - Blackwell",
                "js": null
            },
            "price": {
                "regex": "\"price\">&pound;([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<input type=\"hidden\" name=\"isbn\" value=\"(.+?)\"",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?bookshop\\.blackwell\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "ShopAdvanceAutoParts.com",
        "scraper": {
            "title": {
                "regex": "cmProductName\\s?=\\s?\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "offer-price\">\\$([\\d,.]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://shop\\.advanceautoparts\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "ElectronicsExpo.com",
        "scraper": {
            "title": {
                "regex": "name=\"title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "<td class=\"our_price\">\\$(.+?)<\\/td>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?electronics-expo\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "IrvsLuggage.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "Prc\"><div class=.+?><\\/div>\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "SKU:[\\1-\\uFFFF]+?\"feature_value\">(.+?) /",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?irvsluggage\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Compuvest.com",
        "scraper": {
            "title": {
                "regex": "<fieldset .+? class='labl'>(.+?)<\\/fieldset",
                "js": null
            },
            "price": {
                "regex": "Price:[\\1-\\uFFFF]+?<div.+?>\\$(.+?)<\\/div>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Manufacturer P\\/N:[\\1-\\uFFFF]+?<div.+?>(.+?)<\\/div>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?compuvest\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "FragranceX.com",
        "scraper": {
            "title": {
                "regex": "\\s*(.+?)</title>",
                "js": null
            },
            "price": {
                "regex": "lblOurPrice\">.([\\d]+?\\.[\\d]+?)[^\\d]",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?fragrancex\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Currys.co.uk",
        "scraper": {
            "title": {
                "regex": "property=\"og:title\" content=\"(.+?)\"\\s*\\/>",
                "js": null
            },
            "price": {
                "regex": "class=\"currentPrice\" itemprop=\"price\">\\s*.*?([\\d\\.,]+)\\s*<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://www\\.currys\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "WatchWear.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<span class=\"prodprice\">.+?\\$(.+?)USD",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<strong>Product Code:<\\/strong>\\s*(.+)<?",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?watchwear\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Macwarehouse.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<span class=\"incvat\">.(.+?) inc VAT</span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Manufacturer's part number.+?[\\n\\r]+.+?>(.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?macwarehouse\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "AsdaPharmacy.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": "<div class=\"priceblock4detail\">.+?&pound;(.+?)<\\/div>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?asda-pharmacy\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Kolibrishop.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)Kolibrishop.com",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var euro_match = html.match(/<p class=\"prodetails-price\">(\\d+)/i)\nvar cent_match = html.match(/<span class=\"prodetails-price-small\">(\\d+)</i);\nif (euro_match && cent_match) {\n  callback(euro_match[1] + \".\" + cent_match[1]);\n} else\n  callback('');\n"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<b>Herstellernummer:<\\/b>\\&nbsp;(.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?kolibrishop\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Shopgetorganized.com",
        "scraper": {
            "title": {
                "regex": "<h1>[\\1-\\uFFFF]*?(\\w[^<>]+\\w)[\\1-\\uFFFF]*?<",
                "js": null
            },
            "price": {
                "regex": "(?i-mx:price[^\\$]*?\\$([\\d.,]+))",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?shopgetorganized\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Tigerdirect.ca",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "font_right_size3\"><strong>\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "CA",
        "regex": "^https?://(www.)?tigerdirect\\.ca",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Orangeonions.com",
        "scraper": {
            "title": {
                "regex": "<h1>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "input name='Price' value='&#36;([\\d.,].+?)' ",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?orangeonions\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Nextdomesticappliances.co.uk",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?nextdomesticappliances\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Ecost.com",
        "scraper": {
            "title": {
                "regex": "<title>eCost\\s.\\s(.+?)<",
                "js": null
            },
            "price": {
                "regex": "infoPrice[^>]*?>\\$([\\d,.]+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "MFG Part #:<\\/td>[\\1-\\uFFFF]+?>(.+)<\\/td>",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?ecost\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "TheNerds.net",
        "scraper": {
            "title": {
                "regex": "<h1 id=\"itemDetails\" class=\"largeBold\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "largeBold pricing\">Price: <font[\\S\\s]+?color=\"#cc0000\">\\$([\\d.,]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Mfg Part# (.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://www\\.thenerds\\.net",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Andysautosport.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) at Andy\\'s",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?andysautosport\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Modernfurniture4home.com",
        "scraper": {
            "title": {
                "regex": "h2 class=\"product-name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "id=\"product-price-75019\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?modernfurniture4home\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Zeilenreich.de",
        "scraper": {
            "title": {
                "regex": "<h1>[\\s]*(.*)[\\s]*<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "\\s([\\d.,].+?)&nbsp;&euro;<span class=\"shippingmark\">",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "\"addinfo\"[\\1-\\uFFFF]{1,300}EAN: (.+?)<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?zeilenreich\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Watchshopuk.com",
        "scraper": {
            "title": {
                "regex": "<title>(?:Men'?s|Ladies) (.+?) \\(",
                "js": null
            },
            "price": {
                "regex": "price\\[\\d+\\].+?'(.+?)'.*;",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Product Code: ([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "brand": {
                "regex": "Manufacturer:[\\1-\\uFFFF]+?class=\"features\">([\\1-\\uFFFF]+?)</td>",
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?watchshopuk\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Bellacor.com",
        "scraper": {
            "title": {
                "regex": "productTitle\">[^>]*?>([^<]+?)<",
                "js": null
            },
            "price": {
                "regex": "size:22px; line-height:35px;\">\\$([\\d,.].+?)\\*?<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?bellacor\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "TheHouse.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<\\/h",
                "js": null
            },
            "price": {
                "regex": "<div id=\"product-price-house1\">[\\1-\\uFFFF]+?\\$(.+?)<\\/div>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?the-house\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Guitarcenter.com",
        "scraper": {
            "title": {
                "regex": "headerTitle\"> <h1> (.+?) <",
                "js": null
            },
            "price": {
                "regex": "\\d.jpg\",\"NowPrice\":\"\\$([\\d,.]+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?guitarcenter\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Chemistdirect.co.uk",
        "scraper": {
            "title": {
                "regex": "class='proname'>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "span class=\"price\">([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?chemistdirect\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Meijer.com",
        "scraper": {
            "title": {
                "regex": "h1 id=\"product-name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var sale = html.match(/\"sale-price\"><div class=\"price\">\\$([\\d,.]+?)</);\n                                                                                            var price = html.match(/\"no-sale-price\"><div class=\"price\">\\$([\\d,.]+?)</);\n                                                                                            \n                                                                                            if(sale)\n                                                                                            {callback(sale[1]);}\n                                                                                            else if(price)\n                                                                                            {callback(price[1]);}\n                                                                                            else {callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<span class=\"SKU\">Item # (.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www\\.)?meijer\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Petswarehouse.com",
        "scraper": {
            "title": {
                "regex": "<title>([\\S\\s]+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?petswarehouse\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Phase-eight.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1 id=\"productTitle\">(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "\"productPrice\">[\\S\\s]+?<span class=\".+?\">&pound;([\\d,.].+?)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?phase-eight\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "ShoppersChoice.com",
        "scraper": {
            "title": {
                "regex": "name=\"description\" content=\"(.+?) available at ShoppersChoice.com",
                "js": null
            },
            "price": {
                "regex": "id=\"salepricepromo\">[\\S\\s]+?Sale: <span itemprop=\"price\">\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "UPC<\\/strong>:\\s?(\\d+)<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?shopperschoice\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Costumes4less.com",
        "scraper": {
            "title": {
                "regex": "<meta property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "<span.*itemprop=\"price\">\\$(\\d+\\.\\d+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?costumes4less\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Sebago.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?sebago\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Carolinarustica.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?carolinarustica\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Kitchensource.com",
        "scraper": {
            "title": {
                "regex": "<div id=\"body_page_header\">(.+)<\\/div>",
                "js": null
            },
            "price": {
                "regex": "<div class=\"price_spec\">Our Price: \\$([\\d.]+)<\\/div>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?kitchensource\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "TechDepot.com",
        "scraper": {
            "title": {
                "regex": "<td class=\"reshead\">(.+?)</td>",
                "js": null
            },
            "price": {
                "regex": ">Your price<\\/b><span class=\"price\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Mfr# (.+?)</b>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?techdepot\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Apple.com/UK",
        "scraper": {
            "title": {
                "regex": "Configure your (.+)",
                "js": null
            },
            "price": {
                "regex": "total[\\1-\\uFFFF]+?value\">.(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://store\\.apple\\.com/uk/configure",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "247electrical.co.uk",
        "scraper": {
            "title": {
                "regex": " <meta property=\"og:title\" content='(.*)' />",
                "js": null
            },
            "price": {
                "regex": "\"DisplayOnlyPrice\":\"\\Â£(.+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(www\\.)?247electrical\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Gymcompany.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "<div id=\"prices\">[\\S\\s]<span class=\"ourprice\">.*?([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?gymcompany\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Mobilefun.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "<strong>ONLY .*?([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?mobilefun\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Microdirect.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>[\\1-\\uFFFF]*?(\\w[^<>]+\\w)[\\1-\\uFFFF]*?<",
                "js": null
            },
            "price": {
                "regex": "product-price-vat\">\\Â£([\\d.,].+?) <",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?microdirect\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Quizclothing.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "\"ourprice_black\">\\Â£([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?quizclothing\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Prepaymania.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\&pound",
                "js": null
            },
            "price": {
                "regex": "<span>Only &pound;([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?prepaymania\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Pcworldbusiness.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "sub_text_grey\">Â£([\\d.,].+?) inc VAT<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?pcworldbusiness\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Sportolino.de",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "preislabel\">Preis:.+?([\\d.,].+?) EURO<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?sportolino\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Largejeans.de",
        "scraper": {
            "title": {
                "regex": "contentsTopics\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "\"products_price\"> ([\\d.,].+?) EUR<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "DE",
        "regex": "^https?://(www\\.)?(neu\\.)?largejeans\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Unbeatablesaleaffiliatetechnology.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?unbeatablesaleaffiliatetechnology\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Gogoritas.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "artikel_preis\">only ([\\d.,].+?) EUR",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?gogoritas\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Quickaudio.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "product_price_new_big\">([\\d.,].+?) \\â‚¬<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?quickaudio\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Elektropoint24.de",
        "scraper": {
            "title": {
                "regex": "title>(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "price\">([\\d.,].+?)\\&euro;",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?elektropoint24\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Netzwerkartikel.de",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?netzwerkartikel\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Eshopbrokers.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "class=\"price\">\\Â£([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "true",
        "region": "UK",
        "regex": "^https?://(www.)?eshopbrokers\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Voelkner.de",
        "scraper": {
            "title": {
                "regex": " var product_name = \\\"(.+)\\\";",
                "js": null
            },
            "price": {
                "regex": "var product_price = \"([\\d.]+)\";",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?voelkner\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Shoppingpoint24.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "single\">([\\d.,].+?)</span> EUR<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?shoppingpoint24\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Spielgeschenke.de",
        "scraper": {
            "title": {
                "regex": "<h1>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "\\[price\\]\" value=\"([\\d.,].+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?spielgeschenke\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Trendor.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "\"ourPrizeEmph\">EUR&nbsp;([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?trendor\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Play.com",
        "scraper": {
            "title": {
                "regex": "<h1.+itemprop=\"name\">(.+)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "New <span>\\d+ from (?:&#163;|Â£)([\\d\\.]+)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "#mainContainer {\r\n  padding-top: 1px !important;\r\n}",
        "region": "UK",
        "regex": "^https?://www\\.play\\.com",
        "use_inner_html": true,
        "category": "merchant"
    }, {
        "name": "Puzzle-offensive.de",
        "scraper": {
            "title": {
                "regex": "<h1>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?puzzle-offensive\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Oyyy.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>[\\s\\S]*?([^\\s][^\\|\\(]+)[\\|\\(]",
                "js": null
            },
            "price": {
                "regex": "<span itemprop=\"price\">([\\d\\.]+)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "\"mpn:(.+?)\">",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(www.)?oyyy\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Focalprice.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": "lass=\"proPri\">\\$<em>([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?focalprice\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Easycosmetic.de",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?easycosmetic\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cruisercustomizing.com",
        "scraper": {
            "title": {
                "regex": "<h1>[\\1-\\uFFFF]*?(\\w[^<>]+\\w)[\\1-\\uFFFF]*?<",
                "js": null
            },
            "price": {
                "regex": "Price:[\\1-\\uFFFF]+?\\$([\\d\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?cruisercustomizing\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Productexpress.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": "selling-price\">On Sale <span>\\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?productexpress\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cherrybrook.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)-",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?cherrybrook\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Printus24.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?printus24\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Bagking.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<\\/",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?bagking\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Containerstore.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?containerstore\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Petshopusa.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Price\".*?\\$([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?petshopusa\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Mercantila.com",
        "scraper": {
            "title": {
                "regex": "<meta property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "\"global-price\">\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?mercantila\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Shopvisiondecor.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Sale Price:.+=a3481a>\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(shop.)?visiondecor\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Testequipmentdepot.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<font color=\"#c60000\">Sale \\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?testequipmentdepot\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Academicsuperstore.com",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"product_heading\">[\\1-u].+?(.+)",
                "js": null
            },
            "price": {
                "regex": "your_price.+</span>([\\d.,].+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?academicsuperstore\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Fansedge.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)</",
                "js": null
            },
            "price": {
                "regex": "our price.+?\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?fansedge\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Medexsupply.com",
        "scraper": {
            "title": {
                "regex": "<meta name=\"Description\" content=\"([^\"]+)\"",
                "js": null
            },
            "price": {
                "regex": "Price:[\\1-\\uFFFF]+?\\$([\\d\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?medexsupply\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Biggerbras.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "<option value=''>----- \\$([\\d.,].+?)-",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?biggerbras\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Mystrollers.com",
        "scraper": {
            "title": {
                "regex": "blProductTitle\" class=\"arial_11_darkMagenta_bold\" style=\"font-size:18px;\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Our Price[^\\$]+?\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?mystrollers\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Greekgear.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "<div itemprop=\"price\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?greekgear\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Toysrus.ca",
        "scraper": {
            "title": {
                "regex": "<h1>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "current: '([\\d.,].+?)\\$",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "ISBN[\\1-\\uFFFF]+?<dd>(.+?)<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "CA",
        "regex": "^https?://(www.)?toysrus\\.ca",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Lightingbygregory.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?lightingbygregory\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Etoys.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "<strong>Price: <span>&#036;([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<label>UPC/EAN/ISBN:</label>\\s*(\\d+)</p>",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?etoys\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Bagsbuy.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)- Free",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?bagsbuy\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Sportsmemorabilia.com",
        "scraper": {
            "title": {
                "regex": "<TITLE>(.+?)\\|",
                "js": null
            },
            "price": {
                "regex": "our price.+?\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?sportsmemorabilia\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Bargainstation.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Your Price: </span>[\\S\\s]+?<span class=\"price\">[\\S\\s]+?\\$(.+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?bargainstation\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Tvcables.co.uk",
        "scraper": {
            "title": {
                "regex": "\">(.+?)<\\/a><\\/h1>",
                "js": null
            },
            "price": {
                "regex": "Price: <b>&pound;([\\d.,].+?)<\\/b> inc VAT",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?tvcables\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Hbo.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "id=\"salePriceLabel\">Price:<\\/span><span class=\"salePrice\">\\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(store.)?hbo\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Autopartswarehouse.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "class=\"price-info-container\">[\\S\\s]+?<h2>\\$([\\d,.].+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?autopartswarehouse\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Outlet.Altrec.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "class=\"priceLine\">[\\1-uFFFF]+?<span class=\"salePrice\">\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://outlet\\.altrec\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Sears.ca",
        "scraper": {
            "title": {
                "regex": "prodName\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<\\/p>-->[\\1-uFFFF]+?<p class=\"price point\">.+?([\\d].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "CA",
        "regex": "^https?://(www.)?sears\\.ca",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Thewalkingcompany.com",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "itemprop=\"price\">.+?: \\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?thewalkingcompany\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Gemvara.com",
        "scraper": {
            "title": {
                "regex": "product-title\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "\"itemPrice\" class=\"price-label\">\\$([\\d.,]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?gemvara\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "4wheelparts.com",
        "scraper": {
            "title": {
                "regex": "Property=\"og:Title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "\"pricelable\">Price:<\\/span><span class=\"price\">\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?4wheelparts\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Gandermountain.com",
        "scraper": {
            "title": {
                "regex": "name=\"description\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "price\">Our Price &nbsp; <span class=\".+?\">\\$([\\d,.]+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?gandermountain\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Tennisexpress.com",
        "scraper": {
            "title": {
                "regex": "title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<h2 class=\"itemPrice\">[\\1-u]+?\\$([\\d.,].+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?tennisexpress\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Webstaurantstore.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<span itemprop=\"price\" \\s*.*\\s*>\\$([\\d.,]+)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?webstaurantstore\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Isave.com",
        "scraper": {
            "title": {
                "regex": "prod_name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Purchase_Price_Heading\">\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?isave\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Rugsale.com",
        "scraper": {
            "title": {
                "regex": "<h2><strong>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "\"productsPrice_enabled\">\\$([\\d.,].+?)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?rugsale\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Thegreatindoors.com",
        "scraper": {
            "title": {
                "regex": "<h1>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"pricing\"> \\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?thegreatindoors\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Rockymountainatvmc.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Our price:[\\S\\s]+?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?rockymountainatvmc\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Sainsburys.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)-",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var matchPound = html.match(/id=\"nowPrice\" class=\"priceFigure\">([\\d.,].+?)</);\nvar matchPence = html.match(/priceDecimal\">([\\d.,].+?)</);\n\tif(matchPound){\n\t\tvar price = matchPound[0] + matchPence[0];\n\t\tcallback(price);\n\t} else{\n\t\tcallback('');\n\t}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?sainsburys\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Catherineslanebryant.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"price\"[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(catherines.)?lanebryant\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Planetshoes.com",
        "scraper": {
            "title": {
                "regex": "<title>[\\1-u]+?(.+)[\\1-u]+<\\/title>",
                "js": null
            },
            "price": {
                "regex": "<font class='c_SalePrice'>\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?planetshoes\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Usallsaints.com",
        "scraper": {
            "title": {
                "regex": "<h4 class=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"price\">[\\1-u]+\\$([\\d.,].+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.us.)?allsaints\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Mcmelectronics.com",
        "scraper": {
            "title": {
                "regex": "product-data description\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"price\"><sup>\\$</sup>([\\d.,].+?)\\&nbsp",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?mcmelectronics\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Teachercreated.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "Price: \\$<span itemprop=\"price\">([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?teachercreated\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Totalvac.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "ar shpp='([\\d,.]+?)';",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?totalvac\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Hifi-tower.co.uk",
        "scraper": {
            "title": {
                "regex": "id=\"lblproduktTitel\" class=\"T.+?\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "\"price\" itemprop=\"price\">&#163;([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?hifi-tower\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Yoox.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) on YOOX",
                "js": null
            },
            "price": {
                "regex": "<span itemprop=\"price\">\\$ ([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www1?.)?yoox\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Conrad.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)Im Conrad",
                "js": null
            },
            "price": {
                "regex": "produktpreis\">[\\S\\s]*?([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?conrad\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Quickshopping.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)</title>",
                "js": null
            },
            "price": {
                "regex": "EUR <span class=\"price\">(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?quickshopping\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Tophandy.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)</title>",
                "js": null
            },
            "price": {
                "regex": "class=\"price\">(.+[\\d])",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?tophandy\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "D-living.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "product_price_right\">EUR ([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?d-living\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Getmobile.de",
        "scraper": {
            "title": {
                "regex": "ultrasmall\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": ">\\(je &euro; ([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?getmobile\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Wolfgangsvault.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "Price:[\\1-\\uFFFF]+?\\$([\\d\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?wolfgangsvault\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Footlocker.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "Price:[\\1-\\uFFFF]+?\\$([\\d\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?footlocker\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Autoaccessoriesgarage.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "Price:[\\1-\\uFFFF]+?\\$([\\d\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?autoaccessoriesgarage\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Thesource.ca",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "\"price\" class=\"BoldText2\">([\\d.,].+?)\\$",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "CA",
        "regex": "^https?://(www.)?thesource\\.ca",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Atdouglas-shop.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)-  bei",
                "js": null
            },
            "price": {
                "regex": "<div class=\"price\"[\\1-\\uFFFF]+?>(?:jetzt: )?&euro; (.+?)<\\/",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(at.)?douglas-shop\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Shopfussball.de",
        "scraper": {
            "title": {
                "regex": "\" title=\"(.+?)\" >[\\1-u]+<img src",
                "js": null
            },
            "price": {
                "regex": "variantPrices\\[\".+\"\\] = ([\\d.,].+?);",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(shop.)?fussball\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Lebensmittel.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - online",
                "js": null
            },
            "price": {
                "regex": "ArtPreis\">[\\1-u]+?([\\d.,].+?)\\&n",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?lebensmittel\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Nbcuniversalstore.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "salePrice\">[\\1-u].+?\\$([\\d,.]+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?nbcuniversalstore\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "3kisseslingerie.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "product_price_total_.+\">([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?3kisseslingerie\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Connox.de",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "var product_price = \"([\\d\\.,]+)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?connox\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Shopbeate-uhse.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price_id_.+[\\1-u].+?([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(shop.)?beate-uhse\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Onlynaturalpet.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)</",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?onlynaturalpet\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Starcostumes.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?starcostumes\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Inkgrabber.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "face=\"Verdana, Arial, Helvetica, sans-serif\">\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?inkgrabber\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Rockler.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - Rockler Woodworking",
                "js": null
            },
            "price": {
                "regex": "value: '([\\d,\\.]+?)',",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?rockler\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Americandiabeteswholesale.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "PurchaseCtrl_AsLowAsLabel\">\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?americandiabeteswholesale\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Metrokitchen.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "id=\"price_.+?\" value=\"\\$([\\d.,].+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?metrokitchen\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Aspenpublishers.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\|",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?aspenpublishers\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Worldofwatches.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "our price.+?\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?worldofwatches\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Prosportsmemorabilia.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)</",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?prosportsmemorabilia\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Oriononlineshop.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(shop.)?orion\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Chinavasion.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "total_price'><span class='ccy'>\\$([\\d.,].+?)\\&",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?chinavasion\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Petstore.com",
        "scraper": {
            "title": {
                "regex": "name=\"title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "ageBody_lblEnlargeProductPrice\">\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?petstore\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Plus.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)-",
                "js": null
            },
            "price": {
                "regex": "priceProduct\">[\\1-u]+&euro; ([\\d.,].+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?plus\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "T-online-shop.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "webtrekk.productCost = \"([\\d.,].+?)\";",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?t-online-shop\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "onestopplusa.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?onestopplus\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Homeandpatiodecorcenter.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)\\s-",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?homeandpatiodecorcenter\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Comfortmarket.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "Sale price:<\\/div><div class=saleP><font> \\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?comfortmarket\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Telescope.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "Price\".*?\\$([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?telescope\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Skinit.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?skinit\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Elektronik-star.de",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)</",
                "js": null
            },
            "price": {
                "regex": "emosECPageArray\\['preis'\\]\t= '([\\d.,].+?)'",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?elektronik-star\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Collectablesdirect.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)\\s-",
                "js": null
            },
            "price": {
                "regex": ",'','\\$(.+?[\\d.,])'",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?collectablesdirect\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Collectablesdirect.ca",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)\\s-",
                "js": null
            },
            "price": {
                "regex": ",'\\CAD(.+?[\\d.,])'",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "CA",
        "regex": "^https?://(www.)?collectablesdirect\\.ca",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Onestepahead.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?onestepahead\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Redenvelope.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "PriceLabel\" class=\" Strong Red\">\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(gifts.)?redenvelope\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Thedrumworks.com",
        "scraper": {
            "title": {
                "regex": "<h1 .+?>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?thedrumworks\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Shoebuy.com",
        "scraper": {
            "title": {
                "regex": "stylename\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Price: <span>\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?shoebuy\\.com/((?!cust/).*)",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Bedroomfurnituremart.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\-",
                "js": null
            },
            "price": {
                "regex": "<meta itemprop=\"price\" content = \"\\$([\\d,.].+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?bedroomfurnituremart\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Jamesallen.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\-",
                "js": null
            },
            "price": {
                "regex": "\\$([\\d].+?)<\\/title>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?jamesallen\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Zephyrsports.com",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "input name='Price' value='&#36;([\\d.,].+?)' ",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?zephyrsports\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Wholesalecostumeclub.com",
        "scraper": {
            "title": {
                "regex": "<h1.*>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "<span class=\"priceCSC\">\\$([\\d.,].+?)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?wholesalecostumeclub\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Luggageguru.com",
        "scraper": {
            "title": {
                "regex": "<title>LuggageGuru.com - (.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "\"ourprice\">([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?luggageguru\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Patioumbrellas.com",
        "scraper": {
            "title": {
                "regex": ">(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "\"boldText\">\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?patioumbrellas\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Healthykin.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?healthykin\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Perfume-worldwide.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "<td align=\"center\" bgcolor=\"#FFFFFF\" class=\"style4\">\\$([\\d.,].+?)<\\/td>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?perfume-worldwide\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Iwantoneofthose.com",
        "scraper": {
            "title": {
                "regex": "<meta property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "\"price\">[\\1-u]+\\&#163;(.+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?iwantoneofthose\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Conrad-uk.com",
        "scraper": {
            "title": {
                "regex": "<a name=\"head_detail\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "produktpreis\">[\\S\\s]*?([\\d\\.]+)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?conrad-uk\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Bhsdirect.co.uk",
        "scraper": {
            "title": {
                "regex": "h1 class=\"VPTitle\">(.+?)<br",
                "js": null
            },
            "price": {
                "regex": "alt='&pound;([\\d.,].+?)'",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(www.)?bhsdirect\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Ukinsight.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "product-total-incvat\">&pound;([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(uk.)?insight\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Northerntooluk.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "Inc VAT<\\/td>[\\1-u]+<td class=\"pricevalue\">&pound;([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?northerntooluk\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Kitchenscience.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "listPrice\" title=\".+?\">&pound;([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?kitchenscience\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Bambinodirect.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)\\s-",
                "js": null
            },
            "price": {
                "regex": "\"versionofferprice\">&pound;([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?bambinodirect\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Laskys.com",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "listPrice\" title=\".+?\">&pound;([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?laskys\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Spieletraeume.de",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?spieletraeume\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Spiele-offensive.de",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var matchEuro = html.match(/b>Preis: <font color=blue>([\\d.,].+?),<span style='font-size: 7pt;'>([\\d.,].+?)<\\/span>/);\n\nif(matchEuro){\nprice = matchEuro[1] + \".\" + matchEuro[2];\ncallback(price);} else {\ncallback('');\n}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?spiele-offensive\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Funtoymall.com",
        "scraper": {
            "title": {
                "regex": "<h1 .+?>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": "itemPrice.*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": "itemShippingCost>\\$([\\d\\.,].+?)<",
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?funtoymall\\.com/.*html",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Perfume.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?perfume\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Allergybegone.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "SALE PRICE:  \\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?allergybegone\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Gameseek.co.uk",
        "scraper": {
            "title": {
                "regex": "<meta property=\"og:title\" content=\"(.+?)\">",
                "js": null
            },
            "price": {
                "regex": "<b class=cost_p>&pound;([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?gameseek\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Thingsremembered.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)</title>",
                "js": null
            },
            "price": {
                "regex": "Price\".*?\\$([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?thingsremembered\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Javari.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1 id=\"productTitle\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "priceBig\">[\\1-u]+\\Â£([\\d,.].+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?javari\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Ebuyer.com",
        "scraper": {
            "title": {
                "regex": "<meta property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "span class=\"now\">.*?<span property=\"v:price\">([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Manufacturer ID: (.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(www.)?ebuyer\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "BHPhotoVideo.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var price = html.match(/cmCreateProductviewTag\\(\".+?\",\".+?\", \"(.+?)\"\\)/); \r\nvar outStock = html.match(/No Longer Available/);\r\nvar discontinued = html.match(/class=\"red questionMark\">Discontinued</);\r\nif (price && !outStock && !discontinued)\r\n{callback(price[1]);}\r\nelse {callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Mfr#[\\1-uFFFF]+?(.+)",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www\\.)?bhphotovideo\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Pixmania.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\| Pixmania UK<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var regex1 = /class=\"prd-price\">Â£Â <span itemprop=\"price\">([\\d,.].+?)</;\r\n                                var regex2 = /class=\"prd-amount\"><strong>Â£Â ([\\d,.].+?)<span/;\r\nvar regex3 = /p;<span itemprop=\"price\">([\\d,.]+?)<\\/spa/;\r\n                                var match = html.match(regex3||regex1||regex2);\r\n                                var promoPrice = html.match(/promo-code-marker-new-price\"> <span class=\"cell\">that'sÂ <span class=\"price\"><span class=\"prd-price\">Â£Â .+?([\\d,.].+?)</);\r\n                                \r\n                                  \r\n                                if (match) {\r\n                                    var price = match[1];\r\n                                    if ((price.indexOf(',') > 0) && (price.indexOf('.') == -1)) {\r\n                                      price = price.replace(',', '');\r\n                                    }\r\n                                    callback(price);\r\n                                  } else if (promoPrice){\r\n                                var promo = promoPrice[1];\r\n                                    if ((promo.indexOf(',') > 0) && (promo.indexOf('.') == -1)) {\r\n                                      promo = promo.replace(',', '');\r\n                                    }\r\n                                    callback(promo);\r\n                                  } else {\r\n                                    callback('');\r\n                                }"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://www\\.pixmania\\.co(\\.uk|m)/uk/uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Equestriancollections.com",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "<div id=\"PriceDesc\"><span class=\"contboldBBig\">\\$*([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?equestriancollections\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Philipmorrisdirect.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<\\/span> &pound;([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?philipmorrisdirect\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Amazon.com",
        "scraper": {
            "title": {
                "regex": "<span id=\"btAsinTitle\"[^>]*>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"priceLarge\">\\$([\\d.,]+)",
                "js": "var match = html.match(/name=\"asin.att\" value=\"([A-Z0-9]{10})\"/);\r\nif (match) {\r\n  var price_url = 'http://www.amazon.com/gp/product/du/map-popover-update.html?a=' + match[1];  \r\n  getHttp(price_url, function(data) {\r\n    match = data.match(/class=\"priceLarge\">\\$([\\d.,]+)/);\r\n    callback(match ? match[1] : '');\r\n  });\r\n} else {\r\n  callback('');\r\n}"
            },
            "pnp": {
                "regex": null,
                "js": "var match = html.match(/<span id=\\\"pricePlusShippingQty\\\">.{0,50}<span class=\"plusShippingText\">(.*?)<\\/span>/i);\r\nif (match) {\r\n  var value = match[1];\r\n  if (value.match(/free/i)) {\r\n    callback('0.0');\r\n    return;\r\n  } else {\r\n    var price_match = value.match(/([\\d\\.,]+)/);\r\n    if  (price_match) {\r\n      var price = price_match[1];\r\n      callback(price);\r\n      return;\r\n    }\r\n  }\r\n} else {\r\n  match = html.match(/(FREE.{0,20}Super Saver Shipping|priceLarge[\\1-\\uFFFF]{4,200}FREE|qualifies for.{1,50}Free Shipping)/i);\r\n  if (match) {\r\n    callback('0.0');\r\n    return;\r\n  }\r\n}\r\ncallback('');"
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "body {\r\n  margin-top: <<0>>px !important;\r\n}",
        "region": "US",
        "regex": "^https?://www\\.amazon\\.com/.+/[A-Z0-9]{10}(?:$|[^0-9A-Z])",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Solidsignal.com",
        "scraper": {
            "title": {
                "regex": "<h1.*?>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "our price.+?\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "size=\"1\">Model:\\s(.+)</font>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?solidsignal\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Halfords.com",
        "scraper": {
            "title": {
                "regex": "<title>Halfords \\| (.+?)<",
                "js": null
            },
            "price": {
                "regex": "<div class=\"hproduct\">[\\s\\S]+<span class=\"price\">.+?([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?halfords\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Number1Direct.com",
        "scraper": {
            "title": {
                "regex": "border=\"0\" style=\"width: 300px\" alt=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "price\" type=\"hidden\" value=\"([\\d,.].+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?number1direct\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Singer22.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": ">(?:Sale )?Price:.+[\\1-u].+\\$([\\d.,].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?singer22\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cclonline.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - \\S+ - CCL Computers",
                "js": null
            },
            "price": {
                "regex": "<div class=\"detailPriceTemplate\">[\\S\\s]{1,200}<p class\\s*=\\s*\"price\"><strong>&pound;<span itemprop=\"price\">([\\d\\.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<strong>CCL Code:</strong> (.+?)<br />",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?cclonline\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "ButterflyPhoto.com",
        "scraper": {
            "title": {
                "regex": "<title>Butterfly Photo - (.+?)\\<",
                "js": null
            },
            "price": {
                "regex": "Our Price:[\\1-\\uFFFF]+?\\$([\\d\\.]+?)\\s*<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "MFG Part #: (.+?)\\&nbsp",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?butterflyphoto\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Instawares.com",
        "scraper": {
            "title": {
                "regex": "<title>[\\1-uF]+?(.+?) Instawares",
                "js": null
            },
            "price": {
                "regex": "<meta name=\"price\" content=\"\\$(.+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "wg_upc = .(\\d+)",
                "js": null
            },
            "mpn": {
                "regex": "Manufacturer ID[\\0-\\uFFFF]{1,100}?<td>(.+?)<\\/td>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?instawares\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Unbeatablesale.com",
        "scraper": {
            "title": {
                "regex": "title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"?itemPrice\"?>\\$([\\d.,]+)<",
                "js": null
            },
            "pnp": {
                "regex": "class=\"?shippingCost1\"?>\\$([\\d.,]+)<",
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?unbeatablesale\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Beallsflorida.com",
        "scraper": {
            "title": {
                "regex": "<h1.*?>(.+?)<",
                "js": null
            },
            "price": {
                "regex": " class=\"offer-price\">[\\S\\s]+?\\$([\\d,.]+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?beallsflorida\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Electricshopping.com",
        "scraper": {
            "title": {
                "regex": "<title>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": "<!--kommt hier raus -->[\\1-u]+?<span class=\"price\">\\Â£([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?electricshopping\\.com/.",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Watchmad.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "id=\"ctl00_ContentPlaceHolder1_lblpricespecial\">\\Â£([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?watchmad\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Outdoorfurnituregallery.com",
        "scraper": {
            "title": {
                "regex": "h1 class=\"heading\">(.+?)\\| ",
                "js": null
            },
            "price": {
                "regex": "our price.+?\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?outdoorfurnituregallery\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Sobongo.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var salePrice = html.match(/Sale Price:[^\\$]*?\\$\\s?([\\d.,]+)/);\nvar normalPrice = html.match(/Our Price:[^\\$]*?\\$\\s?([\\d.,]+)/);\n\nif(salePrice){callback(salePrice[1]);}\nelse{callback(normalPrice[1]);}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?sobongo\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "TescoEntertainment.com",
        "scraper": {
            "title": {
                "regex": "property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "\"price\">\\Â£([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "property=\"og:upc\" content=\"(.+?)\"",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(www\\.)?tescoentertainment\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Direct.tesco.com",
        "scraper": {
            "title": {
                "regex": "<h1.*?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var price = html.match(/<li class=\"current-price\">\\s*Â£<span class=\"pounds\">(\\d+)<\\/span><span class=\"pence\">.(\\d+)</)\nif (price) {\n  callback(parseFloat(price[1] + '.' + price[2]));\n} else {\n  callback('');\n}\n"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "og:upc\" content=\"(.+?)\"",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?tesco\\.com/direct",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "TheHut.com",
        "scraper": {
            "title": {
                "regex": "og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "itemprop=\"price\" class=\"price\">[\\s\\S]+?&#163;([\\d\\.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<th>ISBN+?[\\S\\s]+?.+<li>(.+?)<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www|m)?\\.?thehut\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Moviemars.com",
        "scraper": {
            "title": {
                "regex": "h1 itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Our price <span itemprop=\"price\">\\$([\\d,.].+?)</",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "UPC:.*?(\\d+)",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?moviemars\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Altrec.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - FREE SHIPPING",
                "js": null
            },
            "price": {
                "regex": "\"sku_price\":([\\d,.]+?),",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?altrec\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "AppliancesOnline.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?)\\s*<\\/title>",
                "js": null
            },
            "price": {
                "regex": "ID=\"productInfoArea\" class=\"productInfoArea\" mainCategory=\".+?\" productCode=\".+?\">[\\S\\s]+?<div id=\"buyArea\">[\\S\\s]+?<span name='spnPrice' class=\"price\">.*?([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "ProductCode=\"(.+?)\"",
                "js": null
            },
            "brand": {
                "regex": "<span property='v:brand'>(.+?)</span>",
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?appliancesonline\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Chefcentral.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?chefcentral\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "KenmarWatches.com",
        "scraper": {
            "title": {
                "regex": "<h1.*?>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": "Price:</span><span style=\".+?;\"> \\$(.+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<strong>Product Code:<\\/strong>\\s*(.+)<?",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?kenmarwatches\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Ritzcamera.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - RitzCamera",
                "js": null
            },
            "price": {
                "regex": "productPrice\"><div id=\"pri.+?\" style=\"font-weight: bold;\">\\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "id=\"productPartNumbers\"[\\1-\\uFFFF]{1,100}Manufacturer #(.+?)<br",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?ritzcamera\\.com/product/",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "BoatersWorld.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\s-",
                "js": null
            },
            "price": {
                "regex": "\"productPrice\"><div id=\"pric.+?\" style=\"font-weight: bold;\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "og:upc\" content=\"(\\d+)\"",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?boatersworld\\.com/product/",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Executiveessentials.com",
        "scraper": {
            "title": {
                "regex": "<h2 id=\"item_desc\">[\\1-u]+?(\\w.+)[\\1-u]+<\\/h2>",
                "js": null
            },
            "price": {
                "regex": "Price\".*?\\$([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?executiveessentials\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Teilesuche24.de",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?teilesuche24\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cardstore.com",
        "scraper": {
            "title": {
                "regex": "7875x3875_flat_shadow.jpg\" alt=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "id=\"card_total_price\">[\\S\\s]+?\\$([\\d,.]+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?cardstore\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Dazadi.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)-",
                "js": null
            },
            "price": {
                "regex": "Our Price: \\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?dazadi\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Wowhd.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "productpage_price\">[\\1-\\uFFFF]*?&pound;(.+?) <",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?wowhd\\.co.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Swiminn.com",
        "scraper": {
            "title": {
                "regex": "<h1 .+?>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?Swiminn\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Fireforless.com",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "price\">\\$([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?fireforless\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Pugster.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\| Pugster.com",
                "js": null
            },
            "price": {
                "regex": "Price\".*?\\$([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?pugster\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Costumecraze.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price\">\\$([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www|m)?\\.?costumecraze\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "AppliancesDirect.co.uk",
        "scraper": {
            "title": {
                "regex": "<span itemprop=\"name\">(.*)<\\/span>[\\s]+<span",
                "js": null
            },
            "price": {
                "regex": "=\"price\" content=\"&pound;([\\d,.]+?)\" \\/>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "mfpn=(.+?)\"",
                "js": null
            },
            "brand": {
                "regex": "<li>Manufacturer : (.+?)<\\/li>",
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?appliancesdirect\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Skymall.com",
        "scraper": {
            "title": {
                "regex": "var shpn='([\\w\\s]*)';",
                "js": null
            },
            "price": {
                "regex": "var shpp='\\$([\\d\\.]+)';",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?skymall\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Newegg.com",
        "scraper": {
            "title": {
                "regex": "title>Newegg.com - (.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var match = html.match(/<link rel=\"canonical\" href=\".*\\?Item=(.+?)\"/);\nif (match) {\n  var mobileUrl = 'http://m.newegg.com/Product?itemNumber=' + match[1];\n  getHttp(mobileUrl, function(data) {\n    var dollars = data.match(/<div class=\"FinalPrice\">\\s*<div>\\s*<strong>\\$([\\d,]+)</);\n    if (dollars) {\n      var cents = data.match(/<div class=\"FinalPrice\">\\s*<div>\\s*<strong>.{1,100}>(\\d+)<\\/span>/) || [];\n      callback(dollars[1] + '.' + (cents[1] || 0));\n    } else {\n      callback('');\n    }\n  });\n} else {\n  callback('');\n}\n"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www\\.)?newegg\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Zalando.co.uk",
        "scraper": {
            "title": {
                "regex": "<meta property=\"og:title\" content=\"(.*) - Zalando.co.uk\" />",
                "js": null
            },
            "price": {
                "regex": "<span itemprop=\"price\">[\\s]*Â£([\\d.,]+)</span",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?zalando\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Mediaversand.de",
        "scraper": {
            "title": {
                "regex": "<h1.*?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "load\\(\"\\/handys\\/santander\\-raten\\/([\\d\\.]+)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "DE",
        "regex": "^https?://(www.)?mediaversand\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Musiciansfriend.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\s*\\|",
                "js": null
            },
            "price": {
                "regex": "<var class=\"hidden price\">([\\d\\.]+)<\\/var>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": "<span class=\"brand\">(.+?)<\\/span>",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?musiciansfriend\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Ravensburger.de",
        "scraper": {
            "title": {
                "regex": "<title>(.*?)\\s\\|",
                "js": null
            },
            "price": {
                "regex": "webtrekk.productCost = \"([\\d.,].+?)\";",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?ravensburger\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Stuff4crossstitch.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?stuff4crossstitch\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Etundra.com",
        "scraper": {
            "title": {
                "regex": "ctlProductInformation_lblProductName\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "ctlProductInformation_lblTundraPrice\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?etundra\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Mintprice.com",
        "scraper": {
            "title": {
                "regex": "<h1>([\\1-\\uFFFF]+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?mintprice\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Thetwistergroup.com",
        "scraper": {
            "title": {
                "regex": "<meta name=\"Description\" content=\"([^\"]+)\"",
                "js": null
            },
            "price": {
                "regex": "(?i-mx:price[^\\$]*?\\$([\\d.,]+))",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?thetwistergroup\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Leisurepro.com",
        "scraper": {
            "title": {
                "regex": "\"og:title\" content=\"(.+?)\"/>",
                "js": null
            },
            "price": {
                "regex": "ConfigurationCustomerMapPrices=\"([\\d,.]+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?leisurepro\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Petcarerx.com",
        "scraper": {
            "title": {
                "regex": "\"og:title\" content=\"(.+?)\"/>",
                "js": null
            },
            "price": {
                "regex": "price\"[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?petcarerx\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Motivators.com",
        "scraper": {
            "title": {
                "regex": "<meta name=\"Description\" content=\"([^\"]+)\"",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?motivators\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "7dayshop.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - 7Day",
                "js": null
            },
            "price": {
                "regex": ".jpg&amp;price=([\\d,.]+?)00\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?7dayshop\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "4wd.com",
        "scraper": {
            "title": {
                "regex": "meta Property=\"og:Title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?4wd\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Ubid.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?ubid\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Jcwhitney.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?jcwhitney\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "911healthshop.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Our Price:[\\1-\\uFFFF]+?\\$([\\d\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?911healthshop\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Officesupersavers.com",
        "scraper": {
            "title": {
                "regex": "<title>Discount (.+?)<",
                "js": null
            },
            "price": {
                "regex": "vp_price\"><div class=\"vpPriceLab\">Your Price:<\\/div><span class=\".+?\">\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?officesupersavers\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Studica.com",
        "scraper": {
            "title": {
                "regex": "span class=\"active\" itemprop =\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "itemprop=\"price\" style=\"display:none;\">([\\d,\\.]+?) <",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?studica\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Discountwatchstore.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<div id=\"price\".*>\\$([\\d\\.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?discountwatchstore\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Entirelypets.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<span itemprop=\"price\">\\$([\\d\\.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?entirelypets\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Lnt.com",
        "scraper": {
            "title": {
                "regex": "<title>(.*?)<\\/title>",
                "js": null
            },
            "price": {
                "regex": "Price:<\\/span><span class=\"dollar_sign\">\\$<\\/span><span itemprop=\"offers\" itemscope itemtype=\".+?\"><span itemprop=\"price\">([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?lnt\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Intheholegolf.com",
        "scraper": {
            "title": {
                "regex": "product_title\">[\\S\\s]+?<h1>[\\S\\s]+?<span>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?intheholegolf\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Kimmyshop.com",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "\"productPrice\":([\\d,.]+?),",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?kimmyshop\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Ebooks.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "align=\"center\" class=\"price\">.*?([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "<th>ISBN</th>[\\1-u]+?<td>(.+?)</td>",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?ebooks\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cameraworld.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "productPrice\"><div id=\"price.+?\" style=\"font-weight: bold;\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "id=\"productPartNumbers\"[\\1-\\uFFFF]{1,100}Manufacturer # (.+?)<br",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?cameraworld\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Zazzle.com",
        "scraper": {
            "title": {
                "regex": "h1 class=\"OAb-productTitle\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price.*?\\$([\\d.,]+)\\s*?.*?<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?zazzle\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Wolfcamera.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "\"productPrice\"><div id=\"pri.+?\" style=\"font-weight: bold;\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "id=\"productPartNumbers\"[\\1-\\uFFFF]{1,100}Manufacturer #(.+?)<br",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?wolfcamera\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "TigerDirect.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var price = html.match(/\"priceFinal\"><span class=\"salePrice\"><sup>\\$<\\/sup>([\\d]+?)</);\r\n var pence = html.match(/priceFinal\"><span class=\"salePrice\"><sup>\\$<\\/sup>.+?<sup><span class=\"priceDecimalMark\">\\.<\\/span>([\\d]+?)<span/);\r\nif(pence && pence){\r\ncallback(price[1] + '.' + pence[1]);}\r\nelse if (price && !pence)\r\n\t{callback(price[1]);}\r\nelse{callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www|m)?\\.?tigerdirect\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "101phones.com",
        "scraper": {
            "title": {
                "regex": "YWATracker.setSKU\\('(.+?)'\\);",
                "js": null
            },
            "price": {
                "regex": "name=\"price\" content=\"([\\d,.]+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?101phones\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "AbesOfMaine.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)</title>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var match = html.match(/vsr_price= '\\$(.+?)';/i) || html.match(/<p class=\"price\">\\$(.+?)</i);\r\ncallback(match ? match[1] : '')"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Part #: ([\\w]+)",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "#menu0 {  \r\n  padding-top: <<4>>px !important;\r\n}",
        "region": "US",
        "regex": "^https?://(www\\.)?abesofmaine\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "SendIt.com",
        "scraper": {
            "title": {
                "regex": "<title>\\s*([^<\\n]+)",
                "js": null
            },
            "price": {
                "regex": " itemprop=\"price\">[\\S\\s]+?&#163;([\\d,.]+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": "callback(1.99);"
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www\\.)?sendit\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Misco.de",
        "scraper": {
            "title": {
                "regex": "class=\"seo\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "span class=\"size20 b\">([\\d,.]+?) &",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?misco\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Adorama.com",
        "scraper": {
            "title": {
                "regex": "h1 class=\"productName section\" itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "",
                "js": "var hidePrice = html.match(/ id=\"FinalPrice\" type=\"hidden\" value=\"([\\d,\\.]+?)\"/);\r\n                                var price = html.match(/\\\"price\\\">([\\d,.].+?)</);\r\n                                                                                                                                                        var missing = html.match(/sorry, this item is no longer available./);\r\n                                \r\n                                \r\n                                 if(hidePrice && !missing ){callback(hidePrice[1])}else if(price){callback(price[1])}else {callback('');}"
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "\"identifier\" content=\"sku:(.+?)\"",
                "js": ""
            },
            "mpn": {
                "regex": ">MFR: (.+?)<",
                "js": ""
            },
            "brand": {
                "regex": "itemprop=\"brand\" content=\".+? alt=\"(.+?)\"",
                "js": null
            },
            "js": ""
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?adorama\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Beautybar.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) -",
                "js": null
            },
            "price": {
                "regex": "<span class='singlePrice'>\\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?beautybar\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Nothingbutsoftware.com",
        "scraper": {
            "title": {
                "regex": "<div class=\"product_header2\">[\\S\\s]+?([a-zA-Z\\d].+)",
                "js": null
            },
            "price": {
                "regex": "your price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "UPC:.*?(\\d+)",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?nothingbutsoftware\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Everythingfurniture.com",
        "scraper": {
            "title": {
                "regex": "<h1 .+?>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": "itemprop=\"price\">\\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?everythingfurniture\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Walgreens.com",
        "scraper": {
            "title": {
                "regex": "h1 itemprop=\"name\" style=\"clear:both;\">[\\S\\s]+?(.+?)<",
                "js": null
            },
            "price": {
                "regex": "id=\"vpdSinglePrice\">\\$([\\d,\\.]+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?walgreens\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Fabial.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+)- fabial.de</title>",
                "js": null
            },
            "price": {
                "regex": "\"proInfoPrice\">[\\s]*([\\d.,]+)[\\s]*EUR",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?fabial\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Oneclickpharmacy.co.uk",
        "scraper": {
            "title": {
                "regex": "\"smallTextk\">(.*)</h2>",
                "js": null
            },
            "price": {
                "regex": "<font class=\"priceinfomerch\">[\\W]*Â£([\\d.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?oneclickpharmacy\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Brickhousesecurity.com",
        "scraper": {
            "title": {
                "regex": "Never scraper wikipedia (.+?) ever",
                "js": null
            },
            "price": {
                "regex": ">Sale <\\/span><span class=pricesale>\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(en.)?wikipedia\\.org",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Caseking.de",
        "scraper": {
            "title": {
                "regex": "<title>.*&raquo;\\s*(.*)<",
                "js": null
            },
            "price": {
                "regex": "<span itemprop=\"price\" content=\"[\\d\\.]+\">\\s*([\\d\\.,]+)\\s*EUR<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "<div class=\"pfb_model\">.*<b>(.*?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?caseking\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "1928.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+)[\\S\\s]+<\\/title>",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?1928\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Wbshop.com",
        "scraper": {
            "title": {
                "regex": "addthis:title=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "\"price\">Price: <\\/span>\\$([\\d,.]+?)\\s",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?wbshop\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cduniverse.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "span itemprop=\"price\">([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?cduniverse\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Herbergers.com",
        "scraper": {
            "title": {
                "regex": "\"hidden\" id=\"prodName\" value=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "\"hidden\" id=\"prodPrice\" value=\"\\$([\\d,.]+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?herbergers\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Dillards.com",
        "scraper": {
            "title": {
                "regex": "\"title\" itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<div id=\"price\" style=\"display:none;\">[\\S\\s]+?\\$([\\d,\\.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?dillards\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "DeepDiscount.com",
        "scraper": {
            "title": {
                "regex": "(?:Product|Friend):\\s?(.*?)\"",
                "js": null
            },
            "price": {
                "regex": "g>Price:<\\/strong> <span>\\$([\\d,.]+?)<\\/spa",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "(?:UPC|ISBN):.*?(\\d+)<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?deepdiscount\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Beauty.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?beauty\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Beautybridge.com",
        "scraper": {
            "title": {
                "regex": "property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "<div class=\"itemPrice\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?beautybridge\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Theclassyhome.com",
        "scraper": {
            "title": {
                "regex": "h1 class=\"page_title\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Deal Price: <\\/span>[\\S\\s]+?<span style=\"font-size:15px; font-weight:bold;\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?theclassyhome\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Uktoolcentre.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"price\">&pound;([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?uktoolcentre\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Soccergarage.com",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"pr_title\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price\">([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?soccergarage\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Buydig.com",
        "scraper": {
            "title": {
                "regex": "name=\"keywords\" content=\"BuyDig.com - (.+?)\"",
                "js": null
            },
            "price": {
                "regex": "<span class='price'.*?>([^<]+?)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?buydig\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Shopcallawaygolf.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "price[^\\$]*?\\$([\\d.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(shop.)?callawaygolf\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Packyourbagstravelstore.com",
        "scraper": {
            "title": {
                "regex": "id=\"product-name-heading\"><h2>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "price-text\" class=\"price\">.+? \\Â£([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?packyourbagstravelstore\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Naturalizer.com",
        "scraper": {
            "title": {
                "regex": "BrandAndPrice1_lblDisplayName\" class=\"PD_Style\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "e4xprice_usd=\"(.+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?naturalizer\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Debenhamsplus.com",
        "scraper": {
            "title": {
                "regex": "class=\"versionHeader\">[\\S\\s]+?<h1>(.+?)<span",
                "js": null
            },
            "price": {
                "regex": "<img.+?pound;(.+?)'",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?debenhamsplus\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Techforless.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "",
                "js": "var referb = html.match(/position: relative;\">.*?Refurbished/);\r\nvar price = html.match(/TFLPrice: \"([\\d,.]+?)\"/);\r\nif(price && !referb){\r\ncallback(price[1]);} \r\nelse {callback('');}"
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "wg_upc = .(\\d+)",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?techforless\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Partypieces.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<h1>.+?<.h1>[\\S\\s]+?\"price\">.([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?partypieces\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Lookmantastic.com",
        "scraper": {
            "title": {
                "regex": "h1 itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "\"price-value\" itemprop=\"price\">&#163;([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?lookmantastic\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Everythingofficefurniture.com",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "<td class=\"pright pred\">\\$([\\d,.]+?)<\\/td>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?everythingofficefurniture\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Finishline.com",
        "scraper": {
            "title": {
                "regex": "emprop=\"name\" id=\"title\">([a-zA-Z\\d].+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": "ProductDetail.addPrice\\({index : 0, price : '\\$([\\d,\\.]+?)'",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?finishline\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Beachcamera.com",
        "scraper": {
            "title": {
                "regex": "ntent=\"BeachCamera\\.com - ([a-zA-Z\\d].+?)\" \\/>",
                "js": null
            },
            "price": {
                "regex": "<span class='price'.*?>([^<]+?)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "id=\"lblCatalog\">(.+?)<",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?beachcamera\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Flirtcatalog.com",
        "scraper": {
            "title": {
                "regex": "h1 class=\"productDetailHeading\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "aSKUUnitCost\\[1\\]\\[1\\]='\\$([\\d,.]+?)';",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?flirtcatalog\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Merlincycles.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "only GBP ([\\d,.]+?) from Online Bike Shop Merlin Cycles",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?merlincycles\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Boohoo.com",
        "scraper": {
            "title": {
                "regex": "meta Property=\"og:Title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "price\">([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(www.)?boohoo\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Thewatchhut.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"title\" itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var pounds = html.match(/\"current\" itemprop=\"price\">&pound;([\\d,.]+?)</);\nvar pence = html.match(/\"current\" itemprop=\"price\">&pound;.+?<sub>(.+?)</);\n\nif(pounds && pence)\n{ \nvar price = pounds[1].toString() + pence[1].toString();\n\n\ncallback(price)}\nelse {\ncallback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?thewatchhut\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Moviemail.com",
        "scraper": {
            "title": {
                "regex": "<h1.+?>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"pricebig\">&pound;([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(www.)?moviemail\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Fish.com",
        "scraper": {
            "title": {
                "regex": "h2 itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "wPrice\" itemprop=\"price\">([\\d,.]+?)<\\/spa",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?fish\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "991.com",
        "scraper": {
            "title": {
                "regex": "<title>\\s*(.*?)\\s*<",
                "js": null
            },
            "price": {
                "regex": "<!--.*?([\\d\\.]+) -->",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?991\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Escentual.com",
        "scraper": {
            "title": {
                "regex": "<h1>([\\S\\s]+?)<",
                "js": null
            },
            "price": {
                "regex": "<\\/h1>[\\S\\s]+?<\\/div>[\\S\\s]+?<div>[\\S\\s]+?.+?pound;([\\d,\\.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?escentual\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Wwstereo.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)</",
                "js": null
            },
            "price": {
                "regex": "class=\"cart-wrapper d-our-price\">[\\S\\s]+?Our Price: \\$([\\d,.]+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?wwstereo\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Home-decorating-co.com",
        "scraper": {
            "title": {
                "regex": "h1 itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": " itemprop=\"price\" content=\"\\$([\\d,.]+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www)?.home-decorating-co\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Tom-tailor.de",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "DE",
        "regex": "^https?://(www.)?tom-tailor\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Interstatemusic.com",
        "scraper": {
            "title": {
                "regex": null,
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?interstatemusic\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Moosejaw.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)at Moosejaw",
                "js": null
            },
            "price": {
                "regex": "<span itemprop=\"lowPrice\">\\$(.+?)</span",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www\\.)?moosejaw\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Viosoftware.com",
        "scraper": {
            "title": {
                "regex": "<H1 class=headline><span itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "itemprop=\"price\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?viosoftware\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Urbansurfer.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) |",
                "js": null
            },
            "price": {
                "regex": "<span id=\"theprice\">\\u00A3([\\d,.]+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?urbansurfer\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Officeking.com",
        "scraper": {
            "title": {
                "regex": "<h1>([\\S\\s]+?)<",
                "js": null
            },
            "price": {
                "regex": "\"price\">[\\S\\s]+?<span>Price:<\\/span>[\\S\\s]+?<span class=\"price\">Â£([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?officeking\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cookieskids.com",
        "scraper": {
            "title": {
                "regex": "prodisplayTITLE\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var sale = html.match(/lass=\"prodisplaySALEAmt\">\\$([\\d,.]+?)</);\n                                var  price = html.match(/price[^\\$]*?\\$([\\d.,]+)/);\n                                \n                                if(sale){callback(sale[1]);}else if(price){callback(price[1]);}else{callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?cookieskids\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Amatteroffax.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Your Price: \\$([\\d,.].+?)\\b",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?amatteroffax\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Pcconnection.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)</",
                "js": null
            },
            "price": {
                "regex": "id=\"ctl00_Content_ucOrderInfo_price\"[\\s\\S]*?>\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?pcconnection\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Novatech.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "product-details-page-rightcolumn-price-redprice\">&pound;([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?novatech\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Elder-beerman.com",
        "scraper": {
            "title": {
                "regex": "h1 title=\".+?[>?](.+?)<\\/h1>",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var price = html.match(/class=\"price\">Price: \\$([\\d,.]+?)</);\nvar sale =  html.match(/id=\"prodSalePrice\" value=\"\\$([\\d,.]+?)\"/);\n\nif(price){callback(price[1]);}else if(sale){callback(sale[1]);}else{callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?elder-beerman\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Eyesave.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "<span class=\"c_price_ns_b\">[\\S\\s]+?([\\d,.]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?eyesave\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Pet-supermarket.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "<span class=\"OurPrice Red\"> \\Â£([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?pet-supermarket\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Famousfootwear.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)\\s?FamousFootwear.com",
                "js": null
            },
            "price": {
                "regex": "\"red price\">[\\S\\s]+?\\$([\\d.,].+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?famousfootwear\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Houseofbrides.com",
        "scraper": {
            "title": {
                "regex": "<span class=\"productTitle\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "\"productSalePrice\">[\\1-u]+?\\$([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?houseofbrides\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Uniformcity.com",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "class=\"productSalePrice effectivePrice\">\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?uniformcity\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Gap.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\| Gap<\\/title>",
                "js": null
            },
            "price": {
                "regex": "\\$([\\d.,]+)\\s<br",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?gap\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Katom.com",
        "scraper": {
            "title": {
                "regex": "h1 id=\"top_product_info_block_product_title_text\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "\"top_product_info_block_product_data_new_low_price\">\\$([\\d,.\\s]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Manufacturer Part Number \\(MPN\\):<\\/span>\\s?(.+?)<",
                "js": null
            },
            "brand": {
                "regex": "Manufacturer:<\\/span>.*?>(.+?)<",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?katom\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Modainpelle.com",
        "scraper": {
            "title": {
                "regex": "ctl00_cntMainContent_Itemdetails1_lblStyle\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Itemdetails1_lblSalePrice\" style=\"color:Red;\">  Now .*?([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?modainpelle\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Office.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "http://finance.yahoo.com/currency/convert\\?amt=([\\d,.].+?)\\&",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?office\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Dvdgold.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1>([\\S\\s]+?)<",
                "js": null
            },
            "price": {
                "regex": "<span id=\"our_price_display\">.*?([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?dvdgold\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Euroffice.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"itemName\">[\\S\\s]+?(.+)",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var price = html.match(/<span id=\"m_c_ctl00_lblPrice\">.*?([\\d,\\.]+?)</);\r\nif(price){\r\n  var vat = parseFloat(price[1]) * 0.2 ;\r\n  var pricePlusVat = parseFloat(price[1]) + vat;\r\n  callback(pricePlusVat.toString());}\r\n  else {callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?euroffice\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "1stoplighting.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)</",
                "js": null
            },
            "price": {
                "regex": "<span style='color:black'>\\$([\\d,\\.]+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?1stoplighting\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "3balls.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": "<span>\\$([\\d,.]+?)<\\/spa",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?3balls\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Sunnysports.com",
        "scraper": {
            "title": {
                "regex": "<h1 .+?>(.+?)<\\/h1",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var price = html.match(/Our Price:[^\\$]*?\\$\\s?([\\d.,]+)/);\n                                                                                                                          var sale_price = html.match(/ConfigurationMapPrices=\"([\\d,.]+?)\"/);\n                                                                                                                          \n                                                                                                                          if (sale_price){\n                                                                                                                          var cost = sale_price[1];\n                                                                                                                          callback(cost);\n                                                                                                                          }else{\n                                                                                                                          price = price[1];\n                                                                                                                          callback(price);\n                                                                                                                    }"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?sunnysports\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Crutchfield.com",
        "scraper": {
            "title": {
                "regex": "<span itemprop=\"name\">(.+?)<\\/span><\\/h1>",
                "js": null
            },
            "price": {
                "regex": "Your price <span class=\"finalPrice\" >\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Item #(.+)",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?crutchfield\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Lightingshowroom.com",
        "scraper": {
            "title": {
                "regex": "<h1><span id=qs-name itemprop=name>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "Our Price: <\\/span><span class=prAmount>\\$([\\d,.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?lightingshowroom\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Whatabeautifullife.com",
        "scraper": {
            "title": {
                "regex": "<h2><a href=\"#\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "PRICE:<\\/em>[\\S\\s]+?<strong class=\"price_.+?\">\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?whatabeautifullife\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Kiddies-kingdom.com",
        "scraper": {
            "title": {
                "regex": "<title>([^<]+?)<\\/",
                "js": null
            },
            "price": {
                "regex": "id=\"our_price_display\">\\Â£([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?kiddies-kingdom\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Gaiam.com",
        "scraper": {
            "title": {
                "regex": "h1 class=\"productname\"><!-- Product Name Display -->(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var price = html.match(/\"salesprice\" id=\"salespricediv\">[\\S\\s]+?\\$([\\d,\\.]+)/);\r\nvar sale = html.match(/class=\"messagesalebig\">SALE <\\/span><span class=\"pricesalebig\">\\$([\\d,.]+?)</);\r\nif(price){callback(price[1]);}else{callback(sale[1]);}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?gaiam\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Thekitchenappliancestore.co.uk",
        "scraper": {
            "title": {
                "regex": "h1 style=\"margin:4px;padding:8px;border:0px;background-color:#dddcde;font-weight:bold;color:#993399;font-size:16px;\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "align=\"center\" style=\"width:220px;color:#993399;font-size:26px;\">\r\n<b>.*?([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(www.)?thekitchenappliancestore\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Livingroomwarehouse.com",
        "scraper": {
            "title": {
                "regex": "<h2><span itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "itemprop=\"price\" content=\"([\\d,\\.]+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?livingroomwarehouse\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Buyz.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) - Buyz.com",
                "js": null
            },
            "price": {
                "regex": "onclick=\"showConvertedCurrency\\(.+?,([\\d,.]+?)\\)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?buyz\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Zumaoffice.com",
        "scraper": {
            "title": {
                "regex": "\"ctl00_MainContentHolder_lblName\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "productpropertylabel sitepricelabel\">Your Price</span><span id=\"Anthem_ctl00_MainContentHolder_lblSitePrice__\"><span id=\"ctl00_MainContentHolder_lblSitePrice\" class=\"siteprice\">\\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?zumaoffice\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Officestationery.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1 itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var matchedPrice = html.match(/<div class=\"excVatPrice displayPrice\">.*?([\\d,\\.]+?)</);\r\n                                                        \r\n              if(matchedPrice){\r\n                   var price = parseFloat(matchedPrice[1]);\r\n                \r\n  \r\n                   var vat = price / 100 * 20;\r\n                   var priceIncVat = price + vat;\r\n                   var fullPrice = priceIncVat.toString();\r\n                   callback(fullPrice);\r\n              }else{\r\n                    callback('');\r\n              }"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?officestationery\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Zoostores.com",
        "scraper": {
            "title": {
                "regex": "<li class=\"product\">.*\\s*<strong>(.*)</strong>.*\\s*</li>",
                "js": null
            },
            "price": {
                "regex": "class=\"price\">[\\S\\s]+?\\$([\\d\\.,].+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?(chimeneas.)?zoostores\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Blue-tomato.com",
        "scraper": {
            "title": {
                "regex": "h1 itemprop=\"name\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "itemprop=\"price\">([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?blue-tomato\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Amazingsocks.com",
        "scraper": {
            "title": {
                "regex": "<h1 itemprop=\"name\">(.+?)</h1>",
                "js": null
            },
            "price": {
                "regex": "our price.+?\\$(.+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?amazingsocks\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Adultshop.de",
        "scraper": {
            "title": {
                "regex": "<h1>\\s*(.+?)\\s*</h1>",
                "js": null
            },
            "price": {
                "regex": "<div class=\"prod-price\">\\s*?EUR ([\\d\\,\\.]+)\\s*?<\\/div>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": "callback(1.95);"
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?adultshop\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Athletagap.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)\\|",
                "js": null
            },
            "price": {
                "regex": "div id=\"tabWindow\">[\\S\\s]{1,200}<noscript>[\\S\\s]*?\\$([\\d\\.,]+)",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(athleta.)?gap\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Cengagebrain.co.uk",
        "scraper": {
            "title": {
                "regex": "<h1 id=\"titleHeader\".*?>\\s*(.*?)\\s*<",
                "js": null
            },
            "price": {
                "regex": "<span class=\"label_price\">.*?([\\d,.]+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?cengagebrain\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Eshopmexx.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<\\/title",
                "js": null
            },
            "price": {
                "regex": " class=\"price\">([\\d,.].+?) &#8364;<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?eshopmexx\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Hughesdirect.co.uk",
        "scraper": {
            "title": {
                "regex": "product-stock\"><h2>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "f-left\">Now <span>&pound;([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?hughesdirect\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Google.de",
        "scraper": {
            "title": {
                "regex": "",
                "js": null
            },
            "price": {
                "regex": "",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": "if (html.match(/igoogle_gadget_loader/i)) {\r\n    callback({});\r\n} else {\r\n  var res = {};\r\n  res.asin = scrapeField(html, \"amazon\\.de.{0,100}/dp/([0-9A-Z]{10})\");\r\n  var shopping_results_present = html.match(/(Shopping-Ergebnisse (fÃ¼r|von) .{2,6} (neu|gebraucht))/i);\r\n  var title = unescape(scrapeField(html, \\\"q=(.+?)&\\\").replace(/\\\\+/g, ' '));\r\n  if (shopping_results_present && res.asin == '') \r\n    res.product_query = title;\r\n  if (res.asin || res.product_query) \r\n    res.title = title;\r\n  callback(res);\r\n}"
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www\\.)?google\\.de(?!.*tbm=isch)",
        "use_inner_html": true,
        "category": "search_engine"
    }, {
        "name": "Bing.com",
        "scraper": {
            "title": {
                "regex": "",
                "js": null
            },
            "price": {
                "regex": "",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": "var res = {};\r\nres.region = scrapeField(html, '<span class=\\\"mktInd\\\"><a[^>]+>([^<]+)</a>') == 'United Kingdom' ? 'uk' : 'us';\r\nres.asin = scrapeField(html, 'amazon(?:\\\\.com|\\\\.co\\\\.uk)/[^/]{2,100}/dp/([a-z0-9]{10})');                      \r\nvar shopping_results_present = html.match(/<h4 class=\\\"sc_ih1\\\"><strong>Price:<\\\\/strong><\\\\/h4>/i);\r\nvar title = scrapeField(html, '<title>(.+?) - Bing</title>');\r\nif (shopping_results_present && !res.asin)\r\n    res.product_query = title;\r\nif (res.asin || res.product_query)\r\n    res.title = title;\r\ncallback(res);\r\n"
        },
        "style_override": "#sw_im { \n  top: <<0>>px !important;\n}\nbody {\n  background-position: 0px <<-76>>px !important;\n}\n",
        "region": "US",
        "regex": "^http://(www\\.)?bing\\.com/search",
        "use_inner_html": false,
        "category": "search_engine"
    }, {
        "name": "DvdPlanet.com",
        "scraper": {
            "title": {
                "regex": "<h1 class=\"clr-primary\">(.+?)<",
                "js": null
            },
            "price": {
                "regex": "d=\"cphBody_m_NotifyPriceDrop_lblTargetPrice\">Current Price: \\$([\\d,.]+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "id=\"lblUpc\">(.+?)<",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www\\.)?dvdplanet\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Ftd.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": " window.document.zipform.product_price.value='([\\d,\\.]+?)'",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?ftd\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Dabs.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\(",
                "js": null
            },
            "price": {
                "regex": "\\/select>[\\S\\s]+?<span class=\"lprice\">&#163;([\\d,.].+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Mfr#: <h3>(.+?)<\\/h3>",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(www\\.)?dabs\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "MacMall.com",
        "scraper": {
            "title": {
                "regex": "<title>MacMall . (.+?)<",
                "js": null
            },
            "price": {
                "regex": "for \\$([\\d,.].+?) at macmall.com",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "UPC:</td>[\\1-\\uFFFF]+?>(.+?)</td>",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": "var match = html.match(/<div id=\"specification\" class=\"specification\">[\\1-\\uFFFF]+?<span class=\"cons\" >(.+?)<\\/span>/) || html.match(/Mfr Part#:<\\/td>\\s*\\r?\\n.+?>(.+?)<\\/td>/);\n                              callback(match ? match[1] : '');"
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www|m)?\\.?macmall\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Nordstrom.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\| Nordstrom",
                "js": null
            },
            "price": {
                "regex": "class=\"price regular\" tabindex=\"0\">\\$([\\d,\\.]+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(shop.)?nordstrom\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Sears.com",
        "scraper": {
            "title": {
                "regex": "property=\"gr:name\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "input type=\"hidden\" value=\"([\\d,\\.]+?)\" id=\"numPrdSalePrice\"",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "Model#[\\1-\\uFFFF]+?-->\\s*([\\1-\\uFFFF]+?)\\s*<!",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www|m)\\.sears\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Cuisinartwebstore.com",
        "scraper": {
            "title": {
                "regex": "<title>Cuisinart Webstore (.*?)<\\/title>",
                "js": null
            },
            "price": {
                "regex": "<div id=\"prod_price\">\\s*\\$(\\d+\\.\\d+)\\s*<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?cuisinartwebstore\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Elitecarseats.com",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\|",
                "js": null
            },
            "price": {
                "regex": "<span property=\"v:price\">\\$(\\d+\\.\\d+)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www.)?elitecarseats\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Footballfanatics.com",
        "scraper": {
            "title": {
                "regex": "property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "Price: <\\/span><span[\\S\\s]+?class=\"regularPrice\">[\\S\\s]+? \\$([\\d,\\.]+?)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?footballfanatics\\.com/.+?/.",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Purelygadgets.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>.*: (.+?)<",
                "js": null
            },
            "price": {
                "regex": "Our Price:.*\\s*.*Â£([\\d\\.]+)<",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?purelygadgets\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Zooplus.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+)</title>",
                "js": null
            },
            "price": {
                "regex": "itemprop=\"price\">[\\s\\S]*?(\\d+,\\d\\d)",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?zooplus\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "JohnLewis.com",
        "scraper": {
            "title": {
                "regex": "<title>Buy (.+?) online",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var match1 = html.match(/id=\"prod-price\" class=\"mod mod-prod-price\">[\\S\\s]+?<p class=\"price\">[\\S\\s]+?<strong>[\\S\\s]+?.*?([\\d\\.\\,]+)/);\r\nvar match2 = html.match(/LineSkuCoreProductCtl1_pSKUPrice\" class=\"price\">Â£([\\d,.]+?)</);\r\nvar match3 = html.match(/lblPrice\" class=\"price\">Â£([\\d,.]+?)</);\r\nvar match4 = html.match(/SkuPrice\" class=\"sku-price\">Â£([\\d,.]+?)</);\r\n\r\nif(match1){callback(match1[1]);}\r\nelse if(match2){callback(match1[2]);}\r\nelse if(match3) {callback(match1[3]);}\r\nelse if(match4) {callback(match1[4]);}\r\nelse {callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "Model name / number[\\1-\\uFFFF]+?<span.+?>(.+?)<",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(m|www)\\.?johnlewis\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Textbooks.com",
        "scraper": {
            "title": {
                "regex": "dtmc_prod_name =\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var match = html.match(/class='priceBookPrice ltOrng19px'>New \\$([\\d,.]+?)</);\nif (match){callback(match[1]);}else {callback('');}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": "ISBN13: (\\d{13}),",
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(mobile.usablenet.com/mt/)?(www\\.)?textbooks\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Kaiserstuhlshop.de",
        "scraper": {
            "title": {
                "regex": "<h1>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "\"productSpecialPrice\"> ([\\d.,].+?).\\&",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": null,
        "region": "DE",
        "regex": "^https?://(www.)?kaiserstuhlshop\\.de",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "Wexphotographic.com",
        "scraper": {
            "title": {
                "regex": "hdnLPMainProductTitle\" value=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "hdnLPMainProductPrice\" value=\"([\\d,.].+?)\"",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(www.)?wexphotographic\\.com",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Alljigsawpuzzles.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>(.+?)<",
                "js": null
            },
            "price": {
                "regex": "class=\"price-box\">[\\S\\s]+?<span class=\"regular-price\" id=\"product-price-.+?\">[\\S\\s]+?<span class=\"price\">.*?([\\d,\\.]+?)<",
                "js": ""
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            },
            "js": ""
        },
        "style_override": null,
        "region": "UK",
        "regex": "^https?://(www.)?alljigsawpuzzles\\.co\\.uk",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "ApplianceDeals.co.uk",
        "scraper": {
            "title": {
                "regex": "<title>\\s*[\\n\\r]\\s*(\\w.+)",
                "js": null
            },
            "price": {
                "regex": "<span class='price'.*?>.([\\d\\.]+)<\\/span>",
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "UK",
        "regex": "^https?://(www\\.)?appliancedeals\\.co\\.uk",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Cosmeticamerica.com",
        "scraper": {
            "title": {
                "regex": "property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": "",
                "js": "var salePrice = html.match(/Sale price:<\\/font> <b><font color=cc0000>\\$([\\d,.].+?)</);\r\nvar noPrice = html.match(/This Item is Temporary Unavailable/);\r\nvar price = html.match(/Our Price:  <\\/b><\\/font> <span itemprop='price'>\\$([\\d,\\.]+?)</);\r\nif(noPrice){callback('');}\r\nelse if (salePrice){\r\ncallback(salePrice[1]);\r\n}else{\r\ncallback(price[1]);\r\n}"
            },
            "pnp": {
                "regex": "",
                "js": ""
            },
            "identifier": {
                "regex": "",
                "js": ""
            },
            "mpn": {
                "regex": "",
                "js": ""
            },
            "brand": {
                "regex": "",
                "js": null
            }
        },
        "style_override": null,
        "region": "US",
        "regex": "^https?://(www.)?cosmeticamerica\\.com",
        "use_inner_html": null,
        "category": "merchant"
    }, {
        "name": "BestBuy.com",
        "scraper": {
            "title": {
                "regex": "<meta property=\"og:title\" content=\"(.*)\"",
                "js": null
            },
            "price": {
                "regex": "price\" itemprop=\"price\".*\\$([\\d,.]+)",
                "js": "var priceOnCheckout = html.match(/See price at checkout/);\r\nif (!priceOnCheckout) {\r\n  var match = html.match(/javascript:bbyCartController.viewPrice\\('{skuId:(\\d+),productId:(\\d+)}'\\)/);\r\n  if (match && match[1] && match[2]) {\r\n    var mobileUrl = 'http://m.bestbuy.com/m/b/product/detail.jsp?skuId=' + match[1] + '&pid=' + match[2] + '&ctv=y';\r\n    getHttp(mobileUrl, function(data) {\r\n      var priceMatch = data.match(/<span class=\"redprice bold\">[\\S\\s]+?\\$([\\d\\.,]+)/);\r\n      callback(priceMatch ? priceMatch[1] : '');\r\n    });\r\n  } else {\r\n    callback('');\r\n  }\r\n}"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": "itemprop=\"model\">(.*)<\\/span",
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^https?://(www|m)?\\.?bestbuy\\.com/",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Handwerker-versand.de",
        "scraper": {
            "title": {
                "regex": "<title>(.+?) \\(",
                "js": null
            },
            "price": {
                "regex": null,
                "js": null
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "DE",
        "regex": "^https?://(www.)?handwerker-versand\\.de",
        "use_inner_html": false,
        "category": "merchant"
    }, {
        "name": "Drugstore.com",
        "scraper": {
            "title": {
                "regex": "meta property=\"og:title\" content=\"(.+?)\"",
                "js": null
            },
            "price": {
                "regex": null,
                "js": "var match = html.match(/our price:&nbsp;<span.+?>\\$(.+?)<\\/span>/i) || html.match(/<span class=\"regularprice\">\\$(.+?)<\\/span>/) || html.match(/discountprice\">(.+?)</);\n                              callback(match ? match[1] : '')"
            },
            "pnp": {
                "regex": null,
                "js": null
            },
            "identifier": {
                "regex": null,
                "js": null
            },
            "mpn": {
                "regex": null,
                "js": null
            },
            "brand": {
                "regex": null,
                "js": null
            }
        },
        "style_override": "",
        "region": "US",
        "regex": "^http://(www|m)?\\.?drugstore\\.com/(.+?/){2}",
        "use_inner_html": false,
        "category": "merchant"
    }],
    "generic": {
        "name": "GenericRetailer",
        "scraper": {
            "js": "var isProductPage = function(html) {\n  var match = html.match(/(add.?to.?cart|add.?to.?basket|my.?basket|show.?basket|shopping.?cart|shopping.?basket|view.?cart|view.?basket|items.?in.?cart|items.?in.?basket|my.?cart|my.?basket|buy.?now)/i);\n  return (match != undefined);\n}                                                                 \n\nvar validateCode = function(code) {\n  var digits = code.split('');\n  var sum = 0;\n  for (var i=0; i < digits.length-1; i++)\n    sum += ((i + digits.length) % 2 == 0) ? +digits[i] * 3 : +digits[i];\n  checkDigit = 10 - sum % 10;\n  if (checkDigit == 10) checkDigit = 0;\n  return (checkDigit == digits[digits.length-1]);\n}\n\nvar uniqueIdentifiers = function(a) {\n  var result = new Array();\n  o:for(var i = 0, n = a.length; i < n; i++) {\n    for(var x = 0; x < result.length; x++)\n       if(result[x]==a[i]) continue o;\n    if (validateCode(a[i]))\n      result[result.length] = a[i];\n  }\n  return result;\n}\n                                                                  \nvar findIdentifiers = function(html) {\n  var match = html.match(/(?:>|:)\\s*(?:\\r\\n\\s*)?0?\\d{12,13}(?=[^\\d])/g);          \n  if (match) {\n    // com.forward.invisiblehand.log('match: ' + match.toString());\n    var cleanNumbers = new Array();\n    for (var i=0; i< match.length; i++) {\n      var cleanNumber = match[i].replace(/[^\\d]/g, '');\n      if ((cleanNumber.length == 14) && (cleanNumber[0] == '0'))\n        cleanNumber = cleanNumber.substring(1);\n      cleanNumbers.push(cleanNumber);\n    }\n    var identifiers = uniqueIdentifiers(cleanNumbers);\n    if (identifiers.length >= 1) {\n      // com.forward.invisiblehand.log('Found identifiers: ' + identifiers);\n      return identifiers;\n    }\n  }\n}\n\nvar findBrand = function(html) {\n  return findFirstMatching(new Array(\n    /brand:.+?>([\\w\\d\\-]+?)</i,\n    /manufacturer\\s*<[\\S\\s]{1,300}?>\\s*([\\w\\d\\-]+)\\s*</i,\n    /div class=\"mfrTitle\">(.+?)</i //ebuyer special\n  ));\n}\n\nvar findMpn = function(html) {\n  return findFirstMatching(new Array(\n    /(?:part #|manufacturer #):\\s*([\\w\\d\\-\\/]+)\\s*</i,\n    /(?:Mfg. Part #|manufacturer #:|Manufacturer Part Number|Manufacturer Item)[\\S\\s]{1,300}?>\\s*([\\w\\d\\-\\/]{3,30})\\s*</i\n  ));\n}\n\nvar findModel = function(html) {\n  return findFirstMatching(new Array(\n    /model:(.+?)</i,\n    /model\\s*<[\\S\\s]{1,300}?>\\s*([\\w\\d\\-\\/]+)\\s*</i\n  ));\n}\n\nvar findFirstMatching = function(expressions) {\n  for (var i=0; i < expressions.length; i++) {\n    var match = html.match(expressions[i]);\n    if (match) {\n      /* com.forward.invisiblehand.log(\"Matched: \" + match[1]); */\n      var res = match[1].replace(/^\\s+|\\s+$/g, '').toUpperCase();\n      return (res == '') ? null : res;\n    }\n  }\n  return null;  \n}\n\nvar findRegion = function(html) {\n  if (html.match(/(Â£|&pound;|&#163;)\\s*\\d/)) return 'uk';\n  if (html.match(/\\$\\s*\\d/)) return 'us';\n}\n\nvar validate = function(request) {\n  if (request.product_query.match(/(price)|(title)|(availability)|(product)/i)) request.product_query = null;\n}\n\nvar res = {};\nif (isProductPage(html)) {\n  var identifiers = findIdentifiers(html);\n  if (identifiers && identifiers.length > 0) {\n    res.region = findRegion(html);\n    /* This is to support old versions of the extension */\n    res.product_query = identifiers.shift();\n    if (identifiers.length > 1) {\n      res.identifiers = identifiers;\n    }\n  } else {\n    var brand = findBrand(html);\n    if (brand) {\n      var identifier = findMpn(html) || findModel(html);\n      if (identifier) {\n        res.region = findRegion(html);\n        res.identifier = identifier;\n        res.product_query = brand + ' ' + identifier;\n        validate(res);\n      }\n    }\n  }\n}\ncallback(res);"
        },
        "use_inner_html": true,
        "category": "generic"
    },
    "regions": {
        "us": {
            "code": "US",
            "currency": {
                "symbol": "$",
                "name": "USD"
            },
            "name": "United States"
        },
        "uk": {
            "code": "UK",
            "currency": {
                "symbol": "Â£",
                "name": "GBP"
            },
            "name": "United Kingdom"
        },
        "de": {
            "code": "DE",
            "currency": {
                "symbol": "â‚¬",
                "name": "EUR"
            },
            "name": "Germany"
        },
        "ca": {
            "code": "CA",
            "currency": {
                "symbol": "$",
                "name": "CAD"
            },
            "name": "Canada"
        }
    }
}
