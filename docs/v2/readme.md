---
pageClass: api-document
---

!!!!!! section main-section
!!!!! sub-section section-area
!!!! sub-section section-left
# Overview
All API Endpoints using `post` method only.   
Mafindo Public API use API Key for Authentication. Please refer to [Authorization](/#authorization) section.
!!!!
!!!! sub-section section-right right-spacer
+++ section-notes Base URL
https://yudistira.turnbackhoax.id/api/
+++
!!!!
!!!!!
!!!!!!


!!!!!! section main-section closed
!!!!! sub-section section-area
!!!! sub-section section-left
## News
This is an object representing News Item. The main subject of the whole API Endpoints.

You can retrieve it to see detail of the news item, the list of news, get total of the news in our database, sample of random news, or news based on the author. 

We also have experimental API endpoints to retrieve news based on media related to the news.

!!!!
!!!! sub-section section-right right-spacer
+++ section-notes Method List
- `POST` /antihoax/ {.post}
- `POST` /antihoax/get_total {.post}
- `POST` /antihoax/search {.post}
- `POST` /antihoax/multimedia {.post}
- `POST` /antihoax/random {.post}
- `POST` /antihoax/author/:ID {.post}
+++
!!!!
!!!!!

=== sub-section-wrapper
!!!!! section
!!!! sub-section section-area
!!! sub-section section-left

### The News Object

#### Attributes
---

<div class="parameter-container">

- `id` *string*

  Unique identifier for each news item

- `authors` *string*

  News Item Author's Id, some news will show multiple author's Id separated by comma. E.g. `1, 2, 3`

- `status` *string*

  News Item Status to classified if the news is fake or truth.
  
  Values: `1` for truth, `2` for fake news

- `classification` *string*

  News Item fake news classification. E.g. `Fabricated Content`

- `title` *string*

  Title of the news Item

- `content` *string*

  Content of the news Item

- `fact` *string*

  An Argument for the news Item which state the fact of the news.

- `references` *string*

  References Link for the news Item.

- `source_issue` *string*

  Source of the News Item.

- `source_link` *string*

  Source of the News Item's URL.

- `picture1` *string*

  URL of a picture which related to the news Item.

- `picture2` *string*

  URL of an additional picture for the news item.

- `tanggal` *string*

  Date of News Item published.

- `tags ` *string*

  List of words which used as label for the news item, separated by comma. E.g. `tag 1, tag 2, tag 3`

- `conclusion ` *string*

  News item conclusion for public awareness.

- `claim_review ` *array* ~~optional~~

  Claim review related to the news item from several sources, This is intended to comply with google fact-check review when people search on some news.

  Item reviewed is the original source of news item that saved in our collections, while Claim is a news that acknowledge the item reviewed about its truthness and qualitiy. 
  
  Please refer to [Google Fact-check Reference](https://developers.google.com/search/docs/data-types/factcheck#claimreview) for references

  <details><summary> Show child attributes </summary><p>
  
  - `claim_date_published` *string*

    Date of Claim review published

  - `claim_url` *string*

    Claim review URL source

  - `claim_title` *string*

    Claim review title

  - `claim_author_name` *string*

    Claim review author's name

  - `claim_rating_value` *string*

    Claim review overall rating value

  - `claim_author_type` *string*

    Claim review overall author type

    Values: `1` for person, `2` for organization

  - `claimed_item_author_name` *string*

    Item reviewed author name

  - `claimed_item_author_type` *string*

    Item reviewed author type

    Values: `1` for person, `2` for organization

  - `claimed_item_url` *string*

    Item reviewed URL Source

  - `claimed_item_published_date` *string*

    Item reviewed published date

  </p></details>

- `media` *array* ~~optional~~
  
  Media is a picture, video, or audio file related to the news item, we might remove `picture1` and `picture2` properties in the future for better media management.

  <details><summary> Show child attributes </summary><p>
  
  - `media_name` *string*

    Media filename
  
  - `media_path` *string*

    Media fullpath

  </p></details>

</div>

!!!
!!! sub-section section-right right-spacer
+++ section-codes The News Object
```json
[
  {
    "id": "891",
    "authors": "Tempo",
    "status": "2",
    "classification": "Misleading Content",
    "title": "[SALAH] Penasihat Istana RI adalah Anggota Partai Komunis Cina",
    "content": "Baru-baru ini beredar sebuah informasi bahwa Presiden Jokowi mengangkat Jack Ma sebagai penasehat Istana. Yang dipersoalkan dalam informasi itu adalah Jack Ma menjadi anggota Partai Komunis China. Informasi itu diunggah oleh akun Tata di Facebook pada 28 Desember 2018. Dia menyertakan video berdurasi 1 menit 32 detik dengan tulisan:\r\n\r\n\"Tetap waspada, bahaya komunis, rapatkan barisan, menangkan Prabowo sandi!! #PAS\"\r\n",
    "fact": "Jack Ma menerima tawaran menjadi penasihat panitia pengarah roadmap e-commerce Indonesia. Ma datang ke Indonesia pada Oktober 2018 untuk menghadiri rangkaian acara Pertemuan Tahunan Dana Moneter Internasional – Bank Dunia di Bali. Sementara surat kabar pendukung pemerintah Cina, The People's Daily, mengkonfirmasi bahwa Jack Ma menjadi anggota Partai Komunis China (CPC) pada November 2018.\r\n\r\n\r\n",
    "references": "https://cekfakta.tempo.co/fakta/100/fakta-atau-hoax-benarkah-penasihat-istana-ri-adalah-anggota-partai-komunis-cina",
    "source_issue": "Facebook",
    "source_link": "https://www.facebook.com/100010158074521/videos/vb.100010158074521/785564921792103/?type=2&theater",
    "picture1": "https://cdn.tmpo.co/data/2019/01/10/id_810446/810446_720.jpg",
    "picture2": "",
    "tanggal": "2019-01-10",
    "tags": "cekfakta",
    "conclusion": "Dari fakta di atas bahwa video yang menyebutkan penasihat Istana RI adalah anggota Partai Komunis Cina adalah salah. Penunjukan Jack Ma oleh pemerintah Indonesia hanya sebagai penasihat panitia pengarah e-commerce dalam kapasitasnya sebagai pendiri Alibaba Group.",
    "claim_review": [
      {
        "claim_date_published": "2019-02-10",
        "claim_url": "http://google.com",
        "claim_title": "Claim Title",
        "claim_author_name": "Claim Author Name",
        "claim_rating_value": "2",
        "claim_author_type": "2",
        "claimed_item_author_name": "Author",
        "claimed_item_author_type": "1",
        "claimed_item_url": "http://google.com",
        "claimed_item_published_date": "2019-02-10"
      },
      {
        "claim_date_published": "2019-02-10",
        "claim_url": "http://google.com",
        "claim_title": "Claim Title Next Generation",
        "claim_author_name": "Claim Author Name X",
        "claim_rating_value": "2",
        "claim_author_type": "1",
        "claimed_item_author_name": "Author",
        "claimed_item_author_type": "1",
        "claimed_item_url": "http://google.com",
        "claimed_item_published_date": "2019-02-10"
      }
    ],
    "media": [
      {
        "media_name": "7iq2JjhDRwapqM2k58gkxXZo",
        "media_path": "https://yudistira.turnbackhoax.id/v2/uploads/media/2019/02/bb249c0ad8af4a8c6d8483e18da81bede0cab37b979d8b3dea94a72ae9f2bbc9ed1c76519d5ab026187660da2bd018b26f7df476a2d6159d1892aacb1dc879ad.jpeg"
      },
      {
        "media_name": "201af3e8135432cc40f61073a29556df",
        "media_path": "https://yudistira.turnbackhoax.id/v2/uploads/media/2019/02/2f0c4832e58de1cfd0c60188f6273cd946deb83f3360b6deeb4f067c432168399312c5e795560517ef22bcea54aa5fb696b8ee3d425366274a1cb001d3e9a815.jpeg"
      }
    ]
  },
  // ... more news item
]
```
+++

!!!
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Get News List / Get News Item
Get list of news or individual news item

#### Parameters
---

<div class="parameter-container">

- `key` *string* __required__

  Your authorization API Key 

- `id` *integer* ~~optional~~

  Id of News Item, mandatory to get single news item.   

  If you want to get the list of news, please omit this data from request.

- `limit` *integer* ~~optional~~

  Limit of news item to show, useful for get list of news item.

- `offset` *integer* ~~optional~~

  Number of offset for News item to be shown

</div>

#### Returns
---
Returns a list of news or a news object based on the `ID` in the data sent

!!!
!!! sub-section section-right right-spacer

+++ section-codes <span><strong class="post">POST</strong> /antihoax/</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request POST \
  --url https://yudistira.turnbackhoax.id/api/antihoax/ \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Accept: application/json' \
  --data 'key=123456&id=891&limit=1&offset=1'
```
:::
::::
+++

!!!
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Get News Total Count
Get total count of news in our database

#### Parameters
---

<div class="parameter-container">

- `key` *string* __required__

  Your authorization API Key 

</div>

#### Returns
---
Returns total of news

!!!
!!! sub-section section-right right-spacer

+++ section-codes <span><strong class="post">POST</strong> /antihoax/get_total</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request POST \
  --url https://yudistira.turnbackhoax.id/api/antihoax/get_total \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Accept: application/json' \
  --data 'key=123456'
```
:::
::::
+++

!!!
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Search News
Search News based on search criteria. You can retrieve the list of news or total of the news related to your search.

#### Parameters
---

<div class="parameter-container">

- `key` *string* __required__

  Your authorization API Key 

- `method` *string* __required__

  Search criteria / method. Please refers to [search method](#search-method) for details.

- `value` *string* __required__

  The value of search method / criteria.

- `limit` *integer* ~~optional~~

  Limit of news item to show, useful for get list of news item.

- `total` *integer* ~~optional~~

  If you send this in request data body, you will get total records count of search results instead of the list.

  The values are: `1` for true, `0` for false

</div>

<aside class="admonition info">
  <p>To get total record count of your search criteria, omit the <code>limit</code> parameter and set <code>total</code> parameter to <code>1</code></p>
</aside>
<br>


#### Returns
---
Returns a list of news object or the total count of news object based on the search criteria

#### Search method List
---

<div class="parameter-container">

- `author`

  Search news by the author of the news object

- `content`

  Search news by the content of the news object

- `title`

  Search news by the title of the news object

- `source_link`

  Search news by the source link of the news object

- `source_link`

  Search news by the tags of the news object

- `status`

  Search news by the status of the news object

</div>
!!!
!!! sub-section section-right right-spacer

+++ section-codes <span><strong class="post">POST</strong> /antihoax/search</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request POST \
  --url https://yudistira.turnbackhoax.id/api/antihoax/search/ \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Accept: application/json' \
  --data 'key=123456&method=content&value=jokowi&limit=5&total=1'
```
:::
::::
+++

!!!
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Get News by Media References
Get news by media references in the news.   
We are going to support audio, video and image file type.

<aside class="admonition warning red">
  <p>This is experimental feature</p>
</aside>

#### Parameters
---

<div class="parameter-container">

- `key` *string* __required__

  Your authorization API Key 

- `type` *string* __required__

  Type of media references

  Possible values: `hash`, `image`, `audio`

- `value` *string* __required__

  Search value of the media. 
  
  Possible values:   
  For type `hash`, you may send hashed value of the media   
  For type `image/audio`, you may send the media URL

- `option` *string* __required__

  Additional search option.

  Possible values:   
  `media-only` will return only the media url   
  `full` will return all parameter of the news object

</div>

#### Returns
---
Returns a list of news or a news object based on the `ID` in the data sent

<aside class="admonition info">
  <p><code>media-only</code> response return different media object</p>
</aside>

+++ section-notes Response Object for media-only request
<div class="parameter-container">

- `article_id`

  ID of the news object

- `media_name` *string*

  Media filename
  
- `media_path` *string*

  Media fullpath

</div>
+++

!!!
!!! sub-section section-right right-spacer

+++ section-codes <span><strong class="post">POST</strong> /antihoax/multimedia</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request POST \
  --url https://yudistira.turnbackhoax.id/api/antihoax/multimedia \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Accept: application/json' \
  --data 'key=123456&type=hash&value=14936fd764508fd7231f2c7354150f074b78a062b315b1d0e9478d8d86737341f29bfbacf7b285060812f235404412394fdec3d45b657e3df367a490aa3be087&option=full'
```
:::
::::
+++

+++ section-codes Multimedia Response Examples
:::: tabs :options="{ useUrlFragment: false }"
::: tab "media-only"
```json
[
  {
    "article_id": "1254",
    "media_name": "WhatsApp_Image_2019-03-08_at_13_49_34",
    "media_path": "https://yudistira.turnbackhoax.id/uploads/media/2019/03/6f08d18c23eaf6a4548b98cf18d438875704bedfc8f338fecb9be8b63124dbd41e5d38ba8fd9d36f47c89bdf4d7376d279b7cd08fa603b495082110afefaca20.jpeg"
  }
]
```
:::
::: tab "full"
```json
[
  {
    "id": "1254",
    "authors": "Mafindo",
    "status": "2",
    "classification": "False Context",
    "title": "[SALAH] “Orang Jakarta pada canggih euy”",
    "content": "“Orang Jakarta pada canggih euy….\r\nMainannya DRONE kapal-kapalan\r\nNB:\r\nFoto puluhan drone kapal, lagi sandar di sungai GABENER, buat merasakan SENSASI nya\r\n….\r\n.\r\n.\r\n.\r\n.\r\n.\r\n.\r\n.\r\n.\r\n.\r\n.\r\nThomy Setiawan”.",
    "fact": "Bukan Jakarta, foto yang digunakan oleh post SUMBER lokasi kejadiannya adalah di Vietnam. Selengkapnya di bagian PENJELASAN.",
    "references": "https://turnbackhoax.id/2019/03/07/salah-orang-jakarta-pada-canggih-euy/",
    "source_issue": "facebook.com",
    "source_link": "https://archive.fo/BRG53",
    "picture1": "https://turnbackhoax.id/wp-content/uploads/2019/03/orang-jakarta-01.png",
    "picture2": "https://turnbackhoax.id/wp-content/uploads/2019/03/orang-jakarta-03.png",
    "tanggal": "2019-03-07",
    "tags": "cekfakta",
    "conclusion": "",
    "claim_review": [],
    "media": [
      {
          "media_name": "WhatsApp_Image_2019-03-08_at_13_49_34",
          "media_path": "https://yudistira.turnbackhoax.id/uploads/media/2019/03/6f08d18c23eaf6a4548b98cf18d438875704bedfc8f338fecb9be8b63124dbd41e5d38ba8fd9d36f47c89bdf4d7376d279b7cd08fa603b495082110afefaca20.jpeg"
      }
    ]
  }
]
```
:::
::::
+++

!!!
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Random News
Get list of random news

#### Parameters
---

<div class="parameter-container">

- `key` *string* __required__

  Your authorization API Key 

</div>

#### Returns
---
Returns a list of random news object

!!!
!!! sub-section section-right right-spacer

+++ section-codes <span><strong class="post">POST</strong> /antihoax/random</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request POST \
  --url https://yudistira.turnbackhoax.id/api/antihoax/random \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Accept: application/json' \
  --data 'key=123456'
```
:::
::::
+++

!!!
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Get News by Author ID
Get list of News based on its Author.

#### Parameters
---

<h5 id="request-url-parameter-get-news-by-author-id" class="parameters-sub-heading">
  <a href="#request-url-parameter-get-news-by-author-id" class="header-anchor">#</a> Request URL Parameter
</h5>

<div class="parameter-container">

- `:ID` *string* __required__

  ID of the Author. Please refers to [Author](./#author) to get the author list.

</div>

<h5 id="request-body-parameter-get-news-by-author-id" class="parameters-sub-heading">
  <a href="#request-body-parameter-get-news-by-author-id" class="header-anchor">#</a> Request Body Parameter
</h5>

<div class="parameter-container">

- `key` *string* __required__

  Your authorization API Key 

</div>

#### Returns
---
Returns a list of news object by specific author

!!!
!!! sub-section section-right right-spacer

+++ section-codes <span><strong class="post">POST</strong> /antihoax/author/:ID</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request POST \
  --url https://yudistira.turnbackhoax.id/api/antihoax/author/24 \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Accept: application/json' \
  --data 'key=123456'
```
:::
::::
+++

!!!
!!!!
!!!!!

!!!!!!


!!!!!! section main-section closed
!!!!! sub-section section-area
!!!! sub-section section-left
## Author
This is an object representing Author Object. Since our news collection is written by several authors from different party.

You can retrieve it to see detail of the list of author, or the author detail information.

!!!!
!!!! sub-section section-right right-spacer
+++ section-notes Method List
- `POST` /antihoax/get_authors {.post}
- `POST` /antihoax/get_author {.post}
+++
!!!!
!!!!!

=== sub-section-wrapper
!!!!! section
!!!! sub-section section-area
!!! sub-section section-left

### The Author Object

#### Attributes
---

<div class="parameter-container">

- `id` *string*

  Unique identifier or ID for each author

- `nama` *string*

  Author name

- `deskripsi` *string*

  A brief of information about the Author

- `website` *string*

  Website URL Address of the Author

- `icon` *string*

  Icon / Image URL which represent the Author

</div>

!!!
!!! sub-section section-right right-spacer
+++ section-codes The Author Object
```json
[
  {
    "id": "14",
    "nama": "Tempo",
    "deskripsi": "Sejak 2008, Tempo.co telah lahir kembali dengan wajah baru dan sajian berita yang berkualitas. Kami berupaya menerapkan standar tinggi jurnalisme dalam meliput peristiwa dan menuliskannya secara tajam, cerdas dan berimbang. Prinsip kami, enak dibaca dan perlu, bahkan jenaka pun bisa.\r\nSemua itu adalah upaya kami untuk membuat Indonesia lebih baik. Tempo, Untuk Publik, Untuk Republik.",
    "website": "tempo.co",
    "icon": "https://yudistira.turnbackhoax.id/uploads/thumbnail/2e051cb97ef38d3a0bed0b490bd47f71.png"
  },
  // ... more author item
]
```
+++

!!!
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Get Authors List
Get list of author

#### Parameters
---

<div class="parameter-container">

- `key` *string* __required__

  Your authorization API Key 

</div>

#### Returns
---
Returns a list of author object

!!!
!!! sub-section section-right right-spacer

+++ section-codes <span><strong class="post">POST</strong> /antihoax/get_authors</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request POST \
  --url https://yudistira.turnbackhoax.id/api/antihoax/get_authors \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Accept: application/json' \
  --data 'key=123456'
```
:::
::::
+++

!!!
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Get Author by Author ID
Get detail of author by its Author ID

#### Parameters
---

<div class="parameter-container">

- `key` *string* __required__

  Your authorization API Key 

- `ID` *integer* __required__

  Author ID 

</div>

#### Returns
---
Returns an author object

!!!
!!! sub-section section-right right-spacer

+++ section-codes <span><strong class="post">POST</strong> /antihoax/get_author</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request POST \
  --url https://yudistira.turnbackhoax.id/api/antihoax/get_author \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Accept: application/json' \
  --data 'key=123456&id=10'
```
:::
::::
+++

!!!
!!!!
!!!!!


!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Get Author by News ID
Get author detail of a News Object.   
For information about News Object refer to [News](./#news) Section.

#### Parameters
---

<div class="parameter-container">

- `key` *string* __required__

  Your authorization API Key 

- `ID` *integer* __required__

  News Object ID 

</div>

#### Returns
---
Returns an object with information about the author and news related with the specified news ID

+++ section-notes Response Object for Author by News ID
<div class="parameter-container">

- `author_id` *string*

  Unique identifier or ID for the author

- `data_id` *string*

  Unique identifier or ID for the news
  
- `urutan` *string* ~~internal~~

  The order of the author. You may ignore this parameter, since this is for our internal purpose only.

- `id` *string*

  Unique identifier or ID for the author

- `nama` *string*

  Author name

- `deskripsi` *string*

  A brief of information about the Author

- `website` *string*

  Website URL Address of the Author

- `icon` *string*

  Icon / Image URL which represent the Author

</div>
+++


!!!
!!! sub-section section-right right-spacer

+++ section-codes <span><strong class="post">POST</strong> /antihoax/get_authorlink</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request POST \
  --url https://yudistira.turnbackhoax.id/api/antihoax/get_authorlink \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Accept: application/json' \
  --data 'key=123456&id=891'
```
:::
::::
+++

+++ section-codes Response Example
```json
[
  {
    "author_id": "14",
    "data_id": "891",
    "urutan": "1",
    "id": "14",
    "nama": "Tempo",
    "deskripsi": "Sejak 2008, Tempo.co telah lahir kembali dengan wajah baru dan sajian berita yang berkualitas. Kami berupaya menerapkan standar tinggi jurnalisme dalam meliput peristiwa dan menuliskannya secara tajam, cerdas dan berimbang. Prinsip kami, enak dibaca dan perlu, bahkan jenaka pun bisa.\r\nSemua itu adalah upaya kami untuk membuat Indonesia lebih baik. Tempo, Untuk Publik, Untuk Republik.",
    "website": "tempo.co",
    "icon": "https://yudistira.turnbackhoax.id/uploads/thumbnail/2e051cb97ef38d3a0bed0b490bd47f71.png"
  }
]
```
+++

!!!
!!!!
!!!!!

!!!!!!



!!!!!! section main-section
!!!!! sub-section section-area
!!!! sub-section section-left
## Report
This is a service to report hoax news. So you can easily support our effort in fighting fake news.

!!!!
!!!! sub-section section-right right-spacer
+++ section-notes Method List
- `POST` /report/API_KEY {.post}
+++
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left

### The Report Object

#### Attributes
---

<div class="parameter-container">

- `nama` *string*

  Reporter Name

- `email` *string*

  Reporter Email

- `judul` *string*

  Title of the report

- `teks_hoax` *string*

  Content of the report. You can fill in the fake news content, or anything which can be reviewed by our fact-check team. 

- `pesan` *string*

  Your message related to the report

- `prioritas` *string*

  Report urgency category. please consider to use `Normal` as default value.

  Values are: `Normal`, `Medium`, `High`

- `status` *string*

  Status of the report, you must send the status as `Open`

  Values are: `Open`, `In Progress`, `Done`

- `screenshot_1` *string*

  Photo / screenshot related with the report

- `screenshot_2` *string*

  Additional Photo / screenshot related with the report

</div>

!!!
!!! sub-section section-right right-spacer
+++ section-codes The Report Object
```json
{
  "nama": "John Doe",
  "email": "me@john.me",
  "judul": "Informasi hoax terkait SARS",
  "teks hoax": "Beredar informasi penyebaran virus SARS di kampus-kampus di area Yogyakarta",
  "pesan": "Mohon dibantu untuk konfirmasi mengenai berita terkait, berita beredar melalui aplikasi chatting",
  "prioritas": "normal",
  "status": "",
  "screenshot_1": "path/to/url/image1.png",
  "screenshot_1": "path/to/url/image2.png"
}
```
+++

!!!
!!!!
!!!!!

!!!!! section
!!!! sub-section section-area
!!! sub-section section-left
### Submit Report
Submit your report to our reporting platform

#### Parameters
---

<h5 id="request-url-parameter-submit-report" class="parameters-sub-heading">
  <a href="#request-url-parameter-submit-report" class="header-anchor">#</a> Request URL Parameter
</h5>

<div class="parameter-container">

- `API_KEY` __required__

  Your authorization API Key 

</div>

<h5 id="request-url-parameter-submit-report-body" class="parameters-sub-heading">
  <a href="#request-url-parameter-submit-report-body" class="header-anchor">#</a> Request Body Parameter
</h5>

Send request with form-data based on the [Report Object](./#the-report-object)

#### Returns
---
Returns string with text.   
Success message is `Report saved successfully`

!!!
!!! sub-section section-right right-spacer

+++ section-codes <span><strong class="post">POST</strong> /report/API_KEY</span>
:::: tabs :options="{ useUrlFragment: false }"
::: tab "Curl"
```bash
curl --request POST \
  --url https://yudistira.turnbackhoax.id/api/report/123456 \
  --header 'Accept: application/json' \
  --form 'nama=John Doe' \
  --form 'email=me@john.me' \
  --form 'judul=Informasi hoax terkait SARS' \
  --form 'teks hoax=Beredar informasi penyebaran virus SARS di kampus-kampus di area Yogyakarta' \
  --form 'pesan=Mohon dibantu untuk konfirmasi mengenai berita terkait, berita beredar melalui aplikasi chatting' \
  --form 'prioritas=Normal' \
  --form 'status=Open' \
  --form 'screenshot_1=path/to/url/image1.png' \
  --form 'screenshot_2=path/to/url/image2.png'
```
:::
::::
+++

!!!
!!!!
!!!!!

!!!!!!