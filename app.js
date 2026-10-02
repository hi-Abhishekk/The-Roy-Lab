// The lab's name. This one change updates it everywhere it appears on the
// site: the top-left corner of every page, the homepage's big title, and
// the footer.
const SITE_NAME = "The Roy Lab";

// The text on the big button in the homepage hero section.
const HERO_BUTTON_TEXT = "Contact Us";

const NAV_ITEMS = [
  { id: "team", label: "Team" },
  { id: "publications", label: "Publications" },
  { id: "research", label: "Research" },
  { id: "gallery", label: "Gallery" },
  { id: "opportunities", label: "Opportunities" },
];

const FONT_SIZES = {
  // Site-wide: header, footer, nav, buttons, small reusable bits
  siteNameButton: 16, // "The Roy Lab" text, top-left of every page
  navLink: 13, // TEAM / PUBLICATIONS / RESEARCH / etc. in the top menu (desktop)
  navContactLink: 14, // "Contact us" in the top menu (desktop)
  mobileNavLink: 14, // menu items in the mobile hamburger menu
  footerText: 17, // "Developed by:" in the footer
  pillButton: 16, // text inside solid rounded buttons, e.g. "Explore research"
  textLink: 15.5, // text links with an arrow, e.g. "View all publications"
  eyebrowLabel: 12.5, // small uppercase labels (currently unused, kept for later)
  imageTileTag: 10.5, // small tag text that can appear on a placeholder photo tile

  // Homepage
  heroTitle: "clamp(52px, 10vw, 128px)", // the big "The Roy Lab" hero text
  homeAboutTitle: "clamp(34px,5vw,56px)", // "About" heading
  homeAboutText: "clamp(26px, 4vw, 42px)", // the About paragraph itself
  homeTeamTitle: "clamp(34px,5vw,56px)", // "Team" heading
  homeTeamText: 16, // Team section's short description paragraph
  homeTeamCardName: 22, // each person's name in the homepage Team preview
  homeTeamCardRole: 11.5, // each person's role/title in the homepage Team preview
  homeTeamCardAbout: 14.5, // each person's short bio in the homepage Team preview
  homePublicationsTitle: "clamp(40px,7vw,80px)", // "Publications" heading
  homePublicationTitle: 24, // each paper's title in the homepage preview
  homePublicationMeta: 13.5, // the year / journal line under each paper title
  homePublicationBody: 14.5, // each paper's summary paragraph
  homeFundingTitle: "clamp(40px,7vw,80px)", // "Funding Agencies" heading
  homeFundingText: 18, // the funding acknowledgement paragraph

  // Research page
  researchTitle: "clamp(40px,6vw,68px)", // "Research focus" heading
  researchText: 17, // the intro paragraph next to the research image
  researchImagePlaceholder: 13.5, // "Add an image..." placeholder message
  researchBoxTitle: 26, // each research topic's title, e.g. "Treg stability"
  researchBoxNumber: 14, // the small "01" / "02" number next to each title
  researchBoxBody: 17, // each research topic's description paragraph

  // Opportunities page ("Join the lab")
  opportunitiesTitle: "clamp(40px,6vw,68px)", // "Join the lab" heading
  opportunitiesText: 18, // the intro paragraph under that heading
  opportunitiesImageCaption: 18, // "Let's build something together." caption
  oppCardTitle: "clamp(28px, 4vw, 40px)", // position title, e.g. "PhD Students" (normal scrolling view)
  oppCardBody: 16, // position description text (normal scrolling view)
  oppCardTitleReduced: 26, // same position title, but on the simpler fallback list some visitors see
  oppCardBodyReduced: 15, // same position description, on that fallback list
  oppScrollHint: 20, // the small "SCROLL" hint at the bottom of the cards

  // Team page (full roster)
  teamPageTitle: "clamp(40px,6vw,68px)", // "Team" heading
  teamPageText: 16, // the intro paragraph next to that heading
  teamAlumniTitle: "clamp(28px,4vw,40px)", // "Alumni" heading
  teamAlumniBullet: 18, // the small bullet dot before each alumni entry
  teamAlumniText: 15.5, // each alumni entry's name + note

  // Publications page (full list)
  publicationsPageTitle: "clamp(44px,8vw,92px)", // "Publications" heading
  publicationsPaperTitle: 26, // each paper's title
  publicationsPaperMeta: 13.5, // the year / journal line under each title
  publicationsPaperBody: 15, // each paper's summary paragraph

  // Gallery page
  galleryPageTitle: "clamp(40px,6vw,68px)", // "Gallery" heading
  galleryPageText: "clamp(22px,3.2vw,32px)", // the "Snapshots from lab life..." text
  galleryNewsTitle: "clamp(28px,4vw,40px)", // "Latest updates" heading
  galleryNewsBullet: 18, // the small bullet dot before each update
  galleryNewsText: 15.5, // each update's date + text

  // Contact page
  contactTitle: "clamp(40px,6vw,68px)", // "Get in touch" heading
  contactText: 16, // the intro paragraph under that heading
  contactItemLabel: 11.5, // small uppercase labels, e.g. "ADDRESS", "EMAIL"
  contactItemValue: 15, // your actual address/phone text
  contactMapLinkText: 15, // "View on Google Maps" link text
  contactMapPlaceholder: 14, // "(add your Google Maps link...)" placeholder message
  contactImagePlaceholder: 13.5, // "Add an image..." placeholder message
  contactMapEmbedPlaceholder: 13.5, // "Add an embedded map..." placeholder message
};

// The short description that appears both on the homepage's "Team" preview
// and at the top of the full Team page.
const TEAM_BLURB =
  "“No one can whistle a symphony. It takes a whole orchestra to play it.” – H.E. Luccock";

const TEAM_MEMBERS = [
  {
    name: "Dr. Payel Roy",
    role: "Principal Investigator",
    about: "Dr. Payel Roy is an Assistant Professor at the Biochemistry department, Indian Institute of Science, Bangalore. She earned her BS/MS degree in Biotechnology from St. Xavier’s College/Calcutta University, India. She completed her PhD with Dr. Soumen Basak at National Institute of Immunology, India. She worked under the mentorship of Prof. Klaus Ley as a postdoctoral researcher at the La Jolla Institute for Immunology, San Diego and then as an Assistant research scientist at the Immunology Center of Georgia.",
    image: "images/Payel Roy_picture.jpeg",
  },
  {
    name: "Mrinmoy Chakraborty",
    role: "PhD Student",
    about: "PhD student (2025-present), originally from Assam.\nCompleted my Master's degree in Zoology from Gauhati University.",
    image: "images/mrinmoy.jpeg",
  },
  {
    name: "Swathi B Choudhary",
    role: "PhD Student",
    about: "Joining year 2025.\nMSc Zoology.\nBSc Zoology (H).",
    image: "images/swathi.jpeg",
  },
  {
    name: "Sushant Mahajan",
    role: "PhD Student",
    about: "I am a PhD scholar joined the Roy Lab in 2026, with an M.Tech in Biotechnology from NIPER, Raebareli. Joined the Roy lab in 2026.",
    image: "images/sushant.jpeg",
  },
  {
    name: "Sushanti Kumari",
    role: "PhD Student",
    about: "MSc Biochemistry and Molecular Biology from Pondicherry University. Joined the Roy lab in 2026.",
    image: "images/sushanti.jpeg",
  },
  {
    name: "Gursukhman Kaur Bedi",
    role: "MSc Student",
    about: "I am pursuing MSc Life Sciences at Indian Institute of Science. I did my Bachelor's from Punjab University Patiala in biological sciences. Joined the Roy lab in 2026.",
    image: "images/gur.jpeg",
  },
  {
    name: "Abhishek Manoj",
    role: "JRF",
    about: "Member of the lab since 2025.\nCurrently working as a Junior Research Fellow in the Roy lab after completing my bachelor's in biotechnology from Ramaiah Institute of Technology.",
    image: "images/abhishek1.jpg",
  },
  {
    name: "Mohammed Sarmad C.H",
    role: "Project Trainee",
    about: "Joining year 2026.\nSarmad is a Project Trainee in the Roy Lab, with a Master's in Biochemistry and Molecular Biology from Pondicherry University.",
    image: "images/sarmad1.jpeg",
  },
  {
    name: "Ravi V",
    role: "Lab Assistant",
    about: "Backbone of the lab from 2025 to present.",
    image: "images/Ravinew.jpeg",
  },
];

const PI_UNIVERSITY_LINK = "https://biochem.iisc.ac.in/payel.php";
const PI_UNIVERSITY_LINK_TEXT = "IISc Page";

const OPEN_POSITIONS = [
  { number: "01", title: "PhD Positions", description: "Interested candidates must apply through IISc’s Integrated PhD and PhD Programs. Direct admissions are not possible." },
  { number: "02", title: "Project Assistants/JRF positions", description: "Please email proy@iisc.ac.in with your CV and a brief (1-2 pages) summary describing your technical expertise, research interests and overall academic plan. Interested candidates with prior experience in mice handling and/or human PBMC sample collection or with experience in R based computational data analysis are encouraged to apply." },
  { number: "03", title: "Postdoctoral Positions", description: "Currently, we do not have open positions for Postdoctoral Fellows. We can serve as a host lab for candidates who wish to apply for external funding to conduct computational research in the field of immunology." },
  { number: "04", title: "Internship and Dissertation Opportunities", description: "We cannot provide opportunities for short-term internships. Students interested in doing six months to 1 year thesis projects may contact us. Both IISc and non-IISc candidates can apply." },
];

const OPPORTUNITIES_IMAGE = "images/opportunitiespagepic.jpg";

const RESEARCH_IMAGE = "images/research1.jpg";

const CONTACT_IMAGE = "tempgallery/contact1.jpeg";

const CONTACT_MAP_LINK = "https://maps.app.goo.gl/cXgB52RxTm8JLn5N6";

const CONTACT_MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.186631233103!2d77.56130700918001!3d13.023784187243406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d83f30b1ff%3A0x38dafe9df3b83e81!2sDivison%20Of%20Biological%20Sciences!5e0!3m2!1sen!2sin!4v1788520124199!5m2!1sen!2sin";

const GALLERY_FOLDERS = [
  {
    name: "Lab Life",
    photos: [
      { image: "tempgallery/lablife1.jpeg", caption: "", cover: false },
      { image: "tempgallery/lablife2.jpeg", caption: "", cover: false },
      { image: "tempgallery/lablife3.jpeg", caption: "", cover: false },
      { image: "tempgallery/lablife4.jpeg", caption: "", cover: false },
      { image: "tempgallery/lablife12.png", caption: "", cover: false },
      { image: "tempgallery/lablife6.jpeg", caption: "", cover: false },
      { image: "tempgallery/lablife7.jpeg", caption: "", cover: false },
      { image: "tempgallery/lablife8.jpeg", caption: "", cover: false },
      { image: "tempgallery/lablife9.jpeg", caption: "", cover: false },
      { image: "tempgallery/lablife10.jpeg", caption: "", cover: false },
      { image: "tempgallery/lablife11.jpeg", caption: "", cover: false },
      { image: "tempgallery/lablife13.png", caption: "", cover: false },
    ],
  },
  {
    name: "Lab Outings",
    photos: [
      { image: "tempgallery/labouting1.jpeg", caption: "", cover: true },
      { image: "tempgallery/labouting2.jpeg", caption: "", cover: false },
      { image: "tempgallery/labouting3.jpeg", caption: "", cover: true },
      { image: "tempgallery/labouting4.jpeg", caption: "", cover: true },
      { image: "tempgallery/labouting5.jpeg", caption: "", cover: false },
      { image: "tempgallery/labouting6.jpeg", caption: "", cover: false },
      { image: "tempgallery/labouting7.jpeg", caption: "", cover: false },
      { image: "tempgallery/labouting8.jpeg", caption: "", cover: false },
      { image: "tempgallery/labouting9.jpeg", caption: "", cover: false },
      { image: "tempgallery/labouting10.jpeg", caption: "", cover: false },
      { image: "tempgallery/labouting11.png", caption: "", cover: false },
      { image: "tempgallery/labouting12.png", caption: "", cover: false },
    ],
  },
  {
    name: "Open Day",
    photos: [
      { image: "tempgallery/openday1.jpeg", caption: "", cover: true },
      { image: "tempgallery/openday2.jpeg", caption: "", cover: false },
      { image: "tempgallery/openday3.jpeg", caption: "", cover: false },
      { image: "tempgallery/openday4.jpeg", caption: "", cover: true },
      { image: "tempgallery/openday5.jpeg", caption: "", cover: true },
      { image: "tempgallery/openday6.jpeg", caption: "", cover: false },
      { image: "tempgallery/openday7.png", caption: "", cover: false },
      { image: "tempgallery/openday8.jpeg", caption: "", cover: false },
    ],
  },
];


const PUBLICATIONS = [
  {
    title: "Increased Autoreactive CD8+ T Cells to Apolipoprotein B Epitopes in Patients With Severe Coronary Artery Disease",
    year: "2026",
    journal: "Circulation Research",
    body: "**Roy P***, Parashar S*, Sidney J, Mehta M, Tandon I, Beddall M, Wang Y, Baranovskaya I, HOO AS, Leradi R, Agarwal G, Jordan W, McNamara CA, Sette A, Abdelsamed H # , Klaus Ley K #\n*equal contribution",
    link: "https://www.ahajournals.org/doi/10.1161/CIRCRESAHA.125.326804",
    featured: true,
  },
  {
    title: "Proinflammatory and cytotoxic CD38+HLA-DR+ effector memory CD8+ T cells are peripherally expanded in human cardiac allograft vasculopathy",
    year: "2025",
    journal: "American Journal of Transplantation. 2025; 26 (2): 276-290",
    body: "Tada Y, Suthahar SSA, **Roy P**, Suryawanshi V, Wu R, Wang E, Nettersheim FS, Bellapu A, Dobaczewska K, Kim C, Vaida F, Morris GP, Klaus Ley K, Kim PJ",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12769763/",
    featured: false,
  },
  {
    title: "ER stress induced mitochondrial dysfunction drives Treg instability in coronary artery disease",
    year: "2025",
    journal: "EMBO Molecular Medicine. 2025; 17 (12): 3250-3274",
    body: "Parashar S#, Oliaeimotlagh M*, **Roy P***, Lyu Q, Bellapu A, Fomin M, Kumar S, Wang Y, McSkimming CC, McNamara CA, Ley K#\n*equal contribution",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12686412/",
    featured: false,
  },
  {
    title: "Loss of effector Treg signature in APOB-reactive CD4+T cells in subjects with coronary artery disease",
    year: "2025",
    journal: "Nature Cardiovascular Research. 2025; 4(7):841–856",
    body: "**Roy P #** , Bellapu A, Suthahar SSA, Oliaeimotlagh M, Lyu Q, Parashar S, Kumar S, Makings J, Wu R, Mehta M, Chiang AWT, Sette A, McNamara CA, Ley K #\n#corresponding authors",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13245147/",
    featured: true,
  },
  {
    title: "PD1 and CD73 on naïve CD4+ T cells synergistically limit responses to self",
    year: "2025",
    journal: "Nature Immunology. 2025 Jan; 26(1):105-115",
    body: "Nettersheim FS*, Brunel S*, Sinkovits RS*, Suthahar SSA, **Roy P**, Billitti M, Kobiyama K, Alimadadi A, Bombin S, Lu L, Zoccheddu M, Oliaeimotlagh M, Benedict CA, Sette A, Ley K",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11697576/",
    featured: false,
  },
  {
    title: "Olfr2-positive macrophages originate from monocytes proliferate in situ and present a pro-inflammatory foamy-like phenotype",
    year: "2024",
    journal: "Cardiovascular Research. 2024 Nov 5; 120(13):1577-1589",
    body: "Suthahar SSA, Nettersheim FS, Alimadadi A, Wang E, Billitti M, Resto-Trujillo N, **Roy P**, Hedrick CC, Ley K # , Orecchioni M #",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12098008/",
    featured: false,
  },
  {
    title: "Breaking tolerance: the autoimmune aspect of atherosclerosis",
    year: "2024",
    journal: "Nature Reviews Immunology. 2024 Sep; 24(9):670-679",
    body: "Khan A, **Roy P**, Ley K",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11682649/",
    featured: false,
  },
  {
    title: "Identification of apolipoprotein B-reactive CDR3 motifs allow tracking of atherosclerosis-related memory CD4 + T cells in multiple donors",
    year: "2024",
    journal: "Frontiers in Immunology. 2024. Mar 20:15:1302031. doi:10.3389/fimmu.2024.1302031",
    body: "**Roy P***, Suthahar SSA*, Makings J, Ley K\n*equal contribution",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10988780/",
    featured: false,
  },
  {
    title: "Editorial: Role of innate and adaptive immune cells in the metabolic syndrome",
    year: "2024",
    journal: "Front. Cell. Dev. Biol. 2024. Feb 22:12:1383642. doi:10.3389/fcell.2024.1383642",
    body: "**Roy P #** , Winkels H, Orecchioni M, Quesada-Masachs E, Riffelmacher T #\n#corresponding authors",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10917939/",
    featured: false,
  },
  {
    title: "Identification of human exTregs as CD16+CD56+ cytotoxic CD4+ T cells",
    year: "2023",
    journal: "Nature Immunology. 2023 Oct; 24(10):1748-1761",
    body: "Freuchet A*, **Roy P***, Suthahar SSA, Oliaeimotlagh M, Kumar S, Orecchioni M, Ali AJ, Khan A, Makings J, Lyu Q, Winkels H, Wang E, Durant C, Ghosheh Y, Gulati R, Nettersheim F, Ley K\n*equal contribution",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11022744/",
    featured: true,
  },
  {
    title: "Single-cell transcriptomes and T cell receptors of vaccine-expanded apolipoprotein B-specific T cells.",
    year: "2023",
    journal: "Frontiers in Cardiovascular Medicine. 2023 Jan 5; 9:1076808",
    body: "Nettersheim FS, Ghosheh Y, Winkels H, Kobiyama K, Durant C, Armstrong SS, Brunel S, **Roy P**, Dileepan T, Jenkins M, Zajonc DM, Ley K.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9849899/",
    featured: false,
  },
  {
    title: "Titration of 124 antibodies using CITE-Seq on human PBMCs",
    year: "2022",
    journal: "Scientific Reports. 2022 Dec; 12(1):20817",
    body: "Nettersheim F, Armstrong S, Durant C, Blanco-Dominguez R, **Roy P**, Orecchioni M, Suryawanshi V, Ley K",
    link: "https://www.nature.com/articles/s41598-022-24371-7",
    featured: false,
  },
  {
    title: "Combined protein and transcript single-cell RNA sequencing in human peripheral blood mononuclear cells",
    year: "2022",
    journal: "BMC Biology. 2022 Sep 1; 20(1):193",
    body: "Vallejo J, Saigusa R, Gulati R, Armstrong Suthahar SS, Suryawanshi V, Alimadadi A, Durant CP, Ghosheh Y, **Roy P**, Ehinger E, Pattarabanjird T, Hanna DB, Landay AL, Tracy RP, Lazar JM, Mack WJ, Weber KM, Adimora AA, Hodis HN, Tien PC, Ofotokun I, Heath SL, Shemesh A, McNamara CA, Lanier LL, Hedrick CC, Kaplan RC, Ley K.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9434837/",
    featured: false,
  },
  {
    title: "Sex Differences in Coronary Artery Disease and Diabetes Revealed by scRNA-Seq and CITE-Seq of Human CD4+ T Cells",
    year: "2022",
    journal: "International Journal of Molecular Sciences. 2022 Aug 30; 23(17)",
    body: "Saigusa R, Vallejo J, Gulati R, Suthahar SSA, Suryawanshi V, Alimadadi A, Makings J, Durant CP, Freuchet A, **Roy P**, Ghosheh Y, Pandori W, Pattarabanjird T, Drago F, Taylor A, McNamara CA, Shemesh A, Lanier LL, Hedrick CC, Ley K",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9456056/",
    featured: false,
  },
  {
    title: "Immunodominant MHC-II (Major Histocompatibility Complex II) Restricted Epitopes in Human Apolipoprotein B",
    year: "2022",
    journal: "Circulation Research. 2022 Jul 22; 131(3):258-276",
    body: "**Roy P**, Sidney J, Lindestam Arlehamn CS, Phillips E, Mallal S, Armstrong Suthahar SS, Billitti M, Rubiro P, Marrama D, Drago F, Vallejo J, Suryawanshi V, Orecchioni M, Makings J, Kim PJ, McNamara CA, Peters B, Sette A, Ley K",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9536649/",
    featured: true,
  },
  {
    title: "Single cell transcriptomics and TCR reconstruction reveal CD4 T cell response to MHC-II-restricted APOB epitope in human cardiovascular disease",
    year: "2022",
    journal: "Nature Cardiovascular Research. 2022 May; 1(5):462-475",
    body: "Saigusa R, **Roy P**, Freuchet A, Gulati R, Ghosheh Y, Suthahar SSA, Durant CP, Hanna DB, Kiosses WB, Orecchioni M, Wen L, Wu R, Kuniholm MH, Landay AL, Anastos K, Tien PC, Gange SJ, Kassaye S, Vallejo J, Hedrick CC, Kwok WW, Sette A, Hodis HN, Kaplan RC, Ley K",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9383695/",
    featured: false,
  },
  {
    title: "How the immune system shapes atherosclerosis: roles of innate and adaptive immunity",
    year: "2022",
    journal: "Nature Reviews Immunology. 2022 Apr; 22(4): 251-265",
    body: "**Roy P**, Orecchioni M, Ley K",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10111155/",
    featured: true,
  },
  {
    title: "Olfactory receptor 2 in vascular macrophages drives atherosclerosis by NLRP3-dependent IL-1 production",
    year: "2022",
    journal: "Science. 2022 Jan 14; 375 (6577): 214-221",
    body: "Orecchioni M, Kobiyama K, Winkels H, Ghosheh Y, McArdle S, Mikulski Z, Kiosses WB, Fan Z, Wen L, Jung Y, **Roy P**, Ali AJ, Miyamoto Y, Mangan M, Makings J, Wang Z, Denn A, Vallejo J, Owens M, Durant CP, Braumann S, Mader N, Li L, Matsunami H, Eckmann L, Latz E, Wang Z, Hazen SL, Ley K.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9744443/",
    featured: false,
  },
  {
    title: "Autoimmune Regulator (AIRE) Deficiency Does Not Affect Atherosclerosis and CD4 T Cell Immune Tolerance to Apolipoprotein B",
    year: "2022",
    journal: "Frontiers in Cardiovascular Medicine. 2022 Jan 13; 8:812769",
    body: "Nettersheim FS, Braumann S, Kobiyama K, Orecchioni M, Vassallo M, Miller J, Ali A, **Roy P**, Saigusa R, Wolf D, Ley K, Winkels H",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8792778/",
    featured: false,
  },
  {
    title: "Role of the NF-κB system in context-specific tuning of the inflammatory gene response",
    year: "2021",
    journal: "Current Opinion in Immunology. 2021 Feb; 68:21-27",
    body: "Chawla M, **Roy P**, Basak S",
    link: "https://www.sciencedirect.com/science/article/pii/S0952791520300819?via%3Dihub",
    featured: false,
  },
  {
    title: "Kindlin-3 recruitment to the plasma membrane precedes high-affinity β2-integrin and neutrophil arrest from rolling",
    year: "2021",
    journal: "Blood. 2021 Jan 7; 137(1):29-38",
    body: "Wen L, Marki A, **Roy P**, McArdle S, Sun H, Fan Z, Gingras AR, Ginsberg MH, Ley K",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7808012/",
    featured: false,
  },
  {
    title: "Opportunities for an atherosclerosis vaccine: From mice to humans",
    year: "2020",
    journal: "Vaccine. 2020 Jun 9; 38(28): 4495-4506",
    body: "**Roy P***, Ali AJ*, Kobiyama K, Ghosheh Y, Ley K\n*equal contribution",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7939143/",
    featured: false,
  },
  {
    title: "Blind Spot: 18F-FDG PET Fails to Reveal Atherosclerosis Aggravated by Cancer Immunotherapy",
    year: "2020",
    journal: "Journal of the American College of Cardiology: CardioOncology. 2020 Nov, 2 (4) 611–613",
    body: "Ley K and **Roy P**",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8352285/",
    featured: false,
  },
  {
    title: "Immune Differentiation Regulator p100 Tunes NF-κB Responses to TNF",
    year: "2019",
    journal: "Frontiers in Immunology. 2019; 10:997",
    body: "Chatterjee B*, **Roy P***, Sarkar UA, Zhao M, Ratra Y, Singh A, Chawla M, De S, Gomes J, Sen R, Basak S\n*equal contribution",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6514058/",
    featured: false,
  },
  {
    title: "The NF-κB Activating Pathways in Multiple Myeloma",
    year: "2018",
    journal: "Biomedicines. 2018 May 16; 6(2)",
    body: "**Roy P**, Sarkar UA, Basak S",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6027071/",
    featured: false,
  },
  {
    title: "A TNF-p100 pathway subverts noncanonical NF-κB signaling in inflamed secondary lymphoid organs",
    year: "2017",
    journal: "EMBO Journal. 2017 Dec 1; 36(23): 3501-3516",
    body: "Mukherjee T, Chatterjee B, Dhar A, Bais SS, Chawla M, **Roy P**, George A, Bal V, Rath S, Basak S",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5709727/",
    featured: false,
  },
  {
    title: "Non-canonical NFκB mutations reinforce pro-survival TNF response in multiple myeloma through an autoregulatory RelB:p50 NFκB pathway",
    year: "2017",
    journal: "Oncogene. 2017 Mar; 36 (10): 1417-1429",
    body: "**Roy P**, Mukherjee T, Chatterjee B, Vijayaragavan B, Banoth B, Basak S",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5346295/",
    featured: false,
  },
  {
    title: "Stimulus-selective crosstalk via the NF-κB signaling system reinforces innate immune response to alleviate gut infection",
    year: "2015",
    journal: "Elife. 2015 Apr 23;4",
    body: "Banoth B, Chatterjee B, Vijayaragavan B, Prasad MV, **Roy P**, Basak S",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4432492/",
    featured: false,
  },
];

// How many papers show up in the "Publications" preview strip on the
// homepage. Change this one number to show more or fewer -- it'll pick
// from whichever papers are marked featured: true above (or just the
// first few, if none are marked featured), same as before.
const HOMEPAGE_PUBLICATIONS_COUNT = 5;

const GOOGLE_SCHOLAR_LINK = "https://scholar.google.com/citations?user=tWGg6zYAAAAJ&hl=en";
const PUBMED_LINK = "https://www.ncbi.nlm.nih.gov/myncbi/1JmoEfb5F5RkdS/bibliography/public/";

const RESEARCH_AREAS = [
  {
    number: "01",
    title: "Identification of dominant antigenic targets relevant to chronic inflammatory diseases",
    description:
      "T cell activity requires context-dependent recognition of a specific disease-related antigenic epitope in a protein. This specificity gives discriminatory power to probe immunological status more precisely. Only certain dominant antigenic regions in a protein are preferentially recognized by T cell receptors (TCRs). We utilize an integrated pipeline that involves in-silico tools and immunological assays to predict and validate the ability of specific protein sequences in triggering activation of T cells that can attack host tissue and promote chronic diseases.",
    image: "",
  },
  {
    number: "02",
    title: "Delineating detailed molecular features of disease-associated pathogenic immune cells.",
    description:
      "Different lineages of T cells express unique combinations of molecules that determine their functional program. The balance across these subtypes determines disease outcome. The molecular specificity of a TCR-antigen complex creates the possibility to use TCRs as molecular “barcodes” and track disease-specific pathogenic T cells within an entire community of immune cells. To do this, we combine our immunological assays with high-throughput sequencing techniques to chart the molecular details of an “individual” T cell.",
    image: "",
  },
  {
    number: "03",
    title: "Uncovering genetic and microenvironmental factors involved in immune cell reprogramming.",
    description:
      "The human population is genetically diverse and is continuously exposed to a wide variety of environmental factors throughout their long lifespan. The spectrum of immune-mediated disorders can affect almost any organ in our body. Environmental factors cooperate to accelerate genetic predisposition, thereby promoting widespread mortality and disability due to inflammatory diseases. We are interested in understanding how these factors contribute to the progression of chronic diseases via immune cell reprogramming.",
    image: "",
  },
];

const NEWS_UPDATES = [
  { date: "June 12, 2026", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
  { date: "March 28, 2026", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." },
  { date: "January 9, 2026", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { date: "November 4, 2025", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
  { date: "September 17, 2025", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { date: "June 2, 2025", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const ALUMNI = [
  { name: "Anagha Guruprasad", note: "(Summer Intern, June 2025 - July 2025)" },
  { name: "Harshith V Reddy", note: "(Summer Intern, June 2025 - July 2025)" },
  { name: "Bharati Charkraborty", note: "(Project Assistant, April 2025 - December 2025)" },
  { name: "Hrittika Roy", note: "(Project Assistant, April 2025 - December 2025)" },
  { name: "Harshini Suresha", note: "(Internship & Thesis Dissertation, June 2025 - May 2026): Currently a MSc student in King's College London, UK" },
];


const RESEARCH_FOCUS_BLURB =
  "The immune cells scan every part of our body and use diverse mechanisms to find and attack harmful foreign entities. This protective physiological process is known as inflammation. Excessive and inappropriate inflammation is detrimental and can cause severe damage. Under normal conditions, multiple regulatory processes ensure that homeostasis is restored after the danger is eliminated. However, if the regulatory checkpoints fail, then inflammation cannot be resolved. The fighting continues and the damage remains unrepaired. Our lab is focused on gaining in-depth understanding of this obverse side of immune cell-mediated inflammation which is now implicated in the pathophysiology of several major human disorders. Such detailed definition of “good” vs “bad” immune cell populations has immense clinical value in detecting and mitigating disease-specific inflammatory risks in an individual. Currently, we are focused on exploring the role of antigen-specific T cells in chronic metabolic disorders like cardiovascular disease.";
const JOIN_LAB_BLURB =
  "Scroll down to see how you could be a wonderful addition to our team!";
const GET_IN_TOUCH_BLURB =
  "";


const CONTACT_ADDRESS = "Dept. of Biochemistry, Lab FE-11\nBiological Science Division\nIndian Institute of Science\nCV Raman Road\nBangalore 560012\nKarnataka, India";
const CONTACT_EMAIL = "proy@iisc.ac.in";
const CONTACT_PHONE = "+91-08-2293-4024";

const FUNDING_AGENCIES = [
  { name: "Funding Agency One", logo: "images/anrf.png" },
  { name: "Funding Agency Two", logo: "images/iisc1.png" },
  { name: "Funding Agency Three", logo: "images/infosys1.png" },
];

// The short paragraph shown under the "Funding Agencies" heading --
// meant for an acknowledgement/thank-you line about your funding.
const FUNDING_ACKNOWLEDGEMENT =
  "A heartfelt thank you to the sponsoring organisations for supporting our research.";

/* =============================================================================
   STOP -- EVERYTHING BELOW THIS POINT IS TECHNICAL CODE
   =============================================================================
   You don't need to read or edit anything past this point to update the
   site's text, team, positions, or images -- that was all covered above.
   Everything from here down is what actually builds and runs the page.
   ============================================================================= */

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function jc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lu={exports:{}},pl={},iu={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),Cc=Symbol.for("react.portal"),Ec=Symbol.for("react.fragment"),zc=Symbol.for("react.strict_mode"),_c=Symbol.for("react.profiler"),Tc=Symbol.for("react.provider"),Nc=Symbol.for("react.context"),Lc=Symbol.for("react.forward_ref"),Pc=Symbol.for("react.suspense"),Mc=Symbol.for("react.memo"),Fc=Symbol.for("react.lazy"),Ko=Symbol.iterator;function Rc(e){return e===null||typeof e!="object"?null:(e=Ko&&e[Ko]||e["@@iterator"],typeof e=="function"?e:null)}var ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},su=Object.assign,uu={};function vn(e,t,n){this.props=e,this.context=t,this.refs=uu,this.updater=n||ou}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function au(){}au.prototype=vn.prototype;function Ji(e,t,n){this.props=e,this.context=t,this.refs=uu,this.updater=n||ou}var qi=Ji.prototype=new au;qi.constructor=Ji;su(qi,vn.prototype);qi.isPureReactComponent=!0;var Yo=Array.isArray,cu=Object.prototype.hasOwnProperty,bi={current:null},fu={key:!0,ref:!0,__self:!0,__source:!0};function du(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)cu.call(t,r)&&!fu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:ir,type:e,key:i,ref:o,props:l,_owner:bi.current}}function Ic(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function eo(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function Oc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xo=/\/+/g;function Ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Oc(""+e.key):t.toString(36)}function Lr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ir:case Cc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Ll(o,0):r,Yo(l)?(n="",e!=null&&(n=e.replace(Xo,"$&/")+"/"),Lr(l,t,n,"",function(f){return f})):l!=null&&(eo(l)&&(l=Ic(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Xo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Yo(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Ll(i,s);o+=Lr(i,t,n,a,l)}else if(a=Rc(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Ll(i,s++),o+=Lr(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function dr(e,t,n){if(e==null)return e;var r=[],l=0;return Lr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Dc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Pr={transition:null},$c={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Pr,ReactCurrentOwner:bi};function pu(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:dr,forEach:function(e,t,n){dr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return dr(e,function(){t++}),t},toArray:function(e){return dr(e,function(t){return t})||[]},only:function(e){if(!eo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=vn;M.Fragment=Ec;M.Profiler=_c;M.PureComponent=Ji;M.StrictMode=zc;M.Suspense=Pc;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$c;M.act=pu;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=su({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=bi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)cu.call(t,a)&&!fu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:ir,type:e.type,key:l,ref:i,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:Nc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tc,_context:e},e.Consumer=e};M.createElement=du;M.createFactory=function(e){var t=du.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Lc,render:e}};M.isValidElement=eo;M.lazy=function(e){return{$$typeof:Fc,_payload:{_status:-1,_result:e},_init:Dc}};M.memo=function(e,t){return{$$typeof:Mc,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Pr.transition;Pr.transition={};try{e()}finally{Pr.transition=t}};M.unstable_act=pu;M.useCallback=function(e,t){return de.current.useCallback(e,t)};M.useContext=function(e){return de.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return de.current.useDeferredValue(e)};M.useEffect=function(e,t){return de.current.useEffect(e,t)};M.useId=function(){return de.current.useId()};M.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return de.current.useMemo(e,t)};M.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};M.useRef=function(e){return de.current.useRef(e)};M.useState=function(e){return de.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return de.current.useTransition()};M.version="18.3.1";iu.exports=M;var O=iu.exports;const Wc=jc(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=O,Uc=Symbol.for("react.element"),Bc=Symbol.for("react.fragment"),Hc=Object.prototype.hasOwnProperty,Vc=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qc={key:!0,ref:!0,__self:!0,__source:!0};function mu(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Hc.call(t,r)&&!Qc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Uc,type:e,key:i,ref:o,props:l,_owner:Vc.current}}pl.Fragment=Bc;pl.jsx=mu;pl.jsxs=mu;lu.exports=pl;var u=lu.exports,ri={},hu={exports:{}},je={},yu={exports:{}},gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,L){var P=C.length;C.push(L);e:for(;0<P;){var K=P-1>>>1,ee=C[K];if(0<l(ee,L))C[K]=L,C[P]=ee,P=K;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var L=C[0],P=C.pop();if(P!==L){C[0]=P;e:for(var K=0,ee=C.length,cr=ee>>>1;K<cr;){var _t=2*(K+1)-1,Nl=C[_t],Tt=_t+1,fr=C[Tt];if(0>l(Nl,P))Tt<ee&&0>l(fr,Nl)?(C[K]=fr,C[Tt]=P,K=Tt):(C[K]=Nl,C[_t]=P,K=_t);else if(Tt<ee&&0>l(fr,P))C[K]=fr,C[Tt]=P,K=Tt;else break e}}return L}function l(C,L){var P=C.sortIndex-L.sortIndex;return P!==0?P:C.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],f=[],h=1,m=null,y=3,w=!1,k=!1,S=!1,I=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var L=n(f);L!==null;){if(L.callback===null)r(f);else if(L.startTime<=C)r(f),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(f)}}function g(C){if(S=!1,p(C),!k)if(n(a)!==null)k=!0,Be(j);else{var L=n(f);L!==null&&zt(g,L.startTime-C)}}function j(C,L){k=!1,S&&(S=!1,d(T),T=-1),w=!0;var P=y;try{for(p(L),m=n(a);m!==null&&(!(m.expirationTime>L)||C&&!G());){var K=m.callback;if(typeof K=="function"){m.callback=null,y=m.priorityLevel;var ee=K(m.expirationTime<=L);L=e.unstable_now(),typeof ee=="function"?m.callback=ee:m===n(a)&&r(a),p(L)}else r(a);m=n(a)}if(m!==null)var cr=!0;else{var _t=n(f);_t!==null&&zt(g,_t.startTime-L),cr=!1}return cr}finally{m=null,y=P,w=!1}}var z=!1,_=null,T=-1,A=5,N=-1;function G(){return!(e.unstable_now()-N<A)}function Ee(){if(_!==null){var C=e.unstable_now();N=C;var L=!0;try{L=_(!0,C)}finally{L?b():(z=!1,_=null)}}else z=!1}var b;if(typeof c=="function")b=function(){c(Ee)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,_e=ze.port2;ze.port1.onmessage=Ee,b=function(){_e.postMessage(null)}}else b=function(){I(Ee,0)};function Be(C){_=C,z||(z=!0,b())}function zt(C,L){T=I(function(){C(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Be(j))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(y){case 1:case 2:case 3:var L=3;break;default:L=y}var P=y;y=L;try{return C()}finally{y=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=y;y=C;try{return L()}finally{y=P}},e.unstable_scheduleCallback=function(C,L,P){var K=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?K+P:K):P=K,C){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=P+ee,C={id:h++,callback:L,priorityLevel:C,startTime:P,expirationTime:ee,sortIndex:-1},P>K?(C.sortIndex=P,t(f,C),n(a)===null&&C===n(f)&&(S?(d(T),T=-1):S=!0,zt(g,P-K))):(C.sortIndex=ee,t(a,C),k||w||(k=!0,Be(j))),C},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(C){var L=y;return function(){var P=y;y=L;try{return C.apply(this,arguments)}finally{y=P}}}})(gu);yu.exports=gu;var Gc=yu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc=O,Se=Gc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vu=new Set,Bn={};function Ut(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Bn[e]=t,e=0;e<t.length;e++)vu.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),li=Object.prototype.hasOwnProperty,Yc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zo={},Jo={};function Xc(e){return li.call(Jo,e)?!0:li.call(Zo,e)?!1:Yc.test(e)?Jo[e]=!0:(Zo[e]=!0,!1)}function Zc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jc(e,t,n,r){if(t===null||typeof t>"u"||Zc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var to=/[\-:]([a-z])/g;function no(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(to,no);ie[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(to,no);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(to,no);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ro(e,t,n,r){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jc(t,n,l,r)&&(n=null),r||l===null?Xc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),lo=Symbol.for("react.strict_mode"),ii=Symbol.for("react.profiler"),xu=Symbol.for("react.provider"),wu=Symbol.for("react.context"),io=Symbol.for("react.forward_ref"),oi=Symbol.for("react.suspense"),si=Symbol.for("react.suspense_list"),oo=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),ku=Symbol.for("react.offscreen"),qo=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=qo&&e[qo]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Pl;function Nn(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var Ml=!1;function Fl(e,t){if(!e||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nn(e):""}function qc(e){switch(e.tag){case 5:return Nn(e.type);case 16:return Nn("Lazy");case 13:return Nn("Suspense");case 19:return Nn("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function ui(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qt:return"Fragment";case Vt:return"Portal";case ii:return"Profiler";case lo:return"StrictMode";case oi:return"Suspense";case si:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wu:return(e.displayName||"Context")+".Consumer";case xu:return(e._context.displayName||"Context")+".Provider";case io:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oo:return t=e.displayName||null,t!==null?t:ui(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return ui(e(t))}catch{}}return null}function bc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ui(t);case 8:return t===lo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Su(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ef(e){var t=Su(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mr(e){e._valueTracker||(e._valueTracker=ef(e))}function ju(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Su(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ai(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cu(e,t){t=t.checked,t!=null&&ro(e,"checked",t,!1)}function ci(e,t){Cu(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fi(e,t.type,n):t.hasOwnProperty("defaultValue")&&fi(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function es(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fi(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function rn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function di(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ts(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Ln(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function Eu(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ns(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hr,_u=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tf=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){tf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function Tu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function Nu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Tu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var nf=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mi(e,t){if(t){if(nf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function hi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function so(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gi=null,ln=null,on=null;function rs(e){if(e=ur(e)){if(typeof gi!="function")throw Error(x(280));var t=e.stateNode;t&&(t=vl(t),gi(e.stateNode,e.type,t))}}function Lu(e){ln?on?on.push(e):on=[e]:ln=e}function Pu(){if(ln){var e=ln,t=on;if(on=ln=null,rs(e),t)for(e=0;e<t.length;e++)rs(t[e])}}function Mu(e,t){return e(t)}function Fu(){}var Rl=!1;function Ru(e,t,n){if(Rl)return e(t,n);Rl=!0;try{return Mu(e,t,n)}finally{Rl=!1,(ln!==null||on!==null)&&(Fu(),Pu())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var vi=!1;if(tt)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){vi=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{vi=!1}function rf(e,t,n,r,l,i,o,s,a){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(h){this.onError(h)}}var Rn=!1,Hr=null,Vr=!1,xi=null,lf={onError:function(e){Rn=!0,Hr=e}};function of(e,t,n,r,l,i,o,s,a){Rn=!1,Hr=null,rf.apply(lf,arguments)}function sf(e,t,n,r,l,i,o,s,a){if(of.apply(this,arguments),Rn){if(Rn){var f=Hr;Rn=!1,Hr=null}else throw Error(x(198));Vr||(Vr=!0,xi=f)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Iu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ls(e){if(Bt(e)!==e)throw Error(x(188))}function uf(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ls(l),e;if(i===r)return ls(l),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Ou(e){return e=uf(e),e!==null?Du(e):null}function Du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Du(e);if(t!==null)return t;e=e.sibling}return null}var $u=Se.unstable_scheduleCallback,is=Se.unstable_cancelCallback,af=Se.unstable_shouldYield,cf=Se.unstable_requestPaint,X=Se.unstable_now,ff=Se.unstable_getCurrentPriorityLevel,uo=Se.unstable_ImmediatePriority,Wu=Se.unstable_UserBlockingPriority,Qr=Se.unstable_NormalPriority,df=Se.unstable_LowPriority,Au=Se.unstable_IdlePriority,ml=null,Ke=null;function pf(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:yf,mf=Math.log,hf=Math.LN2;function yf(e){return e>>>=0,e===0?32:31-(mf(e)/hf|0)|0}var yr=64,gr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Pn(s):(i&=o,i!==0&&(r=Pn(i)))}else o=n&~l,o!==0?r=Pn(o):i!==0&&(r=Pn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),l=1<<n,r|=e[n],t&=~l;return r}function gf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-$e(i),s=1<<o,a=l[o];a===-1?(!(s&n)||s&r)&&(l[o]=gf(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uu(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function xf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-$e(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ao(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function Bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hu,co,Vu,Qu,Gu,ki=!1,vr=[],pt=null,mt=null,ht=null,Qn=new Map,Gn=new Map,at=[],wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function os(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function jn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ur(t),t!==null&&co(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function kf(e,t,n,r,l){switch(t){case"focusin":return pt=jn(pt,e,t,n,r,l),!0;case"dragenter":return mt=jn(mt,e,t,n,r,l),!0;case"mouseover":return ht=jn(ht,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Qn.set(i,jn(Qn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Gn.set(i,jn(Gn.get(i)||null,e,t,n,r,l)),!0}return!1}function Ku(e){var t=Pt(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=Iu(n),t!==null){e.blockedOn=t,Gu(e.priority,function(){Vu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Si(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yi=r,n.target.dispatchEvent(r),yi=null}else return t=ur(n),t!==null&&co(t),e.blockedOn=n,!1;t.shift()}return!0}function ss(e,t,n){Mr(e)&&n.delete(t)}function Sf(){ki=!1,pt!==null&&Mr(pt)&&(pt=null),mt!==null&&Mr(mt)&&(mt=null),ht!==null&&Mr(ht)&&(ht=null),Qn.forEach(ss),Gn.forEach(ss)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,ki||(ki=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Sf)))}function Kn(e){function t(l){return Cn(l,e)}if(0<vr.length){Cn(vr[0],e);for(var n=1;n<vr.length;n++){var r=vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&Cn(pt,e),mt!==null&&Cn(mt,e),ht!==null&&Cn(ht,e),Qn.forEach(t),Gn.forEach(t),n=0;n<at.length;n++)r=at[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)Ku(n),n.blockedOn===null&&at.shift()}var sn=it.ReactCurrentBatchConfig,Kr=!0;function jf(e,t,n,r){var l=R,i=sn.transition;sn.transition=null;try{R=1,fo(e,t,n,r)}finally{R=l,sn.transition=i}}function Cf(e,t,n,r){var l=R,i=sn.transition;sn.transition=null;try{R=4,fo(e,t,n,r)}finally{R=l,sn.transition=i}}function fo(e,t,n,r){if(Kr){var l=Si(e,t,n,r);if(l===null)Ql(e,t,r,Yr,n),os(e,r);else if(kf(l,e,t,n,r))r.stopPropagation();else if(os(e,r),t&4&&-1<wf.indexOf(e)){for(;l!==null;){var i=ur(l);if(i!==null&&Hu(i),i=Si(e,t,n,r),i===null&&Ql(e,t,r,Yr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var Yr=null;function Si(e,t,n,r){if(Yr=null,e=so(r),e=Pt(e),e!==null)if(t=Bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Iu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yr=e,null}function Yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ff()){case uo:return 1;case Wu:return 4;case Qr:case df:return 16;case Au:return 536870912;default:return 16}default:return 16}}var ft=null,po=null,Fr=null;function Xu(){if(Fr)return Fr;var e,t=po,n=t.length,r,l="value"in ft?ft.value:ft.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Fr=l.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function us(){return!1}function Ce(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xr:us,this.isPropagationStopped=us,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mo=Ce(xn),sr=V({},xn,{view:0,detail:0}),Ef=Ce(sr),Ol,Dl,En,hl=V({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ho,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Ol=e.screenX-En.screenX,Dl=e.screenY-En.screenY):Dl=Ol=0,En=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),as=Ce(hl),zf=V({},hl,{dataTransfer:0}),_f=Ce(zf),Tf=V({},sr,{relatedTarget:0}),$l=Ce(Tf),Nf=V({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lf=Ce(Nf),Pf=V({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mf=Ce(Pf),Ff=V({},xn,{data:0}),cs=Ce(Ff),Rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},If={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Df(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Of[e])?!!t[e]:!1}function ho(){return Df}var $f=V({},sr,{key:function(e){if(e.key){var t=Rf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?If[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ho,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wf=Ce($f),Af=V({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fs=Ce(Af),Uf=V({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ho}),Bf=Ce(Uf),Hf=V({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vf=Ce(Hf),Qf=V({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gf=Ce(Qf),Kf=[9,13,27,32],yo=tt&&"CompositionEvent"in window,In=null;tt&&"documentMode"in document&&(In=document.documentMode);var Yf=tt&&"TextEvent"in window&&!In,Zu=tt&&(!yo||In&&8<In&&11>=In),ds=" ",ps=!1;function Ju(e,t){switch(e){case"keyup":return Kf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function Xf(e,t){switch(e){case"compositionend":return qu(t);case"keypress":return t.which!==32?null:(ps=!0,ds);case"textInput":return e=t.data,e===ds&&ps?null:e;default:return null}}function Zf(e,t){if(Gt)return e==="compositionend"||!yo&&Ju(e,t)?(e=Xu(),Fr=po=ft=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zu&&t.locale!=="ko"?null:t.data;default:return null}}var Jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jf[e.type]:t==="textarea"}function bu(e,t,n,r){Lu(r),t=Xr(t,"onChange"),0<t.length&&(n=new mo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Yn=null;function qf(e){ca(e,0)}function yl(e){var t=Xt(e);if(ju(t))return e}function bf(e,t){if(e==="change")return t}var ea=!1;if(tt){var Wl;if(tt){var Al="oninput"in document;if(!Al){var hs=document.createElement("div");hs.setAttribute("oninput","return;"),Al=typeof hs.oninput=="function"}Wl=Al}else Wl=!1;ea=Wl&&(!document.documentMode||9<document.documentMode)}function ys(){On&&(On.detachEvent("onpropertychange",ta),Yn=On=null)}function ta(e){if(e.propertyName==="value"&&yl(Yn)){var t=[];bu(t,Yn,e,so(e)),Ru(qf,t)}}function ed(e,t,n){e==="focusin"?(ys(),On=t,Yn=n,On.attachEvent("onpropertychange",ta)):e==="focusout"&&ys()}function td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(Yn)}function nd(e,t){if(e==="click")return yl(t)}function rd(e,t){if(e==="input"||e==="change")return yl(t)}function ld(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:ld;function Xn(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!li.call(t,l)||!Ae(e[l],t[l]))return!1}return!0}function gs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vs(e,t){var n=gs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gs(n)}}function na(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?na(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ra(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function id(e){var t=ra(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&na(n.ownerDocument.documentElement,n)){if(r!==null&&go(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=vs(n,i);var o=vs(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var od=tt&&"documentMode"in document&&11>=document.documentMode,Kt=null,ji=null,Dn=null,Ci=!1;function xs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ci||Kt==null||Kt!==Br(r)||(r=Kt,"selectionStart"in r&&go(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Xn(Dn,r)||(Dn=r,r=Xr(ji,"onSelect"),0<r.length&&(t=new mo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Ul={},la={};tt&&(la=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function gl(e){if(Ul[e])return Ul[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in la)return Ul[e]=t[n];return e}var ia=gl("animationend"),oa=gl("animationiteration"),sa=gl("animationstart"),ua=gl("transitionend"),aa=new Map,ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){aa.set(e,t),Ut(t,[e])}for(var Bl=0;Bl<ws.length;Bl++){var Hl=ws[Bl],sd=Hl.toLowerCase(),ud=Hl[0].toUpperCase()+Hl.slice(1);jt(sd,"on"+ud)}jt(ia,"onAnimationEnd");jt(oa,"onAnimationIteration");jt(sa,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(ua,"onTransitionEnd");fn("onMouseEnter",["mouseout","mouseover"]);fn("onMouseLeave",["mouseout","mouseover"]);fn("onPointerEnter",["pointerout","pointerover"]);fn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ad=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function ks(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sf(r,t,void 0,e),e.currentTarget=null}function ca(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,f=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;ks(l,s,f),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,f=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;ks(l,s,f),i=a}}}if(Vr)throw e=xi,Vr=!1,xi=null,e}function $(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(fa(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),fa(n,e,r,t)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[kr]){e[kr]=!0,vu.forEach(function(n){n!=="selectionchange"&&(ad.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kr]||(t[kr]=!0,Vl("selectionchange",!1,t))}}function fa(e,t,n,r){switch(Yu(t)){case 1:var l=jf;break;case 4:l=Cf;break;default:l=fo}n=l.bind(null,t,n,e),l=void 0,!vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Pt(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Ru(function(){var f=i,h=so(n),m=[];e:{var y=aa.get(e);if(y!==void 0){var w=mo,k=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":w=Wf;break;case"focusin":k="focus",w=$l;break;case"focusout":k="blur",w=$l;break;case"beforeblur":case"afterblur":w=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=as;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=_f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Bf;break;case ia:case oa:case sa:w=Lf;break;case ua:w=Vf;break;case"scroll":w=Ef;break;case"wheel":w=Gf;break;case"copy":case"cut":case"paste":w=Mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=fs}var S=(t&4)!==0,I=!S&&e==="scroll",d=S?y!==null?y+"Capture":null:y;S=[];for(var c=f,p;c!==null;){p=c;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,d!==null&&(g=Vn(c,d),g!=null&&S.push(Jn(c,g,p)))),I)break;c=c.return}0<S.length&&(y=new w(y,k,null,n,h),m.push({event:y,listeners:S}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",y&&n!==yi&&(k=n.relatedTarget||n.fromElement)&&(Pt(k)||k[nt]))break e;if((w||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=f,k=k?Pt(k):null,k!==null&&(I=Bt(k),k!==I||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=f),w!==k)){if(S=as,g="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=fs,g="onPointerLeave",d="onPointerEnter",c="pointer"),I=w==null?y:Xt(w),p=k==null?y:Xt(k),y=new S(g,c+"leave",w,n,h),y.target=I,y.relatedTarget=p,g=null,Pt(h)===f&&(S=new S(d,c+"enter",k,n,h),S.target=p,S.relatedTarget=I,g=S),I=g,w&&k)t:{for(S=w,d=k,c=0,p=S;p;p=Ht(p))c++;for(p=0,g=d;g;g=Ht(g))p++;for(;0<c-p;)S=Ht(S),c--;for(;0<p-c;)d=Ht(d),p--;for(;c--;){if(S===d||d!==null&&S===d.alternate)break t;S=Ht(S),d=Ht(d)}S=null}else S=null;w!==null&&Ss(m,y,w,S,!1),k!==null&&I!==null&&Ss(m,I,k,S,!0)}}e:{if(y=f?Xt(f):window,w=y.nodeName&&y.nodeName.toLowerCase(),w==="select"||w==="input"&&y.type==="file")var j=bf;else if(ms(y))if(ea)j=rd;else{j=td;var z=ed}else(w=y.nodeName)&&w.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(j=nd);if(j&&(j=j(e,f))){bu(m,j,n,h);break e}z&&z(e,y,f),e==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&fi(y,"number",y.value)}switch(z=f?Xt(f):window,e){case"focusin":(ms(z)||z.contentEditable==="true")&&(Kt=z,ji=f,Dn=null);break;case"focusout":Dn=ji=Kt=null;break;case"mousedown":Ci=!0;break;case"contextmenu":case"mouseup":case"dragend":Ci=!1,xs(m,n,h);break;case"selectionchange":if(od)break;case"keydown":case"keyup":xs(m,n,h)}var _;if(yo)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Gt?Ju(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Zu&&n.locale!=="ko"&&(Gt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Gt&&(_=Xu()):(ft=h,po="value"in ft?ft.value:ft.textContent,Gt=!0)),z=Xr(f,T),0<z.length&&(T=new cs(T,e,null,n,h),m.push({event:T,listeners:z}),_?T.data=_:(_=qu(n),_!==null&&(T.data=_)))),(_=Yf?Xf(e,n):Zf(e,n))&&(f=Xr(f,"onBeforeInput"),0<f.length&&(h=new cs("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:f}),h.data=_))}ca(m,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Vn(e,n),i!=null&&r.unshift(Jn(e,i,l)),i=Vn(e,t),i!=null&&r.push(Jn(e,i,l))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ss(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,f=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&f!==null&&(s=f,l?(a=Vn(n,i),a!=null&&o.unshift(Jn(n,a,s))):l||(a=Vn(n,i),a!=null&&o.push(Jn(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var cd=/\r\n?/g,fd=/\u0000|\uFFFD/g;function js(e){return(typeof e=="string"?e:""+e).replace(cd,`
`).replace(fd,"")}function Sr(e,t,n){if(t=js(t),js(e)!==t&&n)throw Error(x(425))}function Zr(){}var Ei=null,zi=null;function _i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,dd=typeof clearTimeout=="function"?clearTimeout:void 0,Cs=typeof Promise=="function"?Promise:void 0,pd=typeof queueMicrotask=="function"?queueMicrotask:typeof Cs<"u"?function(e){return Cs.resolve(null).then(e).catch(md)}:Ti;function md(e){setTimeout(function(){throw e})}function Gl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Kn(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Es(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+wn,qn="__reactProps$"+wn,nt="__reactContainer$"+wn,Ni="__reactEvents$"+wn,hd="__reactListeners$"+wn,yd="__reactHandles$"+wn;function Pt(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Es(e);e!==null;){if(n=e[Qe])return n;e=Es(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[Qe]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function vl(e){return e[qn]||null}var Li=[],Zt=-1;function Ct(e){return{current:e}}function W(e){0>Zt||(e.current=Li[Zt],Li[Zt]=null,Zt--)}function D(e,t){Zt++,Li[Zt]=e.current,e.current=t}var St={},ae=Ct(St),ye=Ct(!1),Ot=St;function dn(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function Jr(){W(ye),W(ae)}function zs(e,t,n){if(ae.current!==St)throw Error(x(168));D(ae,t),D(ye,n)}function da(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,bc(e)||"Unknown",l));return V({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,Ot=ae.current,D(ae,e),D(ye,ye.current),!0}function _s(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=da(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,W(ye),W(ae),D(ae,e)):W(ye),D(ye,n)}var Ze=null,xl=!1,Kl=!1;function pa(e){Ze===null?Ze=[e]:Ze.push(e)}function gd(e){xl=!0,pa(e)}function Et(){if(!Kl&&Ze!==null){Kl=!0;var e=0,t=R;try{var n=Ze;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,xl=!1}catch(l){throw Ze!==null&&(Ze=Ze.slice(e+1)),$u(uo,Et),l}finally{R=t,Kl=!1}}return null}var Jt=[],qt=0,br=null,el=0,Te=[],Ne=0,Dt=null,Je=1,qe="";function Nt(e,t){Jt[qt++]=el,Jt[qt++]=br,br=e,el=t}function ma(e,t,n){Te[Ne++]=Je,Te[Ne++]=qe,Te[Ne++]=Dt,Dt=e;var r=Je;e=qe;var l=32-$e(r)-1;r&=~(1<<l),n+=1;var i=32-$e(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Je=1<<32-$e(t)+l|n<<l|r,qe=i+e}else Je=1<<i|n<<l|r,qe=e}function vo(e){e.return!==null&&(Nt(e,1),ma(e,1,0))}function xo(e){for(;e===br;)br=Jt[--qt],Jt[qt]=null,el=Jt[--qt],Jt[qt]=null;for(;e===Dt;)Dt=Te[--Ne],Te[Ne]=null,qe=Te[--Ne],Te[Ne]=null,Je=Te[--Ne],Te[Ne]=null}var ke=null,we=null,U=!1,De=null;function ha(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ts(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:Je,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mi(e){if(U){var t=we;if(t){var n=t;if(!Ts(e,t)){if(Pi(e))throw Error(x(418));t=yt(n.nextSibling);var r=ke;t&&Ts(e,t)?ha(r,n):(e.flags=e.flags&-4097|2,U=!1,ke=e)}}else{if(Pi(e))throw Error(x(418));e.flags=e.flags&-4097|2,U=!1,ke=e}}}function Ns(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function jr(e){if(e!==ke)return!1;if(!U)return Ns(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_i(e.type,e.memoizedProps)),t&&(t=we)){if(Pi(e))throw ya(),Error(x(418));for(;t;)ha(e,t),t=yt(t.nextSibling)}if(Ns(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?yt(e.stateNode.nextSibling):null;return!0}function ya(){for(var e=we;e;)e=yt(e.nextSibling)}function pn(){we=ke=null,U=!1}function wo(e){De===null?De=[e]:De.push(e)}var vd=it.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ls(e){var t=e._init;return t(e._payload)}function ga(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function l(d,c){return d=wt(d,c),d.index=0,d.sibling=null,d}function i(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,p,g){return c===null||c.tag!==6?(c=ei(p,d.mode,g),c.return=d,c):(c=l(c,p),c.return=d,c)}function a(d,c,p,g){var j=p.type;return j===Qt?h(d,c,p.props.children,g,p.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===st&&Ls(j)===c.type)?(g=l(c,p.props),g.ref=zn(d,c,p),g.return=d,g):(g=Ur(p.type,p.key,p.props,null,d.mode,g),g.ref=zn(d,c,p),g.return=d,g)}function f(d,c,p,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ti(p,d.mode,g),c.return=d,c):(c=l(c,p.children||[]),c.return=d,c)}function h(d,c,p,g,j){return c===null||c.tag!==7?(c=It(p,d.mode,g,j),c.return=d,c):(c=l(c,p),c.return=d,c)}function m(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ei(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case pr:return p=Ur(c.type,c.key,c.props,null,d.mode,p),p.ref=zn(d,null,c),p.return=d,p;case Vt:return c=ti(c,d.mode,p),c.return=d,c;case st:var g=c._init;return m(d,g(c._payload),p)}if(Ln(c)||kn(c))return c=It(c,d.mode,p,null),c.return=d,c;Cr(d,c)}return null}function y(d,c,p,g){var j=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(d,c,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pr:return p.key===j?a(d,c,p,g):null;case Vt:return p.key===j?f(d,c,p,g):null;case st:return j=p._init,y(d,c,j(p._payload),g)}if(Ln(p)||kn(p))return j!==null?null:h(d,c,p,g,null);Cr(d,p)}return null}function w(d,c,p,g,j){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(p)||null,s(c,d,""+g,j);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pr:return d=d.get(g.key===null?p:g.key)||null,a(c,d,g,j);case Vt:return d=d.get(g.key===null?p:g.key)||null,f(c,d,g,j);case st:var z=g._init;return w(d,c,p,z(g._payload),j)}if(Ln(g)||kn(g))return d=d.get(p)||null,h(c,d,g,j,null);Cr(c,g)}return null}function k(d,c,p,g){for(var j=null,z=null,_=c,T=c=0,A=null;_!==null&&T<p.length;T++){_.index>T?(A=_,_=null):A=_.sibling;var N=y(d,_,p[T],g);if(N===null){_===null&&(_=A);break}e&&_&&N.alternate===null&&t(d,_),c=i(N,c,T),z===null?j=N:z.sibling=N,z=N,_=A}if(T===p.length)return n(d,_),U&&Nt(d,T),j;if(_===null){for(;T<p.length;T++)_=m(d,p[T],g),_!==null&&(c=i(_,c,T),z===null?j=_:z.sibling=_,z=_);return U&&Nt(d,T),j}for(_=r(d,_);T<p.length;T++)A=w(_,d,T,p[T],g),A!==null&&(e&&A.alternate!==null&&_.delete(A.key===null?T:A.key),c=i(A,c,T),z===null?j=A:z.sibling=A,z=A);return e&&_.forEach(function(G){return t(d,G)}),U&&Nt(d,T),j}function S(d,c,p,g){var j=kn(p);if(typeof j!="function")throw Error(x(150));if(p=j.call(p),p==null)throw Error(x(151));for(var z=j=null,_=c,T=c=0,A=null,N=p.next();_!==null&&!N.done;T++,N=p.next()){_.index>T?(A=_,_=null):A=_.sibling;var G=y(d,_,N.value,g);if(G===null){_===null&&(_=A);break}e&&_&&G.alternate===null&&t(d,_),c=i(G,c,T),z===null?j=G:z.sibling=G,z=G,_=A}if(N.done)return n(d,_),U&&Nt(d,T),j;if(_===null){for(;!N.done;T++,N=p.next())N=m(d,N.value,g),N!==null&&(c=i(N,c,T),z===null?j=N:z.sibling=N,z=N);return U&&Nt(d,T),j}for(_=r(d,_);!N.done;T++,N=p.next())N=w(_,d,T,N.value,g),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?T:N.key),c=i(N,c,T),z===null?j=N:z.sibling=N,z=N);return e&&_.forEach(function(Ee){return t(d,Ee)}),U&&Nt(d,T),j}function I(d,c,p,g){if(typeof p=="object"&&p!==null&&p.type===Qt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case pr:e:{for(var j=p.key,z=c;z!==null;){if(z.key===j){if(j=p.type,j===Qt){if(z.tag===7){n(d,z.sibling),c=l(z,p.props.children),c.return=d,d=c;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===st&&Ls(j)===z.type){n(d,z.sibling),c=l(z,p.props),c.ref=zn(d,z,p),c.return=d,d=c;break e}n(d,z);break}else t(d,z);z=z.sibling}p.type===Qt?(c=It(p.props.children,d.mode,g,p.key),c.return=d,d=c):(g=Ur(p.type,p.key,p.props,null,d.mode,g),g.ref=zn(d,c,p),g.return=d,d=g)}return o(d);case Vt:e:{for(z=p.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=l(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=ti(p,d.mode,g),c.return=d,d=c}return o(d);case st:return z=p._init,I(d,c,z(p._payload),g)}if(Ln(p))return k(d,c,p,g);if(kn(p))return S(d,c,p,g);Cr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=l(c,p),c.return=d,d=c):(n(d,c),c=ei(p,d.mode,g),c.return=d,d=c),o(d)):n(d,c)}return I}var mn=ga(!0),va=ga(!1),tl=Ct(null),nl=null,bt=null,ko=null;function So(){ko=bt=nl=null}function jo(e){var t=tl.current;W(tl),e._currentValue=t}function Fi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function un(e,t){nl=e,ko=bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(ko!==e)if(e={context:e,memoizedValue:t,next:null},bt===null){if(nl===null)throw Error(x(308));bt=e,nl.dependencies={lanes:0,firstContext:e}}else bt=bt.next=e;return t}var Mt=null;function Co(e){Mt===null?Mt=[e]:Mt.push(e)}function xa(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Co(t)):(n.next=l.next,l.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function Eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,rt(e,n)}return l=r.interleaved,l===null?(t.next=t,Co(r)):(t.next=l.next,l.next=t),r.interleaved=t,rt(e,n)}function Ir(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ao(e,n)}}function Ps(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var l=e.updateQueue;ut=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,f=a.next;a.next=null,o===null?i=f:o.next=f,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=f:s.next=f,h.lastBaseUpdate=a))}if(i!==null){var m=l.baseState;o=0,h=f=a=null,s=i;do{var y=s.lane,w=s.eventTime;if((r&y)===y){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,S=s;switch(y=t,w=n,S.tag){case 1:if(k=S.payload,typeof k=="function"){m=k.call(w,m,y);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,y=typeof k=="function"?k.call(w,m,y):k,y==null)break e;m=V({},m,y);break e;case 2:ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=l.effects,y===null?l.effects=[s]:y.push(s))}else w={eventTime:w,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(f=h=w,a=m):h=h.next=w,o|=y;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;y=s,s=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);if(h===null&&(a=m),l.baseState=a,l.firstBaseUpdate=f,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Wt|=o,e.lanes=o,e.memoizedState=m}}function Ms(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var ar={},Ye=Ct(ar),bn=Ct(ar),er=Ct(ar);function Ft(e){if(e===ar)throw Error(x(174));return e}function zo(e,t){switch(D(er,t),D(bn,e),D(Ye,ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pi(t,e)}W(Ye),D(Ye,t)}function hn(){W(Ye),W(bn),W(er)}function ka(e){Ft(er.current);var t=Ft(Ye.current),n=pi(t,e.type);t!==n&&(D(bn,e),D(Ye,n))}function _o(e){bn.current===e&&(W(Ye),W(bn))}var B=Ct(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function To(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var Or=it.ReactCurrentDispatcher,Xl=it.ReactCurrentBatchConfig,$t=0,H=null,J=null,te=null,il=!1,$n=!1,tr=0,xd=0;function oe(){throw Error(x(321))}function No(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function Lo(e,t,n,r,l,i){if($t=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Or.current=e===null||e.memoizedState===null?jd:Cd,e=n(r,l),$n){i=0;do{if($n=!1,tr=0,25<=i)throw Error(x(301));i+=1,te=J=null,t.updateQueue=null,Or.current=Ed,e=n(r,l)}while($n)}if(Or.current=ol,t=J!==null&&J.next!==null,$t=0,te=J=H=null,il=!1,t)throw Error(x(300));return e}function Po(){var e=tr!==0;return tr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?H.memoizedState=te=e:te=te.next=e,te}function Fe(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=te===null?H.memoizedState:te.next;if(t!==null)te=t,J=e;else{if(e===null)throw Error(x(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},te===null?H.memoizedState=te=e:te=te.next=e}return te}function nr(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=Fe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,f=i;do{var h=f.lane;if(($t&h)===h)a!==null&&(a=a.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:h,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};a===null?(s=a=m,o=r):a=a.next=m,H.lanes|=h,Wt|=h}f=f.next}while(f!==null&&f!==i);a===null?o=r:a.next=s,Ae(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,H.lanes|=i,Wt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jl(e){var t=Fe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ae(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Sa(){}function ja(e,t){var n=H,r=Fe(),l=t(),i=!Ae(r.memoizedState,l);if(i&&(r.memoizedState=l,he=!0),r=r.queue,Mo(za.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,rr(9,Ea.bind(null,n,r,l,t),void 0,null),ne===null)throw Error(x(349));$t&30||Ca(n,t,l)}return l}function Ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ea(e,t,n,r){t.value=n,t.getSnapshot=r,_a(t)&&Ta(e)}function za(e,t,n){return n(function(){_a(t)&&Ta(e)})}function _a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function Ta(e){var t=rt(e,1);t!==null&&We(t,e,1,-1)}function Fs(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=Sd.bind(null,H,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Na(){return Fe().memoizedState}function Dr(e,t,n,r){var l=Ve();H.flags|=e,l.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var l=Fe();r=r===void 0?null:r;var i=void 0;if(J!==null){var o=J.memoizedState;if(i=o.destroy,r!==null&&No(r,o.deps)){l.memoizedState=rr(t,n,i,r);return}}H.flags|=e,l.memoizedState=rr(1|t,n,i,r)}function Rs(e,t){return Dr(8390656,8,e,t)}function Mo(e,t){return wl(2048,8,e,t)}function La(e,t){return wl(4,2,e,t)}function Pa(e,t){return wl(4,4,e,t)}function Ma(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fa(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,Ma.bind(null,t,e),n)}function Fo(){}function Ra(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ia(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Oa(e,t,n){return $t&21?(Ae(n,t)||(n=Uu(),H.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function wd(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{R=n,Xl.transition=r}}function Da(){return Fe().memoizedState}function kd(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$a(e))Wa(t,n);else if(n=xa(e,t,n,r),n!==null){var l=fe();We(n,e,r,l),Aa(n,t,r)}}function Sd(e,t,n){var r=xt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($a(e))Wa(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ae(s,o)){var a=t.interleaved;a===null?(l.next=l,Co(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=xa(e,t,l,r),n!==null&&(l=fe(),We(n,e,r,l),Aa(n,t,r))}}function $a(e){var t=e.alternate;return e===H||t!==null&&t===H}function Wa(e,t){$n=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Aa(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ao(e,n)}}var ol={readContext:Me,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},jd={readContext:Me,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Rs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4194308,4,Ma.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dr(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kd.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Fs,useDebugValue:Fo,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Fs(!1),t=e[0];return e=wd.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=Ve();if(U){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ne===null)throw Error(x(349));$t&30||Ca(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Rs(za.bind(null,r,i,e),[e]),r.flags|=2048,rr(9,Ea.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ve(),t=ne.identifierPrefix;if(U){var n=qe,r=Je;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cd={readContext:Me,useCallback:Ra,useContext:Me,useEffect:Mo,useImperativeHandle:Fa,useInsertionEffect:La,useLayoutEffect:Pa,useMemo:Ia,useReducer:Zl,useRef:Na,useState:function(){return Zl(nr)},useDebugValue:Fo,useDeferredValue:function(e){var t=Fe();return Oa(t,J.memoizedState,e)},useTransition:function(){var e=Zl(nr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Sa,useSyncExternalStore:ja,useId:Da,unstable_isNewReconciler:!1},Ed={readContext:Me,useCallback:Ra,useContext:Me,useEffect:Mo,useImperativeHandle:Fa,useInsertionEffect:La,useLayoutEffect:Pa,useMemo:Ia,useReducer:Jl,useRef:Na,useState:function(){return Jl(nr)},useDebugValue:Fo,useDeferredValue:function(e){var t=Fe();return J===null?t.memoizedState=e:Oa(t,J.memoizedState,e)},useTransition:function(){var e=Jl(nr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Sa,useSyncExternalStore:ja,useId:Da,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ri(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),l=xt(e),i=et(r,l);i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,l),t!==null&&(We(t,e,l,r),Ir(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),l=xt(e),i=et(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,l),t!==null&&(We(t,e,l,r),Ir(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=xt(e),l=et(n,r);l.tag=2,t!=null&&(l.callback=t),t=gt(e,l,r),t!==null&&(We(t,e,r,n),Ir(t,e,r))}};function Is(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(l,i):!0}function Ua(e,t,n){var r=!1,l=St,i=t.contextType;return typeof i=="object"&&i!==null?i=Me(i):(l=ge(t)?Ot:ae.current,r=t.contextTypes,i=(r=r!=null)?dn(e,l):St),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Os(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function Ii(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Eo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Me(i):(i=ge(t)?Ot:ae.current,l.context=dn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ri(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&kl.enqueueReplaceState(l,l.state,null),rl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function yn(e,t){try{var n="",r=t;do n+=qc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zd=typeof WeakMap=="function"?WeakMap:Map;function Ba(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,Gi=r),Oi(e,t)},n}function Ha(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Oi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Oi(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ds(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ad.bind(null,e,t,n),t.then(e,e))}function $s(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ws(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var _d=it.ReactCurrentOwner,he=!1;function ce(e,t,n,r){t.child=e===null?va(t,null,n,r):mn(t,e.child,n,r)}function As(e,t,n,r,l){n=n.render;var i=t.ref;return un(t,l),r=Lo(e,t,n,r,i,l),n=Po(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,lt(e,t,l)):(U&&n&&vo(t),t.flags|=1,ce(e,t,r,l),t.child)}function Us(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Uo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Va(e,t,i,r,l)):(e=Ur(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(o,r)&&e.ref===t.ref)return lt(e,t,l)}return t.flags|=1,e=wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Va(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Xn(i,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,lt(e,t,l)}return Di(e,t,n,r,l)}function Qa(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(tn,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(tn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(tn,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(tn,xe),xe|=r;return ce(e,t,l,n),t.child}function Ga(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Di(e,t,n,r,l){var i=ge(n)?Ot:ae.current;return i=dn(t,i),un(t,l),n=Lo(e,t,n,r,i,l),r=Po(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,lt(e,t,l)):(U&&r&&vo(t),t.flags|=1,ce(e,t,n,l),t.child)}function Bs(e,t,n,r,l){if(ge(n)){var i=!0;qr(t)}else i=!1;if(un(t,l),t.stateNode===null)$r(e,t),Ua(t,n,r),Ii(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Me(f):(f=ge(n)?Ot:ae.current,f=dn(t,f));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==f)&&Os(t,o,r,f),ut=!1;var y=t.memoizedState;o.state=y,rl(t,r,o,l),a=t.memoizedState,s!==r||y!==a||ye.current||ut?(typeof h=="function"&&(Ri(t,n,h,r),a=t.memoizedState),(s=ut||Is(t,n,s,r,y,a,f))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=f,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,wa(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Ie(t.type,s),o.props=f,m=t.pendingProps,y=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Me(a):(a=ge(n)?Ot:ae.current,a=dn(t,a));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||y!==a)&&Os(t,o,r,a),ut=!1,y=t.memoizedState,o.state=y,rl(t,r,o,l);var k=t.memoizedState;s!==m||y!==k||ye.current||ut?(typeof w=="function"&&(Ri(t,n,w,r),k=t.memoizedState),(f=ut||Is(t,n,f,r,y,k,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=a,r=f):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return $i(e,t,n,r,i,l)}function $i(e,t,n,r,l,i){Ga(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&_s(t,n,!1),lt(e,t,i);r=t.stateNode,_d.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=mn(t,e.child,null,i),t.child=mn(t,null,s,i)):ce(e,t,s,i),t.memoizedState=r.state,l&&_s(t,n,!0),t.child}function Ka(e){var t=e.stateNode;t.pendingContext?zs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zs(e,t.context,!1),zo(e,t.containerInfo)}function Hs(e,t,n,r,l){return pn(),wo(l),t.flags|=256,ce(e,t,n,r),t.child}var Wi={dehydrated:null,treeContext:null,retryLane:0};function Ai(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ya(e,t,n){var r=t.pendingProps,l=B.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(B,l&1),e===null)return Mi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Cl(o,r,0,null),e=It(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ai(n),t.memoizedState=Wi,e):Ro(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Td(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=wt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=wt(s,i):(i=It(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ai(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Wi,r}return i=e.child,e=i.sibling,r=wt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ro(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&wo(r),mn(t,e.child,null,n),e=Ro(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Td(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ql(Error(x(422))),Er(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Cl({mode:"visible",children:r.children},l,0,null),i=It(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&mn(t,e.child,null,o),t.child.memoizedState=Ai(o),t.memoizedState=Wi,i);if(!(t.mode&1))return Er(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(x(419)),r=ql(i,r,void 0),Er(e,t,o,r)}if(s=(o&e.childLanes)!==0,he||s){if(r=ne,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,rt(e,l),We(r,e,l,-1))}return Ao(),r=ql(Error(x(421))),Er(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ud.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,we=yt(l.nextSibling),ke=t,U=!0,De=null,e!==null&&(Te[Ne++]=Je,Te[Ne++]=qe,Te[Ne++]=Dt,Je=e.id,qe=e.overflow,Dt=t),t=Ro(t,r.children),t.flags|=4096,t)}function Vs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fi(e.return,t,n)}function bl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Xa(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ce(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vs(e,n,t);else if(e.tag===19)Vs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ll(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),bl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ll(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}bl(t,!0,n,null,i);break;case"together":bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nd(e,t,n){switch(t.tag){case 3:Ka(t),pn();break;case 5:ka(t);break;case 1:ge(t.type)&&qr(t);break;case 4:zo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(tl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Ya(e,t,n):(D(B,B.current&1),e=lt(e,t,n),e!==null?e.sibling:null);D(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xa(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Qa(e,t,n)}return lt(e,t,n)}var Za,Ui,Ja,qa;Za=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ui=function(){};Ja=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ft(Ye.current);var i=null;switch(n){case"input":l=ai(e,l),r=ai(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=di(e,l),r=di(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}mi(n,r);var o;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var s=l[f];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Bn.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var a=r[f];if(s=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&a!==s&&(a!=null||s!=null))if(f==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(f,n)),n=a;else f==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(f,a)):f==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(f,""+a):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(f)?(a!=null&&f==="onScroll"&&$("scroll",e),i||s===a||(i=[])):(i=i||[]).push(f,a))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};qa=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ld(e,t,n){var r=t.pendingProps;switch(xo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ge(t.type)&&Jr(),se(t),null;case 3:return r=t.stateNode,hn(),W(ye),W(ae),To(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Xi(De),De=null))),Ui(e,t),se(t),null;case 5:_o(t);var l=Ft(er.current);if(n=t.type,e!==null&&t.stateNode!=null)Ja(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return se(t),null}if(e=Ft(Ye.current),jr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Qe]=t,r[qn]=i,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(l=0;l<Mn.length;l++)$(Mn[l],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":bo(r,i),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$("invalid",r);break;case"textarea":ts(r,i),$("invalid",r)}mi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),l=["children",""+s]):Bn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&$("scroll",r)}switch(n){case"input":mr(r),es(r,i,!0);break;case"textarea":mr(r),ns(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Qe]=t,e[qn]=r,Za(e,t,!1,!1),t.stateNode=e;e:{switch(o=hi(n,r),n){case"dialog":$("cancel",e),$("close",e),l=r;break;case"iframe":case"object":case"embed":$("load",e),l=r;break;case"video":case"audio":for(l=0;l<Mn.length;l++)$(Mn[l],e);l=r;break;case"source":$("error",e),l=r;break;case"img":case"image":case"link":$("error",e),$("load",e),l=r;break;case"details":$("toggle",e),l=r;break;case"input":bo(e,r),l=ai(e,r),$("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),$("invalid",e);break;case"textarea":ts(e,r),l=di(e,r),$("invalid",e);break;default:l=r}mi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Nu(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&_u(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Hn(e,a):typeof a=="number"&&Hn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&$("scroll",e):a!=null&&ro(e,i,a,o))}switch(n){case"input":mr(e),es(e,r,!1);break;case"textarea":mr(e),ns(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?rn(e,!!r.multiple,i,!1):r.defaultValue!=null&&rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)qa(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Ft(er.current),Ft(Ye.current),jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(i=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return se(t),null;case 13:if(W(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&t.mode&1&&!(t.flags&128))ya(),pn(),t.flags|=98560,i=!1;else if(i=jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Qe]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),i=!1}else De!==null&&(Xi(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?q===0&&(q=3):Ao())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return hn(),Ui(e,t),e===null&&Zn(t.stateNode.containerInfo),se(t),null;case 10:return jo(t.type._context),se(t),null;case 17:return ge(t.type)&&Jr(),se(t),null;case 19:if(W(B),i=t.memoizedState,i===null)return se(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)_n(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ll(e),o!==null){for(t.flags|=128,_n(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(B,B.current&1|2),t.child}e=e.sibling}i.tail!==null&&X()>gn&&(t.flags|=128,r=!0,_n(i,!1),t.lanes=4194304)}else{if(!r)if(e=ll(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return se(t),null}else 2*X()-i.renderingStartTime>gn&&n!==1073741824&&(t.flags|=128,r=!0,_n(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=X(),t.sibling=null,n=B.current,D(B,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Wo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Pd(e,t){switch(xo(t),t.tag){case 1:return ge(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),W(ye),W(ae),To(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _o(t),null;case 13:if(W(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(B),null;case 4:return hn(),null;case 10:return jo(t.type._context),null;case 22:case 23:return Wo(),null;case 24:return null;default:return null}}var zr=!1,ue=!1,Md=typeof WeakSet=="function"?WeakSet:Set,E=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Bi(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Qs=!1;function Fd(e,t){if(Ei=Kr,e=ra(),go(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,f=0,h=0,m=e,y=null;t:for(;;){for(var w;m!==n||l!==0&&m.nodeType!==3||(s=o+l),m!==i||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)y=m,m=w;for(;;){if(m===e)break t;if(y===n&&++f===l&&(s=o),y===i&&++h===r&&(a=o),(w=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(zi={focusedElem:e,selectionRange:n},Kr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var S=k.memoizedProps,I=k.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ie(t.type,S),I);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(g){Q(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return k=Qs,Qs=!1,k}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Bi(t,n,i)}l=l.next}while(l!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ba(e){var t=e.alternate;t!==null&&(e.alternate=null,ba(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[qn],delete t[Ni],delete t[hd],delete t[yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ec(e){return e.tag===5||e.tag===3||e.tag===4}function Gs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}function Qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qi(e,t,n),e=e.sibling;e!==null;)Qi(e,t,n),e=e.sibling}var re=null,Oe=!1;function ot(e,t,n){for(n=n.child;n!==null;)tc(e,t,n),n=n.sibling}function tc(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:ue||en(n,t);case 6:var r=re,l=Oe;re=null,ot(e,t,n),re=r,Oe=l,re!==null&&(Oe?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Oe?(e=re,n=n.stateNode,e.nodeType===8?Gl(e.parentNode,n):e.nodeType===1&&Gl(e,n),Kn(e)):Gl(re,n.stateNode));break;case 4:r=re,l=Oe,re=n.stateNode.containerInfo,Oe=!0,ot(e,t,n),re=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Bi(n,t,o),l=l.next}while(l!==r)}ot(e,t,n);break;case 1:if(!ue&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Q(n,t,s)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,ot(e,t,n),ue=r):ot(e,t,n);break;default:ot(e,t,n)}}function Ks(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Md),t.forEach(function(r){var l=Bd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,Oe=!1;break e;case 3:re=s.stateNode.containerInfo,Oe=!0;break e;case 4:re=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(re===null)throw Error(x(160));tc(i,o,l),re=null,Oe=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(f){Q(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nc(t,e),t=t.sibling}function nc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),He(e),r&4){try{Wn(3,e,e.return),Sl(3,e)}catch(S){Q(e,e.return,S)}try{Wn(5,e,e.return)}catch(S){Q(e,e.return,S)}}break;case 1:Re(t,e),He(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(Re(t,e),He(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var l=e.stateNode;try{Hn(l,"")}catch(S){Q(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Cu(l,i),hi(s,o);var f=hi(s,i);for(o=0;o<a.length;o+=2){var h=a[o],m=a[o+1];h==="style"?Nu(l,m):h==="dangerouslySetInnerHTML"?_u(l,m):h==="children"?Hn(l,m):ro(l,h,m,f)}switch(s){case"input":ci(l,i);break;case"textarea":Eu(l,i);break;case"select":var y=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?rn(l,!!i.multiple,w,!1):y!==!!i.multiple&&(i.defaultValue!=null?rn(l,!!i.multiple,i.defaultValue,!0):rn(l,!!i.multiple,i.multiple?[]:"",!1))}l[qn]=i}catch(S){Q(e,e.return,S)}}break;case 6:if(Re(t,e),He(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(S){Q(e,e.return,S)}}break;case 3:if(Re(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(S){Q(e,e.return,S)}break;case 4:Re(t,e),He(e);break;case 13:Re(t,e),He(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Do=X())),r&4&&Ks(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(f=ue)||h,Re(t,e),ue=f):Re(t,e),He(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!h&&e.mode&1)for(E=e,h=e.child;h!==null;){for(m=E=h;E!==null;){switch(y=E,w=y.child,y.tag){case 0:case 11:case 14:case 15:Wn(4,y,y.return);break;case 1:en(y,y.return);var k=y.stateNode;if(typeof k.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(S){Q(r,n,S)}}break;case 5:en(y,y.return);break;case 22:if(y.memoizedState!==null){Xs(m);continue}}w!==null?(w.return=y,E=w):Xs(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,f?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Tu("display",o))}catch(S){Q(e,e.return,S)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(S){Q(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Re(t,e),He(e),r&4&&Ks(e);break;case 21:break;default:Re(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ec(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Hn(l,""),r.flags&=-33);var i=Gs(e);Qi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Gs(e);Vi(e,s,o);break;default:throw Error(x(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rd(e,t,n){E=e,rc(e)}function rc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||zr;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||ue;s=zr;var f=ue;if(zr=o,(ue=a)&&!f)for(E=l;E!==null;)o=E,a=o.child,o.tag===22&&o.memoizedState!==null?Zs(l):a!==null?(a.return=o,E=a):Zs(l);for(;i!==null;)E=i,rc(i),i=i.sibling;E=l,zr=s,ue=f}Ys(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,E=i):Ys(e)}}function Ys(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ms(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ms(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var h=f.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Kn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ue||t.flags&512&&Hi(t)}catch(y){Q(t,t.return,y)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Xs(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Zs(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(a){Q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){Q(t,l,a)}}var i=t.return;try{Hi(t)}catch(a){Q(t,i,a)}break;case 5:var o=t.return;try{Hi(t)}catch(a){Q(t,o,a)}}}catch(a){Q(t,t.return,a)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var Id=Math.ceil,sl=it.ReactCurrentDispatcher,Io=it.ReactCurrentOwner,Pe=it.ReactCurrentBatchConfig,F=0,ne=null,Z=null,le=0,xe=0,tn=Ct(0),q=0,lr=null,Wt=0,jl=0,Oo=0,An=null,me=null,Do=0,gn=1/0,Xe=null,ul=!1,Gi=null,vt=null,_r=!1,dt=null,al=0,Un=0,Ki=null,Wr=-1,Ar=0;function fe(){return F&6?X():Wr!==-1?Wr:Wr=X()}function xt(e){return e.mode&1?F&2&&le!==0?le&-le:vd.transition!==null?(Ar===0&&(Ar=Uu()),Ar):(e=R,e!==0||(e=window.event,e=e===void 0?16:Yu(e.type)),e):1}function We(e,t,n,r){if(50<Un)throw Un=0,Ki=null,Error(x(185));or(e,n,r),(!(F&2)||e!==ne)&&(e===ne&&(!(F&2)&&(jl|=n),q===4&&ct(e,le)),ve(e,r),n===1&&F===0&&!(t.mode&1)&&(gn=X()+500,xl&&Et()))}function ve(e,t){var n=e.callbackNode;vf(e,t);var r=Gr(e,e===ne?le:0);if(r===0)n!==null&&is(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&is(n),t===1)e.tag===0?gd(Js.bind(null,e)):pa(Js.bind(null,e)),pd(function(){!(F&6)&&Et()}),n=null;else{switch(Bu(r)){case 1:n=uo;break;case 4:n=Wu;break;case 16:n=Qr;break;case 536870912:n=Au;break;default:n=Qr}n=fc(n,lc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lc(e,t){if(Wr=-1,Ar=0,F&6)throw Error(x(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Gr(e,e===ne?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cl(e,r);else{t=r;var l=F;F|=2;var i=oc();(ne!==e||le!==t)&&(Xe=null,gn=X()+500,Rt(e,t));do try{$d();break}catch(s){ic(e,s)}while(!0);So(),sl.current=i,F=l,Z!==null?t=0:(ne=null,le=0,t=q)}if(t!==0){if(t===2&&(l=wi(e),l!==0&&(r=l,t=Yi(e,l))),t===1)throw n=lr,Rt(e,0),ct(e,r),ve(e,X()),n;if(t===6)ct(e,r);else{if(l=e.current.alternate,!(r&30)&&!Od(l)&&(t=cl(e,r),t===2&&(i=wi(e),i!==0&&(r=i,t=Yi(e,i))),t===1))throw n=lr,Rt(e,0),ct(e,r),ve(e,X()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Lt(e,me,Xe);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=Do+500-X(),10<t)){if(Gr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ti(Lt.bind(null,e,me,Xe),t);break}Lt(e,me,Xe);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-$e(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Id(r/1960))-r,10<r){e.timeoutHandle=Ti(Lt.bind(null,e,me,Xe),r);break}Lt(e,me,Xe);break;case 5:Lt(e,me,Xe);break;default:throw Error(x(329))}}}return ve(e,X()),e.callbackNode===n?lc.bind(null,e):null}function Yi(e,t){var n=An;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=cl(e,t),e!==2&&(t=me,me=n,t!==null&&Xi(t)),e}function Xi(e){me===null?me=e:me.push.apply(me,e)}function Od(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ae(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~Oo,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function Js(e){if(F&6)throw Error(x(327));an();var t=Gr(e,0);if(!(t&1))return ve(e,X()),null;var n=cl(e,t);if(e.tag!==0&&n===2){var r=wi(e);r!==0&&(t=r,n=Yi(e,r))}if(n===1)throw n=lr,Rt(e,0),ct(e,t),ve(e,X()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,me,Xe),ve(e,X()),null}function $o(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(gn=X()+500,xl&&Et())}}function At(e){dt!==null&&dt.tag===0&&!(F&6)&&an();var t=F;F|=1;var n=Pe.transition,r=R;try{if(Pe.transition=null,R=1,e)return e()}finally{R=r,Pe.transition=n,F=t,!(F&6)&&Et()}}function Wo(){xe=tn.current,W(tn)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dd(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(xo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:hn(),W(ye),W(ae),To();break;case 5:_o(r);break;case 4:hn();break;case 13:W(B);break;case 19:W(B);break;case 10:jo(r.type._context);break;case 22:case 23:Wo()}n=n.return}if(ne=e,Z=e=wt(e.current,null),le=xe=t,q=0,lr=null,Oo=jl=Wt=0,me=An=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Mt=null}return e}function ic(e,t){do{var n=Z;try{if(So(),Or.current=ol,il){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}il=!1}if($t=0,te=J=H=null,$n=!1,tr=0,Io.current=null,n===null||n.return===null){q=1,lr=t,Z=null;break}e:{var i=e,o=n.return,s=n,a=t;if(t=le,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var f=a,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=$s(o);if(w!==null){w.flags&=-257,Ws(w,o,s,i,t),w.mode&1&&Ds(i,f,t),t=w,a=f;var k=t.updateQueue;if(k===null){var S=new Set;S.add(a),t.updateQueue=S}else k.add(a);break e}else{if(!(t&1)){Ds(i,f,t),Ao();break e}a=Error(x(426))}}else if(U&&s.mode&1){var I=$s(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Ws(I,o,s,i,t),wo(yn(a,s));break e}}i=a=yn(a,s),q!==4&&(q=2),An===null?An=[i]:An.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Ba(i,a,t);Ps(i,d);break e;case 1:s=a;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(vt===null||!vt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Ha(i,s,t);Ps(i,g);break e}}i=i.return}while(i!==null)}uc(n)}catch(j){t=j,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function oc(){var e=sl.current;return sl.current=ol,e===null?ol:e}function Ao(){(q===0||q===3||q===2)&&(q=4),ne===null||!(Wt&268435455)&&!(jl&268435455)||ct(ne,le)}function cl(e,t){var n=F;F|=2;var r=oc();(ne!==e||le!==t)&&(Xe=null,Rt(e,t));do try{Dd();break}catch(l){ic(e,l)}while(!0);if(So(),F=n,sl.current=r,Z!==null)throw Error(x(261));return ne=null,le=0,q}function Dd(){for(;Z!==null;)sc(Z)}function $d(){for(;Z!==null&&!af();)sc(Z)}function sc(e){var t=cc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?uc(e):Z=t,Io.current=null}function uc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pd(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Z=null;return}}else if(n=Ld(n,t,xe),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);q===0&&(q=5)}function Lt(e,t,n){var r=R,l=Pe.transition;try{Pe.transition=null,R=1,Wd(e,t,n,r)}finally{Pe.transition=l,R=r}return null}function Wd(e,t,n,r){do an();while(dt!==null);if(F&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(xf(e,i),e===ne&&(Z=ne=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,fc(Qr,function(){return an(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var o=R;R=1;var s=F;F|=4,Io.current=null,Fd(e,n),nc(n,e),id(zi),Kr=!!Ei,zi=Ei=null,e.current=n,Rd(n),cf(),F=s,R=o,Pe.transition=i}else e.current=n;if(_r&&(_r=!1,dt=e,al=l),i=e.pendingLanes,i===0&&(vt=null),pf(n.stateNode),ve(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ul)throw ul=!1,e=Gi,Gi=null,e;return al&1&&e.tag!==0&&an(),i=e.pendingLanes,i&1?e===Ki?Un++:(Un=0,Ki=e):Un=0,Et(),null}function an(){if(dt!==null){var e=Bu(al),t=Pe.transition,n=R;try{if(Pe.transition=null,R=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,al=0,F&6)throw Error(x(331));var l=F;for(F|=4,E=e.current;E!==null;){var i=E,o=i.child;if(E.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var f=s[a];for(E=f;E!==null;){var h=E;switch(h.tag){case 0:case 11:case 15:Wn(8,h,i)}var m=h.child;if(m!==null)m.return=h,E=m;else for(;E!==null;){h=E;var y=h.sibling,w=h.return;if(ba(h),h===f){E=null;break}if(y!==null){y.return=w,E=y;break}E=w}}}var k=i.alternate;if(k!==null){var S=k.child;if(S!==null){k.child=null;do{var I=S.sibling;S.sibling=null,S=I}while(S!==null)}}E=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,E=o;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Wn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,E=d;break e}E=i.return}}var c=e.current;for(E=c;E!==null;){o=E;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,E=p;else e:for(o=c;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sl(9,s)}}catch(j){Q(s,s.return,j)}if(s===o){E=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,E=g;break e}E=s.return}}if(F=l,Et(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{R=n,Pe.transition=t}}return!1}function qs(e,t,n){t=yn(n,t),t=Ba(e,t,1),e=gt(e,t,1),t=fe(),e!==null&&(or(e,1,t),ve(e,t))}function Q(e,t,n){if(e.tag===3)qs(e,e,n);else for(;t!==null;){if(t.tag===3){qs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=yn(n,e),e=Ha(t,e,1),t=gt(t,e,1),e=fe(),t!==null&&(or(t,1,e),ve(t,e));break}}t=t.return}}function Ad(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(le&n)===n&&(q===4||q===3&&(le&130023424)===le&&500>X()-Do?Rt(e,0):Oo|=n),ve(e,t)}function ac(e,t){t===0&&(e.mode&1?(t=gr,gr<<=1,!(gr&130023424)&&(gr=4194304)):t=1);var n=fe();e=rt(e,t),e!==null&&(or(e,t,n),ve(e,n))}function Ud(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ac(e,n)}function Bd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),ac(e,n)}var cc;cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Nd(e,t,n);he=!!(e.flags&131072)}else he=!1,U&&t.flags&1048576&&ma(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$r(e,t),e=t.pendingProps;var l=dn(t,ae.current);un(t,n),l=Lo(null,t,r,e,l,n);var i=Po();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(i=!0,qr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Eo(t),l.updater=kl,t.stateNode=l,l._reactInternals=t,Ii(t,r,e,n),t=$i(null,t,r,!0,i,n)):(t.tag=0,U&&i&&vo(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch($r(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Vd(r),e=Ie(r,e),l){case 0:t=Di(null,t,r,e,n);break e;case 1:t=Bs(null,t,r,e,n);break e;case 11:t=As(null,t,r,e,n);break e;case 14:t=Us(null,t,r,Ie(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Di(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Bs(e,t,r,l,n);case 3:e:{if(Ka(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,l=i.element,wa(e,t),rl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=yn(Error(x(423)),t),t=Hs(e,t,r,n,l);break e}else if(r!==l){l=yn(Error(x(424)),t),t=Hs(e,t,r,n,l);break e}else for(we=yt(t.stateNode.containerInfo.firstChild),ke=t,U=!0,De=null,n=va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===l){t=lt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return ka(t),e===null&&Mi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,_i(r,l)?o=null:i!==null&&_i(r,i)&&(t.flags|=32),Ga(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&Mi(t),null;case 13:return Ya(e,t,n);case 4:return zo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),As(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,D(tl,r._currentValue),r._currentValue=o,i!==null)if(Ae(i.value,o)){if(i.children===l.children&&!ye.current){t=lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=et(-1,n&-n),a.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var h=f.pending;h===null?a.next=a:(a.next=h.next,h.next=a),f.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Fi(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(x(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Fi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,un(t,n),l=Me(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=Ie(r,t.pendingProps),l=Ie(r.type,l),Us(e,t,r,l,n);case 15:return Va(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),$r(e,t),t.tag=1,ge(r)?(e=!0,qr(t)):e=!1,un(t,n),Ua(t,r,l),Ii(t,r,l,n),$i(null,t,r,!0,e,n);case 19:return Xa(e,t,n);case 22:return Qa(e,t,n)}throw Error(x(156,t.tag))};function fc(e,t){return $u(e,t)}function Hd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new Hd(e,t,n,r)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vd(e){if(typeof e=="function")return Uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===io)return 11;if(e===oo)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ur(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Uo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Qt:return It(n.children,l,i,t);case lo:o=8,l|=8;break;case ii:return e=Le(12,n,t,l|2),e.elementType=ii,e.lanes=i,e;case oi:return e=Le(13,n,t,l),e.elementType=oi,e.lanes=i,e;case si:return e=Le(19,n,t,l),e.elementType=si,e.lanes=i,e;case ku:return Cl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xu:o=10;break e;case wu:o=9;break e;case io:o=11;break e;case oo:o=14;break e;case st:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Le(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function It(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=Le(22,e,r,t),e.elementType=ku,e.lanes=n,e.stateNode={isHidden:!1},e}function ei(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function ti(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Bo(e,t,n,r,l,i,o,s,a){return e=new Qd(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Le(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eo(i),e}function Gd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dc(e){if(!e)return St;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(ge(n))return da(e,n,t)}return t}function pc(e,t,n,r,l,i,o,s,a){return e=Bo(n,r,!0,e,l,i,o,s,a),e.context=dc(null),n=e.current,r=fe(),l=xt(n),i=et(r,l),i.callback=t??null,gt(n,i,l),e.current.lanes=l,or(e,l,r),ve(e,r),e}function El(e,t,n,r){var l=t.current,i=fe(),o=xt(l);return n=dc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(l,t,o),e!==null&&(We(e,l,o,i),Ir(e,l,o)),o}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ho(e,t){bs(e,t),(e=e.alternate)&&bs(e,t)}function Kd(){return null}var mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vo(e){this._internalRoot=e}zl.prototype.render=Vo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));El(e,t,null,null)};zl.prototype.unmount=Vo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){El(null,e,null,null)}),t[nt]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&Ku(e)}};function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eu(){}function Yd(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var f=fl(o);i.call(f)}}var o=pc(t,r,e,0,null,!1,!1,"",eu);return e._reactRootContainer=o,e[nt]=o.current,Zn(e.nodeType===8?e.parentNode:e),At(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var f=fl(a);s.call(f)}}var a=Bo(e,0,!1,null,null,!1,!1,"",eu);return e._reactRootContainer=a,e[nt]=a.current,Zn(e.nodeType===8?e.parentNode:e),At(function(){El(t,a,n,r)}),a}function Tl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=fl(o);s.call(a)}}El(t,o,e,l)}else o=Yd(n,t,e,l,r);return fl(o)}Hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(ao(t,n|1),ve(t,X()),!(F&6)&&(gn=X()+500,Et()))}break;case 13:At(function(){var r=rt(e,1);if(r!==null){var l=fe();We(r,e,1,l)}}),Ho(e,1)}};co=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=fe();We(t,e,134217728,n)}Ho(e,134217728)}};Vu=function(e){if(e.tag===13){var t=xt(e),n=rt(e,t);if(n!==null){var r=fe();We(n,e,t,r)}Ho(e,t)}};Qu=function(){return R};Gu=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};gi=function(e,t,n){switch(t){case"input":if(ci(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=vl(r);if(!l)throw Error(x(90));ju(r),ci(r,l)}}}break;case"textarea":Eu(e,n);break;case"select":t=n.value,t!=null&&rn(e,!!n.multiple,t,!1)}};Mu=$o;Fu=At;var Xd={usingClientEntryPoint:!1,Events:[ur,Xt,vl,Lu,Pu,$o]},Tn={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zd={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ou(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||Kd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{ml=Tr.inject(Zd),Ke=Tr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xd;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qo(t))throw Error(x(200));return Gd(e,t,null,n)};je.createRoot=function(e,t){if(!Qo(e))throw Error(x(299));var n=!1,r="",l=mc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Bo(e,1,!1,null,null,n,!1,r,l),e[nt]=t.current,Zn(e.nodeType===8?e.parentNode:e),new Vo(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Ou(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return At(e)};je.hydrate=function(e,t,n){if(!_l(t))throw Error(x(200));return Tl(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Qo(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=mc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=pc(t,null,e,1,n??null,l,!1,i,o),e[nt]=t.current,Zn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new zl(t)};je.render=function(e,t,n){if(!_l(t))throw Error(x(200));return Tl(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!_l(e))throw Error(x(40));return e._reactRootContainer?(At(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};je.unstable_batchedUpdates=$o;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_l(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Tl(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function hc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hc)}catch(e){console.error(e)}}hc(),hu.exports=je;var Jd=hu.exports,tu=Jd;ri.createRoot=tu.createRoot,ri.hydrateRoot=tu.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yc=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=O.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...s},a)=>O.createElement("svg",{ref:a,...bd,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:yc("lucide",l),...s},[...o.map(([f,h])=>O.createElement(f,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=(e,t)=>{const n=O.forwardRef(({className:r,...l},i)=>O.createElement(ep,{ref:i,iconNode:t,className:yc(`lucide-${qd(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=Ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=Ue("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=Ue("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=Ue("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=Ue("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=Ue("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=Ue("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=Ue("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=Ue("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=Ue("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp = Ue("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  v = {
    black: "#0A0A0A",
    ink: "#111111",
    white: "#FFFFFF",
    gray: "#3A3A3A",
    grayLight: "#5C5C5C",
    cardBg: "#F2F1F4",
    line: "#E7E5EA",
    lineDark: "#242424",
    purple: "#8B5CF6",
    pill: "#CDB4F6",
  };

function cn({ opacity: e = 0.05 }) {
  return u.jsx("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: e,
      mixBlendMode: "overlay",
      pointerEvents: "none",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    },
  });
}

function vc() {
  return u.jsxs("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
    },
    children: [
      u.jsx("div", {
        style: {
          position: "absolute",
          top: "-10%",
          left: "5%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${v.purple}33, transparent 70%)`,
          filter: "blur(70px)",
          animation: "blobA 20s ease-in-out infinite",
        },
      }),
      u.jsx("div", {
        style: {
          position: "absolute",
          bottom: "-15%",
          right: "0%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, #ffffff14, transparent 70%)",
          filter: "blur(80px)",
          animation: "blobB 26s ease-in-out infinite",
        },
      }),
      u.jsx("div", {
        style: {
          position: "absolute",
          top: "20%",
          right: "15%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, #ffffff10, transparent 70%)",
          filter: "blur(60px)",
          animation: "blobC 23s ease-in-out infinite",
        },
      }),
    ],
  });
}

function xc(e, t = 0.24, n = 10) {
  const r = [];
  for (let i = 0; i < n; i++) {
    const o = (i / n) * Math.PI * 2,
      s = e * (1 - t / 2 + Math.random() * t);
    r.push([Math.cos(o) * s, Math.sin(o) * s]);
  }
  let l = `M ${r[0][0].toFixed(1)} ${r[0][1].toFixed(1)} `;
  for (let i = 0; i < n; i++) {
    const [o, s] = r[i],
      [a, f] = r[(i + 1) % n];
    l += `Q ${o.toFixed(1)} ${s.toFixed(1)} ${((o + a) / 2).toFixed(1)} ${((s + f) / 2).toFixed(1)} `;
  }
  return l + "Z";
}

const CELL_TYPE_NAMES = [
  "lymphocyte", // T cell: simple nucleus-in-membrane circle
  "tcellReceptor", // T cell with surface TCR spikes (crowned circle)
  "macrophage", // large irregular blob with internal vacuoles
  "antibody", // Y-shaped immunoglobulin
  "spiky", // NK cell / granulocyte, spiked double ring
  "virus", // small capsid with short surface spikes
  "bacteriaRod", // single rod-shaped bacterium with internal dots
  "bacteriaChain", // three bacteria linked in a chain (strep-style)
  "diplococci", // two touching round bacteria (pairs)
  "migrating", // round cell trailing a wavy migration tail
];

const CELL_TYPE_WEIGHTS = [0.18, 0.15, 0.11, 0.14, 0.09, 0.1, 0.08, 0.06, 0.05, 0.07];

const CELL_PADDING = 14; // minimum empty gap (px) enforced between any two cells

// Each cell type: boundingRadius(scale) = worst-case footprint used for
// overlap checks; draw(props) = the actual SVG children for that cell.
const CELL_TYPES = {
  lymphocyte: {
    boundingRadius: (scale) => 14 * scale,
    draw: (i) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx("circle", { cx: 0, cy: 0, r: i.r }),
          u.jsx("circle", { cx: 0, cy: 0, r: i.r * 0.42 }),
        ],
      }),
  },

  tcellReceptor: {
    boundingRadius: (scale) => 22 * scale,
    draw: (i) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx("circle", { cx: 0, cy: 0, r: i.r }),
          u.jsx("circle", { cx: 0, cy: 0, r: i.r * 0.42 }),
          Array.from({ length: i.spikeCount }).map((_, s) => {
            const a = (s / i.spikeCount) * Math.PI * 2,
              x1 = Math.cos(a) * i.r,
              y1 = Math.sin(a) * i.r,
              x2 = Math.cos(a) * (i.r + i.spikeLen),
              y2 = Math.sin(a) * (i.r + i.spikeLen);
            return u.jsx(
              "path",
              { d: `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}` },
              s,
            );
          }),
        ],
      }),
  },

  macrophage: {
    boundingRadius: (scale) => (22 + 14) * scale, // matches r range below
    draw: (i) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx("path", { d: i.path }),
          i.vacuoles.map((o, s) =>
            u.jsx(
              "ellipse",
              { cx: o.x, cy: o.y, rx: o.rx, ry: o.ry, transform: `rotate(${o.rot} ${o.x} ${o.y})` },
              s,
            ),
          ),
        ],
      }),
  },

  antibody: {
    boundingRadius: (scale) => 27 * scale, // stem + arm reach
    draw: (i) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx("path", { d: `M 0 ${i.stemLen} L 0 0` }),
          u.jsx("path", { d: `M 0 0 L ${-i.armLen * 0.82} ${-i.armLen * 0.82}` }),
          u.jsx("path", { d: `M 0 0 L ${i.armLen * 0.82} ${-i.armLen * 0.82}` }),
        ],
      }),
  },

  spiky: {
    boundingRadius: (scale) => (14 + 8 + 6 + 6) * scale, // max r + max spikeLen
    draw: (i) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx("circle", { cx: 0, cy: 0, r: i.r }),
          u.jsx("circle", { cx: 0, cy: 0, r: i.ringR }),
          Array.from({ length: i.spikeCount }).map((_, s) => {
            const a = (s / i.spikeCount) * Math.PI * 2,
              x1 = Math.cos(a) * i.r,
              y1 = Math.sin(a) * i.r,
              x2 = Math.cos(a) * (i.r + i.spikeLen),
              y2 = Math.sin(a) * (i.r + i.spikeLen);
            return u.jsx(
              "path",
              { d: `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}` },
              s,
            );
          }),
        ],
      }),
  },

  virus: {
    boundingRadius: (scale) => (9 + 4 + 4 + 3) * scale,
    draw: (i) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx("circle", { cx: 0, cy: 0, r: i.r }),
          Array.from({ length: i.spikeCount }).map((_, s) => {
            const a = (s / i.spikeCount) * Math.PI * 2,
              x1 = Math.cos(a) * i.r,
              y1 = Math.sin(a) * i.r,
              x2 = Math.cos(a) * (i.r + i.spikeLen),
              y2 = Math.sin(a) * (i.r + i.spikeLen);
            return u.jsxs(
              u.Fragment,
              {
                children: [
                  u.jsx("path", { d: `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}` }),
                  u.jsx("circle", { cx: x2, cy: y2, r: 1.4 }),
                ],
              },
              s,
            );
          }),
        ],
      }),
  },

  bacteriaRod: {
    boundingRadius: (scale) => 20 * scale, // half-width + half-height, roughly
    draw: (i) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx("rect", { x: -i.w / 2, y: -i.h / 2, width: i.w, height: i.h, rx: i.h / 2 }),
          i.dots.map((d, s) => u.jsx("circle", { cx: d.x, cy: d.y, r: 1.5 }, s)),
        ],
      }),
  },

  bacteriaChain: {
    boundingRadius: (scale) => 20 * scale, // gap*2 + segR, roughly
    draw: (i) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx("circle", { cx: -i.gap, cy: 0, r: i.segR }),
          u.jsx("circle", { cx: 0, cy: 0, r: i.segR }),
          u.jsx("circle", { cx: i.gap, cy: 0, r: i.segR }),
          u.jsx("path", {
            d: `M ${-i.gap + i.segR} 0 L ${-i.segR} 0 M ${i.segR} 0 L ${i.gap - i.segR} 0`,
          }),
        ],
      }),
  },

  diplococci: {
    boundingRadius: (scale) => 18 * scale,
    draw: (i) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx("circle", { cx: -i.r * 0.9, cy: 0, r: i.r }),
          u.jsx("circle", { cx: i.r * 0.9, cy: 0, r: i.r }),
          u.jsx("circle", { cx: -i.r * 0.9, cy: 0, r: i.r * 0.4 }),
          u.jsx("circle", { cx: i.r * 0.9, cy: 0, r: i.r * 0.4 }),
        ],
      }),
  },

  migrating: {
    // migrating cells trail a long tail, so this one gets its own render
    // path entirely (handled as a special case in pp(), like the original).
    boundingRadius: (scale) => (11 + 12 + 45 + 95) * scale,
    draw: null,
  },
};

/**
 * dp() — build the randomized (but strictly non-overlapping) list of cells
 * and background debris dots for the hero canvas.
 *
 * @param count   how many main cells to try to place
 * @param width   canvas width  (matches the SVG viewBox in pp())
 * @param height  canvas height (matches the SVG viewBox in pp())
 */
function dp(count, width, height) {
  const pickType = () => {
    const roll = Math.random();
    let acc = 0;
    for (let i = 0; i < CELL_TYPE_NAMES.length; i++) {
      acc += CELL_TYPE_WEIGHTS[i];
      if (roll <= acc) return CELL_TYPE_NAMES[i];
    }
    return CELL_TYPE_NAMES[0];
  };

  // Tries to drop `howMany` shapes onto the canvas such that none of their
  // bounding circles touch. Gives up on an individual shape (and just
  // skips it) after maxAttempts failed tries, so a crowded canvas
  // degrades gracefully instead of freezing or forcing an overlap.
  const placed = [];
  const maxAttemptsPerCell = 250;

  for (let id = 0; id < count; id++) {
    let ok = false;
    for (let attempt = 0; attempt < maxAttemptsPerCell && !ok; attempt++) {
      const type = pickType();
      const scale = 0.75 + Math.random() * 0.85;
      const boundingRadius = CELL_TYPES[type].boundingRadius(scale);
      const cx = boundingRadius + CELL_PADDING + Math.random() * (width - 2 * (boundingRadius + CELL_PADDING));
      const cy = boundingRadius + CELL_PADDING + Math.random() * (height - 2 * (boundingRadius + CELL_PADDING));

      let overlaps = false;
      for (const p of placed) {
        const dist = Math.hypot(cx - p.cx, cy - p.cy);
        if (dist < boundingRadius + p.boundingRadius + CELL_PADDING) {
          overlaps = true;
          break;
        }
      }
      if (overlaps) continue;

      const cell = {
        id,
        type,
        cx,
        cy,
        boundingRadius,
        rot: Math.random() * 360,
        scale,
        opacity: 0.08 + Math.random() * 0.16,
      };

      // per-type extra geometry (same randomized detail as the original design)
      if (type === "lymphocyte") {
        cell.r = 8 + Math.random() * 8;
      } else if (type === "tcellReceptor") {
        cell.r = 9 + Math.random() * 6;
        cell.spikeLen = 5 + Math.random() * 4;
        cell.spikeCount = 9 + Math.floor(Math.random() * 3);
      } else if (type === "macrophage") {
        cell.r = 22 + Math.random() * 14;
        cell.path = xc(cell.r, 0.3, 11);
        cell.vacuoles = Array.from({ length: 3 + Math.floor(Math.random() * 4) }).map(() => ({
          x: (Math.random() - 0.5) * cell.r * 1.1,
          y: (Math.random() - 0.5) * cell.r * 1.1,
          rx: 3 + Math.random() * 4.5,
          ry: 2 + Math.random() * 3.5,
          rot: Math.random() * 180,
        }));
      } else if (type === "antibody") {
        cell.armLen = 16 + Math.random() * 10;
        cell.stemLen = 18 + Math.random() * 10;
      } else if (type === "spiky") {
        cell.r = 14 + Math.random() * 8;
        cell.spikeLen = 6 + Math.random() * 6;
        cell.spikeCount = 8 + Math.floor(Math.random() * 6);
        cell.ringR = cell.r * 0.5;
      } else if (type === "virus") {
        cell.r = 9 + Math.random() * 4;
        cell.spikeLen = 4 + Math.random() * 3;
        cell.spikeCount = 12;
      } else if (type === "bacteriaRod") {
        cell.w = 20 + Math.random() * 10;
        cell.h = 9;
        cell.dots = Array.from({ length: 3 + Math.floor(Math.random() * 3) }).map(() => ({
          x: (Math.random() - 0.5) * (cell.w - cell.h * 0.8),
          y: (Math.random() - 0.5) * (cell.h - 4),
        }));
      } else if (type === "bacteriaChain") {
        cell.segR = 6;
        cell.gap = 13;
      } else if (type === "diplococci") {
        cell.r = 8;
      } else if (type === "migrating") {
        cell.r = 11 + Math.random() * 12;
        cell.tailLen = 45 + Math.random() * 95;
        cell.tailAngle = Math.random() * Math.PI * 2;
        cell.wig = (Math.random() - 0.5) * 40;
      }

      placed.push(cell);
      ok = true;
    }
  }

  // tiny background debris dots — also collision-checked against the main
  // cells (but not against each other, they're small enough it doesn't matter)
  const debrisCount = Math.round(count * 1.2);
  const debris = [];
  for (let id = 0; id < debrisCount; id++) {
    for (let attempt = 0; attempt < 40; attempt++) {
      const r = 1.5 + Math.random() * 4;
      const cx = r + Math.random() * (width - 2 * r);
      const cy = r + Math.random() * (height - 2 * r);
      const collides = placed.some((p) => Math.hypot(cx - p.cx, cy - p.cy) < p.boundingRadius + r + 6);
      if (!collides) {
        debris.push({ id, cx, cy, r, opacity: 0.06 + Math.random() * 0.14 });
        break;
      }
    }
  }

  return { cells: placed, debris };
}

/**
 * pp() — renders the hero cell field as an absolutely-positioned SVG that
 * fills its parent. This is the component you'll see used as
 * `u.jsx(pp, {})` inside the hero section below.
 */
function pp({ count = 40 }) {
  const { cells: r, debris: l } = O.useRef(dp(count, 1000, 560)).current;

  // --- TWINKLE EFFECT ---------------------------------------------------
  // At any given moment, TWINKLE_SLOT_COUNT cells are "lit up" at once.
  // Each slot runs its own independent random timer, so the 5 twinkling
  // cells change at different times from each other (not all 5 at once) --
  // like a handful of stars twinkling independently. `activeKeys` holds
  // one entry per slot; a smooth CSS opacity transition handles the
  // actual fade in/out for whichever cell is currently in that slot.
  const TWINKLE_SLOT_COUNT = 5;
  const [activeKeys, setActiveKeys] = O.useState([]);
  const allKeys = O.useRef([
    ...l.map((i) => `d${i.id}`),
    ...r.map((i) => `c${i.id}`),
  ]).current;

  O.useEffect(() => {
    const timeoutIds = [];
    for (let slot = 0; slot < TWINKLE_SLOT_COUNT; slot++) {
      const scheduleNext = () => {
        const delay = 500 + Math.random() * 1500;
        timeoutIds[slot] = setTimeout(() => {
          const nextKey = allKeys[Math.floor(Math.random() * allKeys.length)];
          setActiveKeys((prev) => {
            const next = prev.slice();
            next[slot] = nextKey;
            return next;
          });
          scheduleNext();
        }, delay);
      };
      scheduleNext();
    }
    return () => timeoutIds.forEach((id) => clearTimeout(id));
  }, [allKeys]);

  return u.jsxs("svg", {
    viewBox: "0 0 1000 560",
    preserveAspectRatio: "xMidYMid slice",
    style: { position: "absolute", inset: 0, width: "100%", height: "100%" },
    children: [
      l.map((i) => {
        const key = `d${i.id}`,
          isActive = activeKeys.includes(key);
        return u.jsx(
          "circle",
          {
            cx: i.cx,
            cy: i.cy,
            r: i.r,
            stroke: "#ffffff",
            strokeWidth: "1",
            fill: "none",
            opacity: isActive ? Math.min(1, i.opacity + 0.7) : i.opacity,
            style: { transition: "opacity 0.8s ease" },
          },
          key,
        );
      }),
      r.map((i) => {
        const key = `c${i.id}`,
          isActive = activeKeys.includes(key),
          liveOpacity = isActive ? Math.min(1, i.opacity + 0.7) : i.opacity;
        if (i.type === "migrating") {
          const o = i.cx + Math.cos(i.tailAngle) * i.r,
            s = i.cy + Math.sin(i.tailAngle) * i.r,
            a = i.cx + Math.cos(i.tailAngle) * i.tailLen,
            f = i.cy + Math.sin(i.tailAngle) * i.tailLen,
            h = i.cx + Math.cos(i.tailAngle) * i.tailLen * 0.55 + Math.cos(i.tailAngle + Math.PI / 2) * i.wig,
            m = i.cy + Math.sin(i.tailAngle) * i.tailLen * 0.55 + Math.sin(i.tailAngle + Math.PI / 2) * i.wig;
          return u.jsxs(
            "g",
            {
              stroke: "#ffffff",
              strokeWidth: "1.3",
              fill: "none",
              opacity: liveOpacity,
              strokeLinecap: "round",
              style: { transition: "opacity 0.8s ease" },
              children: [
                u.jsx("circle", { cx: i.cx, cy: i.cy, r: i.r }),
                u.jsx("circle", { cx: i.cx, cy: i.cy, r: i.r * 0.4 }),
                u.jsx("path", { d: `M ${o} ${s} Q ${h} ${m} ${a} ${f}` }),
              ],
            },
            key,
          );
        }
        return u.jsx(
          "g",
          {
            transform: `translate(${i.cx} ${i.cy}) rotate(${i.rot}) scale(${i.scale})`,
            stroke: "#ffffff",
            strokeWidth: "1.3",
            fill: "none",
            opacity: liveOpacity,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: { transition: "opacity 0.8s ease" },
            children: CELL_TYPES[i.type].draw(i),
          },
          key,
        );
      }),
    ],
  });
}

const ni = 5;

function mp() {
  const e = O.useRef(null),
    t = O.useRef([]),
    [n, r] = O.useState(!1),
    [l, i] = O.useState(!1),
    [o, s] = O.useState(!1),
    [a, f] = O.useState([]);
  return (
    O.useEffect(() => {
      if (typeof window > "u") return;
      const h =
        window.matchMedia && window.matchMedia("(pointer: fine)").matches;
      r(h);
    }, []),
    O.useEffect(() => {
      if (!n) return;
      let h = 0,
        m = 0,
        y = 0,
        w = 0,
        k,
        S = !1,
        lastHoverCheck = !1;
      const I = 0.2,
        d = 0.28,
        c = Array.from({ length: ni }, () => ({ x: 0, y: 0 }));
      let p = performance.now(),
        g = 0;
      const j = (N, G) => {
          let b = document.elementFromPoint(N, G);
          for (let ze = 0; ze < 8 && b; ze++) {
            if (
              b instanceof Element &&
              ((b.matches && b.matches("a, button, [data-cursor-hover]")) ||
                getComputedStyle(b).cursor === "pointer")
            )
              return !0;
            b = b.parentElement;
          }
          return !1;
        },
        z = (N) => {
          ((h = N.clientX),
            (m = N.clientY),
            S ||
              ((y = h),
              (w = m),
              c.forEach((G) => {
                ((G.x = h), (G.y = m));
              }),
              (S = !0)),
            (p = performance.now()),
            o || s(!0));
        },
        _ = () => s(!1),
        T = (N, G) => {
          const Ee = Math.random().toString(36).slice(2),
            b = 5 + Math.random() * 9,
            ze = (Math.random() - 0.5) * 46,
            _e = -(24 + Math.random() * 30),
            Be = 1 + Math.random() * 0.7;
          (f((zt) => [
            ...zt,
            { id: Ee, x: N, y: G, size: b, dx: ze, dy: _e, dur: Be },
          ]),
            setTimeout(
              () => {
                f((zt) => zt.filter((C) => C.id !== Ee));
              },
              Be * 1e3 + 50,
            ));
        };
      function A(N) {
        const G = N - p > 180;
        ((y += (h - y) * I),
          (w += (m - w) * I),
          e.current &&
            (e.current.style.transform = `translate(${y}px, ${w}px) translate(-50%, -50%)`));
        const hovering = j(h, m);
        if (hovering !== lastHoverCheck) {
          ((lastHoverCheck = hovering), i(hovering));
        }
        let Ee = y,
          b = w;
        for (let ze = 0; ze < ni; ze++) {
          const _e = c[ze];
          ((_e.x += (Ee - _e.x) * d), (_e.y += (b - _e.y) * d));
          const Be = t.current[ze];
          (Be &&
            ((Be.style.transform = `translate(${_e.x}px, ${_e.y}px) translate(-50%, -50%)`),
            (Be.style.opacity = o && !G ? "1" : "0")),
            (Ee = _e.x),
            (b = _e.y));
        }
        (G && o && !lastHoverCheck && N - g > 260 && ((g = N), T(y, w)),
          (k = requestAnimationFrame(A)));
      }
      return (
        window.addEventListener("mousemove", z),
        document.addEventListener("mouseleave", _),
        (k = requestAnimationFrame(A)),
        () => {
          (window.removeEventListener("mousemove", z),
            document.removeEventListener("mouseleave", _),
            cancelAnimationFrame(k));
        }
      );
    }, [n, o]),
    n
      ? u.jsxs(u.Fragment, {
          children: [
            a.map((h) =>
              u.jsx(
                "span",
                {
                  style: {
                    position: "fixed",
                    pointerEvents: "none",
                    zIndex: 9997,
                    width: h.size,
                    height: h.size,
                    borderRadius: "50%",
                    background: "#ffffff",
                    mixBlendMode: "difference",
                    left: h.x,
                    top: h.y,
                    "--dx": `${h.dx}px`,
                    "--dy": `${h.dy}px`,
                    animation: `bubbleRise ${h.dur}s ease-out forwards`,
                  },
                },
                h.id,
              ),
            ),
            Array.from({ length: ni }).map((h, m) =>
              u.jsx(
                "div",
                {
                  ref: (y) => (t.current[m] = y),
                  style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                    zIndex: 9998,
                    width: 14 - m * 1.6,
                    height: 14 - m * 1.6,
                    borderRadius: "50%",
                    background: "#ffffff",
                    mixBlendMode: "difference",
                    opacity: o ? 1 : 0,
                    transition: "opacity .2s ease",
                  },
                },
                m,
              ),
            ),
            u.jsx("div", {
              ref: e,
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#ffffff",
                mixBlendMode: "difference",
                pointerEvents: "none",
                zIndex: 9999,
                opacity: o ? 1 : 0,
                transition: "width .2s ease, height .2s ease, opacity .2s ease",
              },
            }),
          ],
        })
      : null
  );
}

function formatRichText(e) {
  if (!e) return e;
  const lines = e.split("\n");
  return lines.map((line, li) =>
    u.jsxs(
      u.Fragment,
      {
        children: [
          line.split(/(\*\*[^*]+\*\*)/g).map((part, pi) =>
            part.startsWith("**") && part.endsWith("**")
              ? u.jsx("strong", { children: part.slice(2, -2) }, pi)
              : part,
          ),
          li < lines.length - 1 ? u.jsx("br", {}) : null,
        ],
      },
      li,
    ),
  );
}

function Y({ children: e, delay: t = 0, y: n = 26, style: r }) {
  const l = O.useRef(null),
    [i, o] = O.useState(!1);
  return (
    O.useEffect(() => {
      const s = l.current;
      if (!s) return;
      const a = new IntersectionObserver(
        ([f]) => {
          f.isIntersecting && (o(!0), a.disconnect());
        },
        { threshold: 0.15 },
      );
      return (a.observe(s), () => a.disconnect());
    }, []),
    u.jsx("div", {
      ref: l,
      style: {
        opacity: i ? 1 : 0,
        transform: i ? "translateY(0)" : `translateY(${n}px)`,
        transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${t}s, transform .8s cubic-bezier(.16,1,.3,1) ${t}s`,
        ...r,
      },
      children: e,
    })
  );
}

function Rv({ children, delay: t = 0, direction: dir = "left", style: r }) {
  const l = O.useRef(null),
    [i, o] = O.useState(!1);
  const startX = dir === "left" ? -70 : 70;
  const startRot = dir === "left" ? -4 : 4;
  return (
    O.useEffect(() => {
      const s = l.current;
      if (!s) return;
      const a = new IntersectionObserver(
        ([f]) => {
          f.isIntersecting && (o(!0), a.disconnect());
        },
        { threshold: 0.2 },
      );
      return (a.observe(s), () => a.disconnect());
    }, []),
    u.jsx("div", {
      ref: l,
      style: {
        opacity: i ? 1 : 0,
        transform: i
          ? "translateX(0) rotate(0deg) scale(1)"
          : `translateX(${startX}px) rotate(${startRot}deg) scale(0.92)`,
        transition: `opacity .7s ease ${t}s, transform .8s cubic-bezier(.22,1.4,.36,1) ${t}s`,
        ...r,
      },
      children,
    })
  );
}

function wc({ children: e, onClick: t, dark: n, style: r }) {
  return u.jsxs("button", {
    onClick: t,
    className: "pill-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: n ? v.pill : v.ink,
      color: n ? v.black : v.white,
      border: "none",
      borderRadius: 999,
      padding: "15px 26px",
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: FONT_SIZES.pillButton,
      cursor: "pointer",
      ...r,
    },
    children: [u.jsx(Go, { size: 17, className: "pill-arrow" }), " ", e],
  });
}

function nn({ children: e, onClick: t, dark: n }) {
  return u.jsxs("button", {
    onClick: t,
    className: "text-link",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: v.purple,
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: FONT_SIZES.textLink,
    },
    children: [u.jsx(Go, { size: 16, className: "text-link-arrow" }), " ", e],
  });
}

function hp({ page: e, setPage: t, dark: n }) {
  const [r, l] = O.useState(!1),
    i = n ? v.white : v.ink;
  return u.jsxs("header", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: n ? "transparent" : "rgba(255,255,255,0.85)",
      backdropFilter: n ? "none" : "blur(8px)",
      transition: "background .2s ease",
    },
    children: [
      u.jsxs("div", {
        style: {
          maxWidth: 1240,
          margin: "0 auto",
          padding: "22px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        children: [
          u.jsx("button", {
            onClick: () => {
              (t("home"), l(!1));
            },
            style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: FONT_SIZES.siteNameButton,
              color: i,
            },
            children: SITE_NAME,
          }),
          u.jsxs("nav", {
            className: "desktop-nav",
            style: { display: "none" },
            children: [
              NAV_ITEMS.map((o) =>
                u.jsx(
                  "button",
                  {
                    onClick: () => t(o.id),
                    style: {
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      marginLeft: 34,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: FONT_SIZES.navLink,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: e === o.id ? v.purple : i,
                      opacity: e === o.id ? 1 : 0.85,
                    },
                    children: o.label,
                  },
                  o.id,
                ),
              ),
              u.jsxs("button", {
                onClick: () => t("contact"),
                style: {
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  marginLeft: 34,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: FONT_SIZES.navContactLink,
                  color: v.purple,
                },
                children: [u.jsx(Go, { size: 15 }), " Contact us"],
              }),
            ],
          }),
          u.jsx("button", {
            onClick: () => l((o) => !o),
            className: "mobile-toggle",
            style: {
              background: "none",
              border: "none",
              color: i,
              cursor: "pointer",
            },
            children: r ? u.jsx(cp, { size: 22 }) : u.jsx(ip, { size: 22 }),
          }),
        ],
      }),
      r &&
        u.jsx("div", {
          className: "mobile-toggle",
          style: {
            background: n ? v.black : v.white,
            borderTop: `1px solid ${n ? v.lineDark : v.line}`,
            padding: "8px 28px 20px",
            display: "flex",
            flexDirection: "column",
          },
          children: [...NAV_ITEMS, { id: "contact", label: "Contact us" }].map((o) =>
            u.jsx(
              "button",
              {
                onClick: () => {
                  (t(o.id), l(!1));
                },
                style: {
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: FONT_SIZES.mobileNavLink,
                  padding: "12px 0",
                  borderBottom: `1px solid ${n ? v.lineDark : v.line}`,
                  color: o.id === "contact" ? v.purple : i,
                },
                children: o.label,
              },
              o.id,
            ),
          ),
        }),
      u.jsx("style", {
        children: `
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; align-items: center; }
          .mobile-toggle { display: none !important; }
        }
      `,
      }),
    ],
  });
}

function yp({ page: p }) {
  const dark = p === "publications";
  return u.jsxs("footer", {
    style: { background: dark ? v.black : v.white },
    children: [
      u.jsx("div", {
        style: {
          textAlign: "center",
          padding: "36px 28px",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: FONT_SIZES.footerText,
          color: dark ? v.white : v.ink,
        },
        children: "Developed by: Abhishek Manoj",
      }),
      u.jsx("div", {
        style: {
          height: 6,
          width: "100%",
          background: `linear-gradient(90deg, ${v.purple}, ${v.pill})`,
        },
      }),
    ],
  });
}

function IconX({ size = 20 }) {
  return u.jsxs("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u.jsx("path", { d: "M18 6 6 18" }),
      u.jsx("path", { d: "M6 6l12 12" }),
    ],
  });
}
function IconChevron({ size = 22, direction = "left" }) {
  const paths = {
    left: "m15 18-6-6 6-6",
    right: "m9 18 6-6-6-6",
    down: "m6 9 6 6 6-6",
  };
  return u.jsx("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: u.jsx("path", {
      d: paths[direction] || paths.left,
    }),
  });
}

const TEAM_GRADIENTS = [
  "linear-gradient(145deg, #2a2a2e, #0c0c0e)",
  "linear-gradient(145deg, #3a3540, #14121a)",
  "linear-gradient(145deg, #34303c, #0e0d12)",
];

function TeamCard({ member: m, index: idx, showText = true }) {
  const outerRef = O.useRef(null);
  const [revealed, setRevealed] = O.useState(false);
  const reducedMotion = O.useRef(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  ).current;

  const handleMove = O.useCallback(
    (e) => {
      if (reducedMotion) return;
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
      const py = (e.clientY - rect.top) / rect.height; // 0 -> 1
      const rotateY = (px - 0.5) * 10; // left/right tilt
      const rotateX = (0.5 - py) * 10; // up/down tilt
      el.style.transition = "transform .1s ease-out";
      el.style.transform = `perspective(900px) scale(1.035) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      el.style.setProperty("--spot-x", `${px * 100}%`);
      el.style.setProperty("--spot-y", `${py * 100}%`);
    },
    [reducedMotion],
  );

  const handleLeave = O.useCallback(() => {
    const el = outerRef.current;
    if (el) {
      el.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
      el.style.transform = "perspective(900px) scale(1) rotateX(0deg) rotateY(0deg)";
    }
    setRevealed(false);
  }, []);

  const toggle = O.useCallback(() => setRevealed((v) => !v), []);
  const handleKeyDown = O.useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  }, [toggle]);
  // Some mobile browsers don't reliably fire a synthetic click after a tap
  // on a plain <div>, so this handles the tap directly and stops the
  // browser from also firing a follow-up click (which would toggle twice).
  const handleTouchEnd = O.useCallback((e) => {
    e.preventDefault();
    toggle();
  }, [toggle]);

  return u.jsx("div", {
    ref: outerRef,
    className: "team-card",
    tabIndex: showText ? 0 : -1,
    role: showText ? "button" : undefined,
    "aria-expanded": showText ? revealed : undefined,
    "aria-label": showText ? `${m.name}, ${m.role}` : undefined,
    onMouseMove: handleMove,
    onMouseEnter: showText ? () => setRevealed(true) : undefined,
    onMouseLeave: handleLeave,
    onFocus: showText ? () => setRevealed(true) : undefined,
    onBlur: showText ? handleLeave : undefined,
    onClick: showText ? toggle : undefined,
    onKeyDown: showText ? handleKeyDown : undefined,
    onTouchEnd: showText ? handleTouchEnd : undefined,
    children: u.jsxs("div", {
      className: "team-card-inner",
      style: { background: m.image ? v.cardBg : TEAM_GRADIENTS[idx % TEAM_GRADIENTS.length] },
      children: [
        m.image
          ? u.jsx("img", {
              src: asset(m.image),
              alt: m.name,
              style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" },
            })
          : u.jsx(ap, {
              size: 46,
              color: "#5a5a66",
              strokeWidth: 1.1,
              style: { position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)" },
            }),
        u.jsx("div", { className: "team-card-spot", "aria-hidden": "true" }),
        showText &&
          u.jsx("span", { className: "team-card-index", "aria-hidden": "true", children: String(idx + 1).padStart(2, "0") }),
        showText &&
          u.jsxs("div", {
            className: "team-card-base",
            style: { opacity: revealed ? 0 : 1 },
            "aria-hidden": revealed,
            children: [
              u.jsx("div", { className: "team-card-name", children: m.name }),
              u.jsx("div", { className: "team-card-role", children: m.role }),
            ],
          }),
        showText &&
          u.jsxs("div", {
            className:
              "team-card-panel" +
              (revealed ? " is-open" : "") +
              (idx === 0 ? " is-featured" : ""),
            children: [
              u.jsx("div", { className: "team-card-name", children: m.name }),
              u.jsx("div", { className: "team-card-role", children: m.role }),
              u.jsx("p", { className: "team-card-about", children: m.about }),
            ],
          }),
      ],
    }),
  });
}

function gp({ setPage: e, setNavDark: t }) {
  const n = O.useRef(null);
  return (
    O.useEffect(() => {
      const r = n.current;
      if (!r) return;
      const l = new IntersectionObserver(([i]) => t(i.isIntersecting), {
        threshold: 0.15,
      });
      return (l.observe(r), () => l.disconnect());
    }, [t]),
    u.jsxs(u.Fragment, {
      children: [
        u.jsxs("section", {
          ref: n,
          style: {
            position: "relative",
            background: v.black,
            overflow: "hidden",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          },
          children: [
            u.jsx(vc, {}),
            u.jsx(pp, {}),
            u.jsx(cn, { opacity: 0.045 }),
            u.jsxs("div", {
              style: {
                position: "relative",
                maxWidth: 1240,
                margin: "0 auto",
                padding: "28px",
                textAlign: "center",
                width: "100%",
              },
              children: [
                u.jsx(Y, {
                  delay: 0.1,
                  y: 22,
                  children: u.jsx("h1", {
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: FONT_SIZES.heroTitle,
                      color: v.white,
                      lineHeight: 0.98,
                      margin: 0,
                    },
                    children: SITE_NAME,
                  }),
                }),
                u.jsx(Y, {
                  delay: 0.22,
                  y: 16,
                  style: { marginTop: 40 },
                  children: u.jsx(wc, {
                    dark: !0,
                    onClick: () => e("contact"),
                    children: HERO_BUTTON_TEXT,
                  }),
                }),
              ],
            }),
          ],
        }),
        u.jsx("section", {
          style: { background: v.white, padding: "90px 28px 110px" },
          children: u.jsxs("div", {
            style: { maxWidth: 1e3, margin: "0 auto" },
            children: [
              u.jsx(Y, {
                children: u.jsx("h2", {
                  style: {
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: FONT_SIZES.homeAboutTitle,
                    color: v.ink,
                    margin: "0 0 20px",
                  },
                  children: "About",
                }),
              }),
              u.jsx(Y, {
                delay: 0.08,
                children: u.jsxs("h2", {
                  style: {
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: FONT_SIZES.homeAboutText,
                    color: v.grayLight,
                    lineHeight: 1.35,
                    margin: 0,
                  },
                  children: [
                    "The underlying theme of our research is focused on",
                    " ",
                    u.jsx("span", {
                      style: { color: v.ink },
                      children: "discovering the triggers and mechanisms of aberrant immune cell activity in chronic and metabolic diseases",
                    }),
                    " such as cardiovascular disease. To understand their multifactorial etiology, we employ both traditional tools of biochemistry, molecular biology and immunology, as well as advanced technologies and computational tools to gain in-depth mechanistic insights in mouse models and human samples.",
                  ],
                }),
              }),
              u.jsx(Y, {
                delay: 0.14,
                style: { marginTop: 28 },
                children: u.jsx(nn, {
                  onClick: () => e("research"),
                  children: "Explore research",
                }),
              }),
            ],
          }),
        }),
        u.jsx("section", {
          style: { background: v.white, padding: "0 28px 110px" },
          children: u.jsxs("div", {
            style: {
              maxWidth: 1180,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "0.85fr 1.15fr",
              gap: 40,
              alignItems: "start",
            },
            className: "team-preview-grid",
            children: [
              u.jsxs(Y, {
                children: [
                  u.jsx("h2", {
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: FONT_SIZES.homeTeamTitle,
                      color: v.ink,
                      margin: "0 0 20px",
                    },
                    children: "Team",
                  }),
                  u.jsx("p", {
                    style: {
                      color: v.gray,
                      fontSize: FONT_SIZES.homeTeamText,
                      lineHeight: 1.6,
                      maxWidth: 320,
                      marginBottom: 22,
                    },
                    children: TEAM_BLURB,
                  }),
                  u.jsx(nn, {
                    onClick: () => e("team"),
                    children: "View full team",
                  }),
                  u.jsx("div", {
                    style: { marginTop: 10 },
                    children: u.jsx(nn, {
                      onClick: () => e("opportunities"),
                      children: "Join us?",
                    }),
                  }),
                ],
              }),
              u.jsx("div", {
                style: { maxWidth: 620 },
                children: TEAM_MEMBERS
                  .slice(0, 1)
                  .map((r, l) =>
                    u.jsx(
                      Y,
                      {
                        delay: l * 0.1,
                        children: u.jsxs("div", {
                          onClick: () => e("team"),
                          className: "team-preview-card-row",
                          style: {
                            display: "flex",
                            gap: 28,
                            alignItems: "center",
                            cursor: "pointer",
                          },
                          children: [
                            u.jsxs(
                              "div",
                              {
                                className: "team-preview-card-photo",
                                style: {
                                  width: 280,
                                  flexShrink: 0,
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: 12,
                                },
                                children: [
                                  u.jsx(TeamCard, { member: r, index: l, showText: false }),
                                  PI_UNIVERSITY_LINK
                                    ? u.jsxs("a", {
                                        href: PI_UNIVERSITY_LINK,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        onClick: (ev) => ev.stopPropagation(),
                                        className: "text-link",
                                        style: {
                                          display: "inline-flex",
                                          alignItems: "center",
                                          gap: 8,
                                          color: v.purple,
                                          fontFamily: "'Inter', sans-serif",
                                          fontWeight: 600,
                                          fontSize: FONT_SIZES.textLink,
                                          textDecoration: "none",
                                          cursor: "pointer",
                                        },
                                        children: [
                                          u.jsx(Go, { size: 16, className: "text-link-arrow" }),
                                          " ",
                                          PI_UNIVERSITY_LINK_TEXT,
                                        ],
                                      })
                                    : null,
                                ],
                              },
                              "photo",
                            ),
                            u.jsxs(
                              "div",
                              {
                                children: [
                                  u.jsx("div", {
                                    style: {
                                      fontFamily: "'Space Grotesk', sans-serif",
                                      fontWeight: 700,
                                      fontSize: FONT_SIZES.homeTeamCardName,
                                      color: v.ink,
                                    },
                                    children: r.name,
                                  }),
                                  u.jsx("div", {
                                    style: {
                                      fontFamily: "'Inter', sans-serif",
                                      fontWeight: 600,
                                      fontSize: FONT_SIZES.homeTeamCardRole,
                                      letterSpacing: "0.06em",
                                      textTransform: "uppercase",
                                      color: v.grayLight,
                                      margin: "8px 0 10px",
                                    },
                                    children: r.role,
                                  }),
                                  u.jsx("div", {
                                    style: {
                                      color: v.gray,
                                      fontSize: FONT_SIZES.homeTeamCardAbout,
                                      lineHeight: 1.6,
                                      whiteSpace: "pre-line",
                                    },
                                    children: r.about,
                                  }),
                                ],
                              },
                              "info",
                            ),
                          ],
                        }),
                      },
                      r.name + l,
                    ),
                  ),
              }),
            ],
          }),
        }),
        u.jsxs("section", {
          style: {
            background: v.black,
            padding: "100px 28px",
            position: "relative",
            overflow: "hidden",
          },
          children: [
            u.jsx(cn, { opacity: 0.04 }),
            u.jsxs("div", {
              style: { position: "relative", maxWidth: 1180, margin: "0 auto" },
              children: [
                u.jsx(Y, {
                  delay: 0.06,
                  children: u.jsx("h2", {
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: FONT_SIZES.homePublicationsTitle,
                      color: v.white,
                      margin: "0 0 50px",
                    },
                    children: "Publications",
                  }),
                }),
                u.jsx("div", {
                  children: (
                    PUBLICATIONS.filter((p) => p.featured).length > 0
                      ? PUBLICATIONS.filter((p) => p.featured)
                      : PUBLICATIONS
                  )
                    .slice(0, HOMEPAGE_PUBLICATIONS_COUNT)
                    .map((r, l) =>
                    u.jsx(
                      Y,
                      {
                        delay: 0.12 + l * 0.08,
                        children: u.jsxs("div", {
                          onClick: () => e("publications"),
                          className: "paper-row",
                          style: {
                            borderTop: `1px solid ${v.lineDark}`,
                            padding: "26px 0",
                            cursor: "pointer",
                          },
                          children: [
                            u.jsx("h3", {
                              style: {
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: FONT_SIZES.homePublicationTitle,
                                color: v.white,
                                margin: "0 0 10px",
                              },
                              children: r.link
                                ? u.jsx("a", {
                                    href: r.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "pub-title-link",
                                    onClick: (ev) => ev.stopPropagation(),
                                    style: { color: "inherit", textDecoration: "none", cursor: "pointer" },
                                    children: r.title,
                                  })
                                : r.title,
                            }),
                            u.jsxs("div", {
                              style: {
                                display: "flex",
                                gap: 10,
                                alignItems: "center",
                                marginBottom: 10,
                                flexWrap: "wrap",
                              },
                              children: [
                                u.jsx("span", {
                                  style: {
                                    color: "#8f8f9b",
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: FONT_SIZES.homePublicationMeta,
                                  },
                                  children: r.year,
                                }),
                                u.jsx("span", {
                                  style: {
                                    color: v.purple,
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 600,
                                    fontSize: FONT_SIZES.homePublicationMeta,
                                  },
                                  children: r.journal,
                                }),
                              ],
                            }),
                            u.jsx("p", {
                              style: {
                                color: "#8f8f9b",
                                fontSize: FONT_SIZES.homePublicationBody,
                                lineHeight: 1.6,
                                maxWidth: 720,
                              },
                              children: formatRichText(r.body),
                            }),
                          ],
                        }),
                      },
                      l,
                    ),
                  ),
                }),
                u.jsx("div", {
                  style: { marginTop: 36 },
                  children: u.jsx(nn, {
                    dark: !0,
                    onClick: () => e("publications"),
                    children: "View all publications",
                  }),
                }),
              ],
            }),
          ],
        }),
        u.jsx("section", {
          style: { background: v.white, padding: "80px 28px" },
          children: u.jsxs("div", {
            style: { maxWidth: 1180, margin: "0 auto" },
            children: [
              u.jsx("h2", {
                style: {
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: FONT_SIZES.homeFundingTitle,
                  color: v.ink,
                  margin: "0 0 20px",
                },
                children: "Funding Agencies",
              }),
              u.jsx("p", {
                style: {
                  color: v.gray,
                  maxWidth: 620,
                  lineHeight: 1.7,
                  fontSize: FONT_SIZES.homeFundingText,
                  marginBottom: 50,
                },
                children: FUNDING_ACKNOWLEDGEMENT,
              }),
              u.jsx(FundingRow, {}),
            ],
          }),
        }),
        u.jsx("style", {
          children: `
        @media (max-width: 900px) {
          .team-preview-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .team-preview-card-row { flex-direction: column !important; align-items: flex-start !important; }
          .team-preview-card-photo { width: 220px !important; }
        }
      `,
        }),
      ],
    })
  );
}

function vp({ setPage: e }) {
  // The research topics themselves live in the RESEARCH_AREAS list near the
  // top of this file (in the editable content section) -- edit the text
  // there, not here.
  const t = RESEARCH_AREAS.map((a) => ({
    n: a.number,
    title: a.title,
    body: a.description,
    image: a.image,
  }));
  return u.jsxs("section", {
    style: { background: v.white, padding: "56px 28px 110px" },
    children: [
      u.jsxs("div", {
        style: { maxWidth: 1180, margin: "0 auto" },
        children: [
          u.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: 48,
              alignItems: "center",
              marginBottom: 54,
            },
            className: "research-header-grid",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsx("h1", {
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: FONT_SIZES.researchTitle,
                      color: v.ink,
                      margin: "0 0 22px",
                    },
                    children: "Research focus",
                  }),
                  u.jsx("p", {
                    style: {
                      color: v.gray,
                      maxWidth: 560,
                      lineHeight: 1.7,
                      fontSize: FONT_SIZES.researchText,
                      margin: 0,
                    },
                    children: RESEARCH_FOCUS_BLURB,
                  }),
                ],
              }),
              u.jsx("div", {
                style: {
                  borderRadius: 24,
                  overflow: "hidden",
                  background: v.cardBg,
                  minHeight: 260,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 0,
                },
                children: RESEARCH_IMAGE
                  ? u.jsx("img", {
                      src: asset(RESEARCH_IMAGE),
                      alt: "Illustration representing the lab's research",
                      style: { width: "100%", height: "auto", display: "block" },
                    })
                  : u.jsx("p", {
                      style: {
                        color: v.grayLight,
                        fontSize: FONT_SIZES.researchImagePlaceholder,
                        lineHeight: 1.6,
                        fontFamily: "'Inter', sans-serif",
                        textAlign: "center",
                        padding: "0 28px",
                      },
                      children:
                        "Add an image -- see RESEARCH_IMAGE near the top of this file.",
                    }),
              }),
            ],
          }),
          u.jsx("div", {
            style: {
              // One column -- boxes are stacked one below the other,
              // each one full width, instead of sitting side by side.
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 28,
            },
            className: "research-full-grid",
            children: t.map((n, r) =>
              u.jsx(
                Y,
                {
                  delay: r * 0.08,
                  children: u.jsxs("div", {
                    className: "hover-card",
                    style: {
                      background: v.cardBg,
                      borderRadius: 18,
                      padding: 44,
                    },
                    children: [
                      u.jsxs("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 20,
                        },
                        children: [
                          u.jsx("span", {
                            style: {
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontWeight: 700,
                              fontSize: FONT_SIZES.researchBoxTitle,
                              color: v.ink,
                            },
                            children: n.title,
                          }),
                          u.jsx("span", {
                            style: {
                              color: v.purple,
                              fontWeight: 700,
                              fontSize: FONT_SIZES.researchBoxNumber,
                            },
                            children: n.n,
                          }),
                        ],
                      }),
                      u.jsx("p", {
                        style: {
                          color: v.gray,
                          fontSize: FONT_SIZES.researchBoxBody,
                          lineHeight: 1.8,
                          maxWidth: 900,
                        },
                        children: n.body,
                      }),

                      /* -----------------------------------------------------
                         OPTIONAL IMAGE SPOT (currently switched off)
                         -----------------------------------------------------
                         If you'd like a picture under the text for this
                         research topic (a figure, a diagram, a photo, etc.),
                         turn this into a real image the same way it's done
                         elsewhere on the site:

                         1. Set that topic's "image" field in RESEARCH_AREAS
                            near the top of this file, e.g.
                            image: "images/treg-stability.png" -- each box
                            uses its own image field, so different boxes
                            can show different pictures (or none at all).
                         2. Delete the /* and *​/ marks around the block
                            below to "uncomment" it (turn it back into real
                            code). That's it -- no need to change anything
                            inside the block itself, it already shows
                            whichever image each box's own "image" field
                            points to, and simply shows nothing for a box
                            whose "image" is left as "".

                         n.image
                           ? u.jsx("img", {
                               src: asset(n.image),
                               alt: n.title,
                               style: {
                                 width: "100%",
                                 maxHeight: 340,
                                 objectFit: "cover",
                                 borderRadius: 12,
                                 marginTop: 24,
                                 display: "block",
                               },
                             })
                           : null,
                      ----------------------------------------------------- */
                    ],
                  }),
                },
                n.n,
              ),
            ),
          }),
        ],
      }),
      u.jsx("style", {
        children:
          "@media (max-width: 700px) { .research-full-grid { grid-template-columns: 1fr !important; } } @media (max-width: 800px) { .research-header-grid { grid-template-columns: 1fr !important; } }",
      }),
    ],
  });
}


function OppImage() {
  return u.jsxs(Y, {
    delay: 0.05,
    y: 22,
    style: { maxWidth: 640, margin: "10px auto 8px" },
    children: [
      u.jsx("div", {
        style: {
          borderRadius: 24,
          overflow: "hidden",
          background: v.cardBg,
          lineHeight: 0,
        },
        children: u.jsx("img", {
          src: asset(OPPORTUNITIES_IMAGE),
          alt: "Illustration of a team pulling together",
          style: { width: "100%", height: "auto", display: "block" },
        }),
      }),
      u.jsx("p", {
        style: {
          color: v.gray,
          fontSize: FONT_SIZES.opportunitiesImageCaption,
          fontFamily: "'Inter', sans-serif",
          textAlign: "center",
          margin: "16px 0 0",
        },
        children: "Let's build something together.",
      }),
    ],
  });
}

function OppStack() {
  const wrapRef = O.useRef(null);
  const cardRefs = O.useRef([]);
  const hintRef = O.useRef(null);
  const dotRefs = O.useRef([]);
  const cardCount = OPEN_POSITIONS.length;
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  O.useEffect(() => {
    if (prefersReducedMotion) return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    let ticking = false;
    // Cache the section's position/height instead of re-measuring the DOM
    // on every scroll event (that forces the browser to recalculate layout
    // constantly, which is what was causing the animation to feel laggy).
    let wrapTop = 0;
    let wrapHeight = 0;

    function measure() {
      const rect = wrap.getBoundingClientRect();
      wrapTop = rect.top + window.scrollY;
      wrapHeight = rect.height;
    }

    function update() {
      ticking = false;
      const scrollable = wrapHeight - window.innerHeight;
      // Progress through the pinned section, from 0 (just arrived) to 1 (about to unpin).
      const progress = scrollable > 0 ? Math.min(Math.max((window.scrollY - wrapTop) / scrollable, 0), 1) : 0;
      // Which card is "active" right now, as a smooth decimal -- e.g. 2.4
      // means we're 40% of the way from card 2 into card 3.
      const activeFloat = progress * Math.max(cardCount - 1, 1);

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const local = activeFloat - i;
        let translateY, scale, opacity, rotate;

        if (local < 0) {
          // Hasn't arrived yet -- waiting off-screen below. The offset is
          // based on the viewport height (not the card's own height) so
          // it reliably starts below the fold no matter the card size.
          const t = Math.max(1 + local, 0); // 0 = far below, 1 = about to arrive
          translateY = `${(1 - t) * window.innerHeight * 0.7}px`;
          scale = 0.92 + t * 0.08;
          opacity = t;
          rotate = 0;
        } else {
          // Arrived at the front, then gets tucked behind newer cards
          // as scrolling continues, building up the "stack". It moves up
          // and shrinks quickly so it reads as a card peeking out from
          // behind the new front card, not as overlapping text.
          const depth = Math.min(local, 4);
          translateY = `${-depth * 34}px`;
          scale = Math.max(1 - depth * 0.08, 0.66);
          opacity = depth <= 0 ? 1 : Math.max(1 - depth * 0.4, 0.18);
          rotate = depth * -1.6;
        }

        // translateZ(0) nudges the browser into compositing this on the
        // GPU instead of repainting it, which is what keeps this smooth.
        card.style.transform = `translate(-50%, -50%) translateZ(0) translateY(${translateY}) scale(${scale}) rotate(${rotate}deg)`;
        card.style.opacity = String(opacity);
        card.style.zIndex = String(100 + i);
      });

      if (hintRef.current) {
        hintRef.current.style.opacity = String(Math.max(1 - progress * 4, 0));
      }

      // Which dot is "active" right now -- stays visible for the whole
      // scroll (unlike the "Scroll" hint above, which only shows at the
      // very start) so it's always clear how many cards there are in
      // total and roughly how far through them the visitor is.
      const activeDot = Math.min(Math.round(activeFloat), cardCount - 1);
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const isActive = i === activeDot;
        dot.style.background = isActive ? v.ink : "rgba(17,17,17,0.22)";
        dot.style.transform = isActive ? "scale(1.3)" : "scale(1)";
      });
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    function onResize() {
      measure();
      update();
    }

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // Re-measure shortly after mount in case the header image or fonts
    // finish loading late and shift the section's position slightly.
    const t1 = setTimeout(onResize, 300);
    const t2 = setTimeout(onResize, 1200);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [prefersReducedMotion, cardCount]);

  const cardStyle = (i) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "min(600px, 86vw)",
    minHeight: 280,
    borderRadius: 26,
    padding: "44px 40px",
    background: i % 2 === 0
      ? `linear-gradient(150deg, ${v.ink} 0%, #241736 100%)`
      : `linear-gradient(150deg, #241736 0%, ${v.purple} 150%)`,
    boxShadow: "0 16px 34px rgba(10,10,10,0.28)",
    color: v.white,
    // Tells the browser these properties will change often, so it can
    // promote each card to its own GPU layer up front instead of
    // scrambling to do it on the first scroll frame.
    willChange: "transform, opacity",
  });

  // Reduced-motion / no-JS-animation fallback: a plain stacked list.
  if (prefersReducedMotion) {
    return u.jsx("div", {
      style: { display: "flex", flexDirection: "column", gap: 20, maxWidth: 600, margin: "0 auto" },
      children: OPEN_POSITIONS.map((pos, i) =>
        u.jsx(
          Rv,
          {
            delay: (i % 2) * 0.06,
            direction: i % 2 === 0 ? "left" : "right",
            children: u.jsxs("div", {
              className: "hover-card-dark",
              style: { ...cardStyle(i), position: "relative", top: "auto", left: "auto" },
              children: [
                u.jsx("h3", { style: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: FONT_SIZES.oppCardTitleReduced, margin: "0 0 10px" }, children: pos.title }),
                u.jsx("p", { style: { color: "rgba(255,255,255,0.72)", fontSize: FONT_SIZES.oppCardBodyReduced, lineHeight: 1.65, margin: 0 }, children: pos.description }),
              ],
            }),
          },
          pos.number,
        ),
      ),
    });
  }

  return u.jsxs(u.Fragment, {
    children: [
      u.jsx("div", {
        ref: wrapRef,
        style: { position: "relative", height: `${cardCount * 85}vh` },
        children: u.jsxs("div", {
          style: { position: "sticky", top: 0, height: "100vh", overflow: "hidden" },
          children: [
            OPEN_POSITIONS.map((pos, i) =>
              u.jsxs("div", {
            ref: (el) => (cardRefs.current[i] = el),
            key: pos.number,
            className: "opp-stack-card",
            style: cardStyle(i),
            children: [
              u.jsx("h3", {
                style: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: FONT_SIZES.oppCardTitle, margin: "0 0 16px" },
                children: pos.title,
              }),
              u.jsx("p", {
                style: { color: "rgba(255,255,255,0.72)", fontSize: FONT_SIZES.oppCardBody, lineHeight: 1.7, margin: 0, maxWidth: 440 },
                children: pos.description,
              }),
            ],
          }),
        ),
        u.jsxs("div", {
          ref: hintRef,
          "aria-hidden": "true",
          style: {
            position: "absolute",
            bottom: 66,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            zIndex: 500,
            transition: "opacity .2s ease",
          },
          children: [
            u.jsx("span", {
              style: {
                fontFamily: "'Inter', sans-serif",
                fontSize: FONT_SIZES.oppScrollHint,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: v.grayLight,
              },
              children: "Scroll",
            }),
            u.jsx("div", {
              className: "opp-scroll-arrow",
              style: { color: v.grayLight, display: "flex" },
              children: u.jsx(IconChevron, { size: 18, direction: "down" }),
            }),
          ],
        }),
        u.jsx("div", {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 9,
            padding: "8px 14px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
            zIndex: 500,
          },
          children: OPEN_POSITIONS.map((pos, i) =>
            u.jsx(
              "div",
              {
                ref: (el) => (dotRefs.current[i] = el),
                style: {
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: i === 0 ? v.ink : "rgba(17,17,17,0.22)",
                  transform: i === 0 ? "scale(1.3)" : "scale(1)",
                  transition: "background .25s ease, transform .25s ease",
                },
              },
              pos.number,
            ),
          ),
        }),
      ],
    }),
      }),
      u.jsx("style", {
        children: `
        @keyframes opp-arrow-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        .opp-scroll-arrow { animation: opp-arrow-bounce 1.4s ease-in-out infinite; }
      `,
      }),
    ],
  });
}

function Op() {
  return u.jsxs("div", {
    children: [
      u.jsx("section", {
        style: { background: v.white, padding: "56px 0 20px" },
        children: u.jsxs("div", {
          style: { maxWidth: 1180, margin: "0 auto", padding: "0 28px" },
          children: [
            u.jsx("h1", {
              style: {
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: FONT_SIZES.opportunitiesTitle,
                color: v.ink,
                margin: "0 0 22px",
                textAlign: "center",
              },
              children: "Join the lab",
            }),
            u.jsx("p", {
              style: {
                color: v.gray,
                maxWidth: 620,
                margin: "0 auto",
                lineHeight: 1.7,
                fontSize: FONT_SIZES.opportunitiesText,
                marginBottom: 10,
                textAlign: "center",
              },
              children: JOIN_LAB_BLURB,
            }),
            u.jsx(OppImage, {}),
          ],
        }),
      }),
      u.jsx("section", {
        style: { background: v.white, padding: "20px 0 110px" },
        children: u.jsx(OppStack, {}),
      }),
    ],
  });
}


function xp({ setPage: e }) {
  return u.jsxs("section", {
    style: { background: v.white, padding: "56px 28px 110px" },
    children: [
      u.jsxs("div", {
        style: { maxWidth: 1180, margin: "0 auto" },
        children: [
          u.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
              gap: 40,
              marginBottom: 60,
              alignItems: "start",
            },
            className: "team-header-grid",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsx("h1", {
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: FONT_SIZES.teamPageTitle,
                      color: v.ink,
                      margin: 0,
                    },
                    children: "Team",
                  }),
                ],
              }),
              u.jsx("div", {
                children: u.jsx("p", {
                  style: {
                    color: v.gray,
                    fontSize: FONT_SIZES.teamPageText,
                    lineHeight: 1.7,
                    marginBottom: 0,
                  },
                  children: TEAM_BLURB,
                }),
              }),
            ],
          }),
          u.jsx("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 22,
            },
            className: "team-full-grid",
            children: TEAM_MEMBERS.map((m, n) =>
              u.jsx(
                Y,
                {
                  delay: (n % 3) * 0.08,
                  children: u.jsx(TeamCard, { member: m, index: n }),
                },
                m.name + n,
              ),
            ),
          }),
          u.jsxs("div", {
            style: { marginTop: 90 },
            children: [
              u.jsx("h2", {
                style: {
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: FONT_SIZES.teamAlumniTitle,
                  color: v.ink,
                  margin: "0 0 34px",
                },
                children: "Alumni",
              }),
              u.jsx("div", {
                children: ALUMNI.map((person, idx) =>
                  u.jsx(
                    Y,
                    {
                      delay: idx * 0.05,
                      children: u.jsxs("div", {
                        style: {
                          display: "flex",
                          gap: 14,
                          alignItems: "baseline",
                          borderTop: `1px solid ${v.line}`,
                          padding: "18px 0",
                        },
                        children: [
                          u.jsx("span", {
                            style: {
                              color: v.purple,
                              fontSize: FONT_SIZES.teamAlumniBullet,
                              lineHeight: 1,
                              flexShrink: 0,
                            },
                            children: "\u2022",
                          }),
                          u.jsxs("p", {
                            style: {
                              margin: 0,
                              color: v.gray,
                              fontSize: FONT_SIZES.teamAlumniText,
                              lineHeight: 1.7,
                            },
                            children: [
                              u.jsx("strong", { style: { color: v.ink }, children: person.name }),
                              " " + person.note,
                            ],
                          }),
                        ],
                      }),
                    },
                    person.name + idx,
                  ),
                ).concat(u.jsx("div", { style: { borderTop: `1px solid ${v.line}` }, key: "alumni-end" })),
              }),
            ],
          }),
        ],
      }),
      u.jsx("style", {
        children: `
        @media (max-width: 900px) { .team-header-grid { grid-template-columns: 1fr !important; } .team-full-grid { grid-template-columns: repeat(2,1fr) !important; } .gallery-header-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 520px) { .team-full-grid { grid-template-columns: 1fr !important; } }
      `,
      }),
    ],
  });
}

function wp() {
  return u.jsxs("section", {
    style: {
      background: v.black,
      padding: "70px 28px 110px",
      position: "relative",
      overflow: "hidden",
    },
    children: [
      u.jsx(cn, { opacity: 0.04 }),
      u.jsxs("div", {
        style: { position: "relative", maxWidth: 1180, margin: "0 auto" },
        children: [
          u.jsx("h1", {
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: FONT_SIZES.publicationsPageTitle,
              color: v.white,
              margin: "0 0 24px",
            },
            children: "Publications",
          }),
          u.jsxs("div", {
            style: {
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 50,
            },
            children: [
              u.jsx("a", {
                href: GOOGLE_SCHOLAR_LINK,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "pub-external-link",
                style: { cursor: "pointer" },
                children: "Google Scholar",
              }),
              u.jsx("a", {
                href: PUBMED_LINK,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "pub-external-link",
                style: { cursor: "pointer" },
                children: "PubMed",
              }),
            ],
          }),
          u.jsxs("div", {
            children: [
              PUBLICATIONS.map((e, t) =>
                u.jsx(
                  Y,
                  {
                    delay: t * 0.06,
                    children: u.jsxs("div", {
                      className: "paper-row",
                      style: {
                        borderTop: `1px solid ${v.lineDark}`,
                        padding: "30px 0",
                      },
                      children: [
                        u.jsx("h3", {
                          style: {
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: FONT_SIZES.publicationsPaperTitle,
                            color: v.white,
                            margin: "0 0 12px",
                          },
                          children: e.link
                            ? u.jsx("a", {
                                href: e.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "pub-title-link",
                                style: { color: "inherit", textDecoration: "none", cursor: "pointer" },
                                children: e.title,
                              })
                            : e.title,
                        }),
                        u.jsxs("div", {
                          style: {
                            display: "flex",
                            gap: 10,
                            alignItems: "center",
                            marginBottom: 10,
                            flexWrap: "wrap",
                          },
                          children: [
                            u.jsx("span", {
                              style: {
                                color: "#8f8f9b",
                                fontFamily: "'Inter', sans-serif",
                                fontSize: FONT_SIZES.publicationsPaperMeta,
                              },
                              children: e.year,
                            }),
                            u.jsx("span", {
                              style: {
                                color: v.purple,
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                fontSize: FONT_SIZES.publicationsPaperMeta,
                              },
                              children: e.journal,
                            }),
                          ],
                        }),
                        u.jsx("p", {
                          style: {
                            color: "#8f8f9b",
                            fontSize: FONT_SIZES.publicationsPaperBody,
                            lineHeight: 1.7,
                            maxWidth: 760,
                          },
                          children: formatRichText(e.body),
                        }),
                      ],
                    }),
                  },
                  t,
                ),
              ),
              u.jsx("div", { style: { borderTop: `1px solid ${v.lineDark}` } }),
            ],
          }),
        ],
      }),
    ],
  });
}


// The purple gradients used for each folder card's background (same
// style as the purple Opportunities cards). Cycles through these 3 as
// you add more folders.
const GALLERY_GRADIENTS = [
  `linear-gradient(150deg, #241736 0%, ${v.purple} 150%)`,
  `linear-gradient(150deg, #2c1b42 0%, ${v.purple} 130%)`,
  `linear-gradient(150deg, #34215a 0%, ${v.purple} 140%)`,
];

function getFolderPeek(photos) {
  // Photos marked cover: true are used first (in their own list order);
  // if fewer than 3 are marked, the remaining slots are filled in with
  // whatever photos come first in the list, same as the default behavior
  // when no covers are set at all.
  const covers = photos.filter((p) => p.cover);
  const rest = photos.filter((p) => !p.cover);
  return covers.concat(rest).slice(0, 3);
}

function FolderTile({ folder, index, tileRef, onOpen }) {
  const peek = getFolderPeek(folder.photos);
  // The fanned-out position/rotation of these 3 preview photos (resting
  // AND on hover) is controlled entirely in CSS below -- look for
  // ".gallery-folder-peek-photo:nth-child(...)" a bit further down this
  // file. Nothing here needs editing.
  return u.jsxs("div", {
    ref: tileRef,
    className: "gallery-folder-tile",
    tabIndex: 0,
    role: "button",
    "aria-label": `Open ${folder.name}, ${folder.photos.length} photos`,
    onClick: onOpen,
    onKeyDown: (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        onOpen();
      }
    },
    style: { background: GALLERY_GRADIENTS[index % GALLERY_GRADIENTS.length], cursor: "pointer" },
    children: [
      u.jsx("div", {
        className: "gallery-folder-peek",
        "aria-hidden": "true",
        children: peek.map((photo, i) =>
          u.jsx(
            "div",
            {
              className: "gallery-folder-peek-photo",
              style: {
                background: photo.image
                  ? `center / cover no-repeat url(${asset(photo.image)})`
                  : GALLERY_GRADIENTS[(index + i + 1) % GALLERY_GRADIENTS.length],
              },
            },
            i,
          ),
        ),
      }),
      u.jsx("div", {
        className: "gallery-folder-info",
        children: u.jsx("div", {
          className: "gallery-folder-name",
          children: folder.name,
        }),
      }),
    ],
  });
}

function PhotoTile({ photo, index, tileRef, mounted, reducedMotion, onOpen }) {
  const rotate = (index % 2 === 0 ? -1 : 1) * (3 + (index % 3) * 2);
  return u.jsx(
    "div",
    {
      ref: tileRef,
      className: "gallery-tile gallery-photo-tile",
      tabIndex: 0,
      role: "button",
      "aria-label": photo.caption || "Open photo",
      onClick: onOpen,
      onKeyDown: (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          onOpen();
        }
      },
      style: reducedMotion
        ? { cursor: "pointer" }
        : {
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0) scale(1) rotate(0deg)" : `translateY(26px) scale(.82) rotate(${rotate}deg)`,
            transition: `opacity .5s ease ${index * 0.035}s, transform .55s cubic-bezier(.16,1,.3,1) ${index * 0.035}s`,
            cursor: "pointer",
          },
      children: photo.image
        ? u.jsx("img", {
            src: asset(photo.image),
            alt: photo.caption || "",
            style: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
          })
        : u.jsx("div", {
            style: {
              width: "100%",
              height: "100%",
              background: GALLERY_GRADIENTS[index % GALLERY_GRADIENTS.length],
            },
          }),
    },
  );
}

function GalleryLightbox({ photos, index, setIndex, onClose, reducedMotion, flipRectRef }) {
  const [zoomed, setZoomed] = O.useState(false);
  const [zoomOrigin, setZoomOrigin] = O.useState("50% 50%");
  const [visible, setVisible] = O.useState(false);
  const wrapRef = O.useRef(null);
  const photo = photos[index];

  O.useLayoutEffect(() => {
    setZoomed(false);
    setVisible(false);
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setVisible(true));
      wrapRef.current && (wrapRef.current.__raf2 = raf2);
    });
    if (!reducedMotion && flipRectRef.current && wrapRef.current) {
      const el = wrapRef.current;
      const oldRect = flipRectRef.current;
      flipRectRef.current = null;
      const newRect = el.getBoundingClientRect();
      const dx = oldRect.left + oldRect.width / 2 - (newRect.left + newRect.width / 2);
      const dy = oldRect.top + oldRect.height / 2 - (newRect.top + newRect.height / 2);
      const sx = oldRect.width / newRect.width;
      const sy = oldRect.height / newRect.height;
      el.style.transition = "none";
      el.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
      el.getBoundingClientRect();
      requestAnimationFrame(() => {
        el.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
        el.style.transform = "translate(0px, 0px) scale(1, 1)";
      });
    }
    return () => cancelAnimationFrame(raf1);
  }, [index]);

  O.useEffect(() => {
    function onKey(ev) {
      if (ev.key === "Escape") onClose();
      else if (ev.key === "ArrowLeft" && photos.length > 1)
        setIndex((i) => (i - 1 + photos.length) % photos.length);
      else if (ev.key === "ArrowRight" && photos.length > 1)
        setIndex((i) => (i + 1) % photos.length);
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  function handleImageClick(ev) {
    if (!zoomed) {
      const rect = ev.currentTarget.getBoundingClientRect();
      const px = ((ev.clientX - rect.left) / rect.width) * 100;
      const py = ((ev.clientY - rect.top) / rect.height) * 100;
      setZoomOrigin(`${px}% ${py}%`);
    }
    setZoomed((z) => !z);
  }

  return u.jsx("div", {
    className: "lightbox-backdrop",
    onClick: onClose,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": photo.caption || "Photo viewer",
    children: u.jsxs("div", {
      className: "lightbox-inner",
      onClick: (ev) => ev.stopPropagation(),
      children: [
        u.jsx("button", {
          className: "lightbox-btn lightbox-close",
          onClick: onClose,
          "aria-label": "Close",
          children: u.jsx(IconX, { size: 20 }),
        }),
        photos.length > 1 &&
          u.jsx("button", {
            className: "lightbox-btn lightbox-prev",
            onClick: () => setIndex((i) => (i - 1 + photos.length) % photos.length),
            "aria-label": "Previous photo",
            children: u.jsx(IconChevron, { direction: "left" }),
          }),
        photos.length > 1 &&
          u.jsx("button", {
            className: "lightbox-btn lightbox-next",
            onClick: () => setIndex((i) => (i + 1) % photos.length),
            "aria-label": "Next photo",
            children: u.jsx(IconChevron, { direction: "right" }),
          }),
        u.jsx("div", {
          ref: wrapRef,
          className: "lightbox-image-wrap",
          children: photo.image
            ? u.jsx("img", {
                src: asset(photo.image),
                alt: photo.caption || "",
                className: "lightbox-image",
                onClick: handleImageClick,
                style: {
                  opacity: visible ? 1 : 0,
                  cursor: zoomed ? "zoom-out" : "zoom-in",
                  transform: zoomed ? "scale(1.9)" : "scale(1)",
                  transformOrigin: zoomOrigin,
                },
              })
            : u.jsx("div", {
                className: "lightbox-placeholder",
                children: u.jsx("p", { children: "No image set for this photo yet." }),
              }),
        }),
        photo.caption
          ? u.jsx("p", { className: "lightbox-caption", children: photo.caption })
          : null,
        photos.length > 1
          ? u.jsx("p", {
              className: "lightbox-counter",
              children: `${index + 1} / ${photos.length}`,
            })
          : null,
      ],
    }),
  });
}

function FundingRow() {
  return u.jsx("div", {
    className: "funding-row",
    children: FUNDING_AGENCIES.map((agency, i) =>
      u.jsx(
        "div",
        {
          className: "funding-logo",
          children: agency.logo
            ? u.jsx("img", {
                src: asset(agency.logo),
                alt: agency.name,
                style: { height: "100%", width: "auto", objectFit: "contain" },
              })
            : u.jsx("span", { children: agency.name }),
        },
        i,
      ),
    ),
  });
}

/* ========================================================================
   FUNDING AGENCIES -- INFINITE LOGO SCROLL (not currently in use)
   ------------------------------------------------------------------------
   Shows every logo in FUNDING_AGENCIES (near the top of this file) in a
   strip that scrolls sideways forever. The list is duplicated once so
   the loop is seamless -- when the first copy scrolls off, the second
   copy is right behind it lining up perfectly, so it never "jumps".
   Not currently used (see FundingRow above) -- bring this back once
   there are enough agencies that a scrolling strip makes more sense
   than a still row.
   ======================================================================== */
function FundingScroll() {
  const items = [...FUNDING_AGENCIES, ...FUNDING_AGENCIES];
  return u.jsx("div", {
    className: "funding-marquee",
    children: u.jsx("div", {
      className: "funding-marquee-track",
      children: items.map((agency, i) =>
        u.jsx(
          "div",
          {
            className: "funding-logo",
            "aria-hidden": i >= FUNDING_AGENCIES.length ? "true" : "false",
            children: agency.logo
              ? u.jsx("img", {
                  src: asset(agency.logo),
                  alt: agency.name,
                  style: { height: "100%", width: "auto", objectFit: "contain" },
                })
              : u.jsx("span", { children: agency.name }),
          },
          i,
        ),
      ),
    }),
  });
}

function GalleryExplorer() {
  const [openIndex, setOpenIndex] = O.useState(null);
  const [gridMounted, setGridMounted] = O.useState(false);
  const [lightboxIndex, setLightboxIndex] = O.useState(null);

  const folderRefs = O.useRef([]);
  const headerRef = O.useRef(null);
  const photoRefs = O.useRef([]);
  const flipRect = O.useRef(null);
  const lightboxFlipRect = O.useRef(null);
  const prevOpenIndexRef = O.useRef(null);

  const reducedMotion = O.useRef(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  ).current;

  function openFolder(i) {
    const el = folderRefs.current[i];
    flipRect.current = !reducedMotion && el ? el.getBoundingClientRect() : null;
    setOpenIndex(i);
  }

  function closeFolder() {
    const el = headerRef.current;
    flipRect.current = !reducedMotion && el ? el.getBoundingClientRect() : null;
    prevOpenIndexRef.current = openIndex;
    setOpenIndex(null);
  }

  O.useLayoutEffect(() => {
    if (!flipRect.current) return;
    const targetEl = openIndex !== null ? headerRef.current : folderRefs.current[prevOpenIndexRef.current];
    if (!targetEl) {
      flipRect.current = null;
      return;
    }
    const oldRect = flipRect.current;
    flipRect.current = null;
    const newRect = targetEl.getBoundingClientRect();
    const dx = oldRect.left - newRect.left;
    const dy = oldRect.top - newRect.top;
    const sx = oldRect.width / newRect.width;
    const sy = oldRect.height / newRect.height;
    targetEl.style.transformOrigin = "top left";
    targetEl.style.transition = "none";
    targetEl.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
    targetEl.getBoundingClientRect();
    requestAnimationFrame(() => {
      targetEl.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
      targetEl.style.transform = "translate(0px, 0px) scale(1, 1)";
    });
    function onEnd() {
      targetEl.style.transition = "";
      targetEl.style.transform = "";
      targetEl.style.transformOrigin = "";
      targetEl.removeEventListener("transitionend", onEnd);
    }
    targetEl.addEventListener("transitionend", onEnd);
  }, [openIndex]);

  // Drives the photo grid's staggered "spill" entrance: render the grid
  // hidden first, wait a couple of frames so the browser actually paints
  // that hidden state, then flip it to visible so the transition (declared
  // in PhotoTile's style) has something to animate between.
  O.useEffect(() => {
    if (openIndex === null) return;
    if (reducedMotion) {
      setGridMounted(true);
      return;
    }
    setGridMounted(false);
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setGridMounted(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [openIndex, reducedMotion]);

  function openLightbox(i) {
    const el = photoRefs.current[i];
    lightboxFlipRect.current = !reducedMotion && el ? el.getBoundingClientRect() : null;
    setLightboxIndex(i);
  }

  const folder = openIndex !== null ? GALLERY_FOLDERS[openIndex] : null;

  return u.jsxs("div", {
    children: [
      openIndex === null
        ? u.jsx("div", {
            className: "gallery-folders-grid",
            children: GALLERY_FOLDERS.map((f, i) =>
              u.jsx(
                Y,
                {
                  delay: i * 0.08,
                  children: u.jsx(FolderTile, {
                    folder: f,
                    index: i,
                    tileRef: (el) => (folderRefs.current[i] = el),
                    onOpen: () => openFolder(i),
                  }),
                },
                f.name,
              ),
            ),
          })
        : u.jsxs("div", {
            children: [
              u.jsxs("div", {
                ref: headerRef,
                className: "gallery-open-header",
                style: { background: GALLERY_GRADIENTS[openIndex % GALLERY_GRADIENTS.length] },
                children: [
                  u.jsxs("button", {
                    className: "gallery-back-btn",
                    onClick: closeFolder,
                    children: [
                      u.jsx(IconChevron, { size: 17, direction: "left" }),
                      "All folders",
                    ],
                  }),
                  u.jsx("span", { className: "gallery-open-name", children: folder.name }),
                  u.jsx("span", {
                    className: "gallery-open-count",
                    children: `${folder.photos.length} photo${folder.photos.length === 1 ? "" : "s"}`,
                  }),
                ],
              }),
              u.jsx("div", {
                className: "gallery-photo-grid",
                children: folder.photos.map((photo, i) =>
                  u.jsx(PhotoTile, {
                    key: openIndex + "-" + i,
                    photo,
                    index: i,
                    tileRef: (el) => (photoRefs.current[i] = el),
                    mounted: gridMounted,
                    reducedMotion,
                    onOpen: () => openLightbox(i),
                  }),
                ),
              }),
            ],
          }),
      lightboxIndex !== null &&
        u.jsx(GalleryLightbox, {
          photos: folder.photos,
          index: lightboxIndex,
          setIndex: setLightboxIndex,
          onClose: () => setLightboxIndex(null),
          reducedMotion,
          flipRectRef: lightboxFlipRect,
        }),
    ],
  });
}

function kp({ setPage: e }) {
  return u.jsxs("section", {
    style: { background: v.white, padding: "56px 28px 110px" },
    children: [
      u.jsxs("div", {
        style: { maxWidth: 1180, margin: "0 auto" },
        children: [
          u.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "0.7fr 1.3fr",
              gap: 40,
              alignItems: "start",
              marginBottom: 50,
            },
            className: "gallery-header-grid",
            children: [
              u.jsx("h1", {
                style: {
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: FONT_SIZES.galleryPageTitle,
                  color: v.ink,
                  margin: 0,
                },
                children: "Gallery",
              }),
              u.jsx("p", {
                style: {
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  color: v.grayLight,
                  fontSize: FONT_SIZES.galleryPageText,
                  lineHeight: 1.4,
                  margin: 0,
                },
                children:
                  "Snapshots from lab life, experiments, collaborations, seminars, and scientific community.",
              }),
            ],
          }),
          u.jsx(GalleryExplorer, {}),
          // The "Latest updates" section is commented out for now -- to
          // bring it back, delete the "null," line right below this and
          // remove the /* and */ marks around the block underneath it.
          null,
          /*
          u.jsxs("div", {
            style: { marginTop: 90 },
            children: [
              u.jsx("h2", {
                style: {
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: FONT_SIZES.galleryNewsTitle,
                  color: v.ink,
                  margin: "0 0 34px",
                },
                children: "Latest updates",
              }),
              u.jsx("div", {
                children: NEWS_UPDATES.map((item, idx) =>
                  u.jsx(
                    Y,
                    {
                      delay: idx * 0.05,
                      children: u.jsxs("div", {
                        style: {
                          display: "flex",
                          gap: 14,
                          alignItems: "baseline",
                          borderTop: `1px solid ${v.line}`,
                          padding: "18px 0",
                        },
                        children: [
                          u.jsx("span", {
                            style: {
                              color: v.purple,
                              fontSize: FONT_SIZES.galleryNewsBullet,
                              lineHeight: 1,
                              flexShrink: 0,
                            },
                            children: "\u2022",
                          }),
                          u.jsxs("p", {
                            style: {
                              margin: 0,
                              color: v.gray,
                              fontSize: FONT_SIZES.galleryNewsText,
                              lineHeight: 1.7,
                            },
                            children: [
                              u.jsx("strong", { style: { color: v.ink }, children: item.date }),
                              ": " + item.text,
                            ],
                          }),
                        ],
                      }),
                    },
                    item.date,
                  ),
                ).concat(u.jsx("div", { style: { borderTop: `1px solid ${v.line}` }, key: "news-end" })),
              }),
            ],
          }),
          */
        ],
      }),
      u.jsx("style", {
        children: `
        /* ---------- Folders (closed state) ---------- */
        .gallery-folders-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .gallery-folder-tile {
          position: relative;
          display: block;
          width: 100%;
          border: none;
          border-radius: 22px;
          padding: 26px 22px 22px;
          cursor: pointer;
          outline: none;
          text-align: left;
          -webkit-tap-highlight-color: transparent;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          transition: transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s ease;
        }
        .gallery-folder-tile:hover, .gallery-folder-tile:focus-visible {
          transform: translateY(-6px);
          box-shadow: 0 26px 50px rgba(20,10,40,0.28);
        }
        .gallery-folder-tile:focus-visible { box-shadow: 0 0 0 3px ${v.purple}, 0 26px 50px rgba(20,10,40,0.28); }
        .gallery-folder-peek {
          position: relative;
          height: 190px;
          margin-bottom: 10px;
        }
        .gallery-folder-peek-photo {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 46%;
          aspect-ratio: 1;
          border-radius: 10px;
          border: 4px solid rgba(255,255,255,0.92);
          box-shadow: 0 14px 26px rgba(0,0,0,0.35);
          transition: transform .35s cubic-bezier(.16,1,.3,1);
        }
        /* Resting position: same size, just rotated and offset sideways
           so the 3 preview photos read as a fanned-out hand of cards.
           The middle one (nth-child(2)) sits on top via z-index. */
        .gallery-folder-peek-photo:nth-child(1) {
          transform: translate(-50%, -50%) translate(-58px, 12px) rotate(-16deg);
          z-index: 1;
        }
        .gallery-folder-peek-photo:nth-child(2) {
          transform: translate(-50%, -50%) translate(0, -6px) rotate(0deg);
          z-index: 3;
        }
        .gallery-folder-peek-photo:nth-child(3) {
          transform: translate(-50%, -50%) translate(58px, 12px) rotate(16deg);
          z-index: 2;
        }
        /* On hover, the fan spreads a little wider still -- same size
           photos, just pushed further apart and tilted a bit more than
           their resting position above. */
        .gallery-folder-tile:hover .gallery-folder-peek-photo:nth-child(1),
        .gallery-folder-tile:focus-visible .gallery-folder-peek-photo:nth-child(1) {
          transform: translate(-50%, -50%) translate(-72px, 8px) rotate(-20deg);
        }
        .gallery-folder-tile:hover .gallery-folder-peek-photo:nth-child(2),
        .gallery-folder-tile:focus-visible .gallery-folder-peek-photo:nth-child(2) {
          transform: translate(-50%, -50%) translate(0, -14px) rotate(0deg);
        }
        .gallery-folder-tile:hover .gallery-folder-peek-photo:nth-child(3),
        .gallery-folder-tile:focus-visible .gallery-folder-peek-photo:nth-child(3) {
          transform: translate(-50%, -50%) translate(72px, 8px) rotate(20deg);
        }
        .gallery-folder-info {
          text-align: center;
          margin-top: 16px;
        }
        .gallery-folder-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 21px;
          color: #fff;
        }

        /* ---------- Open folder header + photo grid ---------- */
        .gallery-open-header {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          border-radius: 16px;
          padding: 16px 22px;
          margin-bottom: 26px;
        }
        .gallery-back-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,255,255,0.12);
          border: none;
          border-radius: 999px;
          padding: 8px 14px 8px 10px;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: background .2s ease;
        }
        .gallery-back-btn:hover, .gallery-back-btn:focus-visible { background: rgba(255,255,255,0.22); }
        .gallery-open-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 19px;
          color: #fff;
          margin-right: auto;
        }
        .gallery-open-count {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 12.5px;
          color: rgba(255,255,255,0.65);
        }
        .gallery-photo-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .gallery-photo-tile {
          aspect-ratio: 1;
          border-radius: 14px;
          overflow: hidden;
          background: ${v.cardBg};
          cursor: pointer;
          outline: none;
        }
        .gallery-photo-tile:focus-visible { box-shadow: 0 0 0 3px ${v.purple}; }
        .gallery-photo-tile > img, .gallery-photo-tile > div {
          transition: transform .3s cubic-bezier(.16,1,.3,1);
        }
        .gallery-photo-tile:hover > img, .gallery-photo-tile:hover > div,
        .gallery-photo-tile:focus-visible > img, .gallery-photo-tile:focus-visible > div {
          transform: scale(1.06);
        }

        @media (max-width: 900px) {
          .gallery-folders-grid { grid-template-columns: 1fr !important; }
          .gallery-photo-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `,
      }),
    ],
  });
}

function Sp() {
  return u.jsxs("section", {
    style: { background: v.white, padding: "56px 28px 110px" },
    children: [
      u.jsxs("div", {
        style: { maxWidth: 1180, margin: "0 auto" },
        children: [
          u.jsx("h1", {
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: FONT_SIZES.contactTitle,
              color: v.ink,
              margin: "0 0 20px",
            },
            children: "Get in touch",
          }),
          u.jsx("p", {
            style: {
              color: v.gray,
              maxWidth: 560,
              lineHeight: 1.7,
              fontSize: FONT_SIZES.contactText,
              marginBottom: 54,
            },
            children: GET_IN_TOUCH_BLURB,
          }),
          u.jsxs("div", {
            style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50 },
            className: "contact-grid",
            children: [
              u.jsx("div", {
                children: [
                  {
                    icon: lp,
                    label: "Address",
                    value: CONTACT_ADDRESS,
                  },
                  { icon: rp, label: "Email", value: CONTACT_EMAIL },
                  {
                    icon: op,
                    label: "Phone",
                    value: CONTACT_PHONE,
                  },
                  {
                    icon: lp,
                    label: "Google Maps",
                    value: CONTACT_MAP_LINK,
                    link: !0,
                  },
                ].map((n) =>
                  u.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        gap: 16,
                        alignItems: "flex-start",
                        marginBottom: 28,
                      },
                      children: [
                        u.jsx(n.icon, {
                          size: 19,
                          color: v.purple,
                          style: { marginTop: 2, flexShrink: 0 },
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("div", {
                              style: {
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                fontSize: FONT_SIZES.contactItemLabel,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: v.grayLight,
                                marginBottom: 6,
                              },
                              children: n.label,
                            }),
                            n.link
                              ? n.value
                                ? u.jsx("a", {
                                    href: n.value,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                      color: v.purple,
                                      fontSize: FONT_SIZES.contactMapLinkText,
                                      lineHeight: 1.6,
                                      textDecoration: "underline",
                                      fontFamily: "'Inter', sans-serif",
                                      cursor: "pointer",
                                    },
                                    children: "View on Google Maps",
                                  })
                                : u.jsx("p", {
                                    style: {
                                      color: v.grayLight,
                                      fontSize: FONT_SIZES.contactMapPlaceholder,
                                      lineHeight: 1.6,
                                      fontStyle: "italic",
                                      margin: 0,
                                    },
                                    children:
                                      "(add your Google Maps link -- see CONTACT_MAP_LINK near the top of this file)",
                                  })
                              : u.jsx("p", {
                                  style: {
                                    color: v.ink,
                                    fontSize: FONT_SIZES.contactItemValue,
                                    lineHeight: 1.6,
                                    margin: 0,
                                  },
                                  children: formatRichText(n.value),
                                }),
                          ],
                        }),
                      ],
                    },
                    n.label,
                  ),
                ),
              }),
              u.jsx("div", {
                style: {
                  background: v.cardBg,
                  borderRadius: 18,
                  overflow: "hidden",
                  minHeight: 320,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: CONTACT_IMAGE
                  ? u.jsx("img", {
                      src: asset(CONTACT_IMAGE),
                      alt: SITE_NAME,
                      style: {
                        width: "100%",
                        height: "100%",
                        minHeight: 320,
                        objectFit: "cover",
                        display: "block",
                      },
                    })
                  : u.jsx("p", {
                      style: {
                        color: v.grayLight,
                        fontSize: FONT_SIZES.contactImagePlaceholder,
                        lineHeight: 1.6,
                        fontFamily: "'Inter', sans-serif",
                        textAlign: "center",
                        padding: "0 28px",
                      },
                      children:
                        "Add an image -- see CONTACT_IMAGE near the top of this file.",
                    }),
              }),
            ],
          }),
          u.jsx("div", {
            style: { marginTop: 50 },
            children: u.jsx("div", {
              style: {
                background: v.cardBg,
                borderRadius: 18,
                overflow: "hidden",
                minHeight: 380,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              children: CONTACT_MAP_EMBED
                ? u.jsx("iframe", {
                    src: CONTACT_MAP_EMBED,
                    width: "100%",
                    height: "380",
                    style: { border: 0, display: "block" },
                    allowFullScreen: !0,
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade",
                    title: "Map to " + SITE_NAME,
                  })
                : u.jsx("p", {
                    style: {
                      color: v.grayLight,
                      fontSize: FONT_SIZES.contactMapEmbedPlaceholder,
                      lineHeight: 1.6,
                      fontFamily: "'Inter', sans-serif",
                      textAlign: "center",
                      padding: "0 28px",
                    },
                    children:
                      "Add an embedded map -- see CONTACT_MAP_EMBED near the top of this file.",
                  }),
            }),
          }),
        ],
      }),
      u.jsx("style", {
        children:
          "@media (max-width: 800px) { .contact-grid { grid-template-columns: 1fr !important; } }",
      }),
    ],
  });
}


const PAGE_IDS = ["team", "publications", "research", "gallery", "opportunities", "contact"];
function pathToPage(pathname) {
  const segs = pathname.split("/").filter(Boolean);
  const found = segs.find((s) => PAGE_IDS.includes(s));
  return found || "home";
}
function buildPagePath(page) {
  const segs = window.location.pathname.split("/").filter(Boolean);
  const baseSegs = segs.filter((s) => !PAGE_IDS.includes(s));
  const newSegs = page === "home" ? baseSegs : [...baseSegs, page];
  return "/" + newSegs.join("/") + (newSegs.length ? "/" : "");
}
// The site root, worked out from the current URL -- e.g. "/" if this
// site is hosted at the root of its own domain, or "/repo-name/" if
// it's hosted as a GitHub Pages *project* site under a repo name. Used
// by asset() below so images keep working correctly no matter which
// page (home, team/, publications/, etc.) they're viewed from.
const SITE_ROOT = (() => {
  const segs = window.location.pathname.split("/").filter(Boolean);
  const baseSegs = segs.filter((s) => !PAGE_IDS.includes(s));
  return "/" + baseSegs.join("/") + (baseSegs.length ? "/" : "");
})();
// Wrap any image path from the editable content section (e.g.
// "images/roy.jpg") in asset(...) before using it in src -- this makes
// sure it still points to the right file no matter which page it's
// used from. External links (https://...) and paths that already start
// with "/" are left exactly as they are.
function asset(path) {
  if (!path) return path;
  if (/^https?:\/\//.test(path) || path.startsWith("/")) return path;
  return SITE_ROOT + path;
}
function jp() {
  const [e, t] = O.useState(() => pathToPage(window.location.pathname)),
    [n, r] = O.useState(!0);
  O.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [e]);
  O.useEffect(() => {
    const onPopState = () => t(pathToPage(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  const navigate = (page) => {
    t(page);
    const path = buildPagePath(page);
    if (window.location.pathname !== path) {
      window.history.pushState({ page }, "", path);
    }
  };
  const l = {
      research: !1,
      team: !1,
      gallery: !1,
      contact: !1,
      opportunities: !1,
      publications: !0,
    },
    i = e === "home",
    o = i ? n : l[e],
    s = {
      home: u.jsx(gp, { setPage: navigate, setNavDark: r }),
      research: u.jsx(vp, { setPage: navigate }),
      team: u.jsx(xp, { setPage: navigate }),
      publications: u.jsx(wp, {}),
      gallery: u.jsx(kp, { setPage: navigate }),
      opportunities: u.jsx(Op, { setPage: navigate }),
      contact: u.jsx(Sp, {}),
    }[e];
  return u.jsxs("div", {
    style: {
      background: i || e === "publications" ? v.black : v.white,
      minHeight: "100vh",
    },
    className: "rl-root",
    children: [
      u.jsx("style", {
        children: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        button:focus-visible, input:focus-visible, textarea:focus-visible { outline: 2px solid ${v.purple}; outline-offset: 2px; }

        .rl-root, .rl-root * { cursor: none; }
        .rl-root input, .rl-root textarea { cursor: text; }

        /* Even though the real cursor is hidden site-wide just above
           (replaced by the custom on-screen circle), links, buttons, and
           custom clickable cards still need the browser's own cursor
           turned back on for them specifically -- that's what makes the
           OS show its native hand/pointer icon layered underneath the
           custom circle when you hover something clickable. This one
           rule covers every kind of clickable element the site uses,
           including everything nested inside a clickable card. Nothing
           to edit here.*/
        .rl-root a,
        .rl-root button,
        .rl-root [role="button"],
        .rl-root [role="button"] * {
          cursor: pointer;
        }

        @keyframes blobA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(26px,-18px) scale(1.06); } }
        @keyframes blobB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-22px,20px) scale(1.08); } }
        @keyframes blobC { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(18px,16px) scale(1.05); } }
        @keyframes bubbleRise {
          0% { opacity: 0.55; transform: translate(-50%,-50%) translate(0,0) scale(0.5); }
          25% { opacity: 0.55; transform: translate(-50%,-50%) translate(calc(var(--dx) * 0.25), calc(var(--dy) * 0.25)) scale(1); }
          100% { opacity: 0; transform: translate(-50%,-50%) translate(var(--dx), var(--dy)) scale(0.3); }
        }

        .pill-btn { transition: transform .22s ease, box-shadow .22s ease; }
        /* Funding agencies -- still row (currently in use). Just lays
           the logos out in a row, centered, wrapping onto a second line
           on narrow screens if there isn't room. No animation. */
        .funding-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          gap: 56px;
        }
        .funding-row .funding-logo { opacity: 1; filter: none; }
        /* Funding agencies -- infinite scrolling logo strip (not
           currently used -- see the comment above FundingScroll further
           up this file for how to switch back to this). The track is
           twice the agency list, scrolled left by exactly half its width
           (50%) on a loop, so it looks like it never stops. Change the
           "28s" below to speed the scroll up (smaller) or slow it down
           (bigger). Hovering pauses it so people can read a logo. */
        .funding-marquee {
          overflow: hidden;
          width: 100%;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .funding-marquee-track {
          display: flex;
          align-items: center;
          gap: 96px;
          width: max-content;
          animation: funding-scroll 28s linear infinite;
        }
        .funding-marquee:hover .funding-marquee-track { animation-play-state: paused; }
        .funding-logo {
          flex: 0 0 auto;
          height: 100px;
          min-width: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: ${v.grayLight};
          filter: grayscale(1);
          opacity: 0.65;
          transition: opacity .2s ease, filter .2s ease;
        }
        .funding-logo:hover { opacity: 1; filter: grayscale(0); }
        @keyframes funding-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .funding-marquee-track { animation: none; }
          .funding-marquee { overflow-x: auto; }
        }
        .pill-btn:hover { transform: translateY(-2px) scale(1.025); box-shadow: 0 10px 26px rgba(0,0,0,.18); }
        .pill-arrow { transition: transform .22s ease; }
        .pill-btn:hover .pill-arrow { transform: translateX(3px); }

        .text-link { transition: opacity .2s ease; }
        .text-link:hover { opacity: 0.72; }
        .text-link-arrow { transition: transform .2s ease; }
        .text-link:hover .text-link-arrow { transform: translateX(4px); }

        .hover-card { transition: transform .28s cubic-bezier(.16,1,.3,1), box-shadow .28s ease; }
        .hover-card:hover { transform: translateY(-6px); box-shadow: 0 18px 34px rgba(17,17,17,.10); }
        .hover-card-dark { transition: transform .28s cubic-bezier(.16,1,.3,1), box-shadow .28s ease; }
        .hover-card-dark:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,0,0,.5); }

        .paper-row { transition: padding-left .25s ease, opacity .25s ease; }
        .paper-row:hover { padding-left: 14px; }
        .pub-title-link:hover { text-decoration: underline; }
        .pub-external-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 13.5px;
          text-decoration: none;
          transition: background .2s ease, border-color .2s ease;
        }
        .pub-external-link:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.5);
        }

        .gallery-tile { transition: transform .3s cubic-bezier(.16,1,.3,1); }
        .gallery-tile:hover { transform: scale(1.025); }

        .team-card {
          display: block;
          border-radius: 18px;
          cursor: pointer;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }
        .team-card:focus-visible .team-card-inner {
          box-shadow: 0 0 0 3px ${v.purple}, 0 24px 48px rgba(20,10,40,0.3);
        }
        .team-card-inner {
          position: relative;
          width: 100%;
          aspect-ratio: 0.8;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          transition: box-shadow .35s ease;
        }
        .team-card:hover .team-card-inner {
          box-shadow: 0 24px 48px rgba(20,10,40,0.3);
        }
        .team-card-spot {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at var(--spot-x,50%) var(--spot-y,50%), rgba(255,255,255,0.18), transparent 55%);
          opacity: 0;
          transition: opacity .35s ease;
        }
        .team-card:hover .team-card-spot { opacity: 1; }
        .team-card-index {
          position: absolute;
          top: 14px;
          left: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.55);
        }
        .team-card-base {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          padding: 18px 18px 16px;
          background: linear-gradient(0deg, rgba(0,0,0,0.62) 0%, transparent 100%);
          transition: opacity .3s ease;
        }
        .team-card-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 18px;
          color: #fff;
        }
        .team-card-role {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 10.5px;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-top: 3px;
        }
        .team-card-panel {
          position: absolute;
          left: 0; right: 0; bottom: 0; top: 58%;
          padding: 18px 20px 20px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: linear-gradient(180deg, rgba(15,10,22,0) 0%, rgba(16,10,24,0.55) 28%, rgba(17,10,26,0.8) 65%, rgba(18,10,28,0.86) 100%);
          transform: translateY(10%);
          opacity: 0;
          transition: transform .4s cubic-bezier(.16,1,.3,1), opacity .3s ease;
          pointer-events: none;
        }
        .team-card-panel.is-open { transform: translateY(0); opacity: 1; }
        .team-card-panel.is-featured {
          /* The first card (the lab's Principal Investigator) tends to
             have a longer "about" bio than everyone else, so its shaded
             area behind the text starts higher up -- giving the text
             more room -- instead of being darker like the other cards.
             To make this taller/shorter, adjust the "top" percentage
             below: a smaller number = a taller shaded area. */
          top: 35%;
        }
        .team-card-panel .team-card-name, .team-card-panel .team-card-role { color: #fff; }
        .team-card-about {
          margin: 10px 0 0;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          line-height: 1.55;
          color: rgba(255,255,255,0.82);
          white-space: pre-line;
        }

        /* ---------- Lightbox (shared by the Gallery page and the
           homepage's gallery preview strip, so this lives globally
           rather than being scoped to one page) ---------- */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(8,6,12,0.92);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 70px;
          animation: lightboxFadeIn .25s ease;
        }
        @keyframes lightboxFadeIn { from { opacity: 0; } to { opacity: 1; } }
        .lightbox-inner {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 100%;
          max-height: 100%;
        }
        .lightbox-image-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: min(88vw, 1100px);
          max-height: 72vh;
          border-radius: 12px;
          overflow: hidden;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 72vh;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          border-radius: 12px;
          transition: transform .35s ease, opacity .3s ease;
        }
        .lightbox-placeholder {
          width: min(60vw, 500px);
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${v.cardBg};
          border-radius: 12px;
          color: ${v.grayLight};
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          text-align: center;
          padding: 0 28px;
        }
        .lightbox-caption {
          margin: 18px 0 0;
          color: rgba(255,255,255,0.88);
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          text-align: center;
          max-width: 60ch;
        }
        .lightbox-counter {
          margin: 8px 0 0;
          color: rgba(255,255,255,0.45);
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          letter-spacing: 0.04em;
        }
        .lightbox-btn {
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: rgba(255,255,255,0.1);
          border: none;
          color: #fff;
          cursor: pointer;
          transition: background .2s ease;
        }
        .lightbox-btn:hover, .lightbox-btn:focus-visible { background: rgba(255,255,255,0.22); }
        .lightbox-close { top: 22px; right: 24px; }
        .lightbox-prev { top: 50%; left: 20px; transform: translateY(-50%); }
        .lightbox-next { top: 50%; right: 20px; transform: translateY(-50%); }
        @media (max-width: 640px) {
          .lightbox-backdrop { padding: 90px 16px 40px; }
          .lightbox-btn { width: 38px; height: 38px; }
          .lightbox-prev { left: 8px; }
          .lightbox-next { right: 8px; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `,
      }),
      u.jsx(mp, {}),
      u.jsx("div", {
        style: { fontFamily: "'Inter', sans-serif" },
        children: [
          u.jsx(hp, { page: e, setPage: navigate, dark: o }),
          u.jsx("div", { style: { paddingTop: i ? 0 : 84 }, children: s }),
          u.jsx(yp, { page: e }),
        ],
      }),
    ],
  });
}
ri.createRoot(document.getElementById("root")).render(
  u.jsx(Wc.StrictMode, { children: u.jsx(jp, {}) }),
);
