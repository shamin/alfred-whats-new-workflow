function run() {
  return app().getWhatsNews();
}

function app() {
  var whatsnews = [
    {
      name: "sign",
      link: "https://sign.new/",
      company: "Adobe",
      description: "Fill and sign PDF documents and forms.",
    },
    {
      name: "track",
      link: "https://track.new/",
      company: "Aftership",
      description: "Track your shipments across various couriers.",
    },
    {
      name: "roadmap",
      link: "https://roadmap.new/",
      company: "Aha",
      description:
        "Collaboratively build strategic roadmaps for your business.",
    },
    {
      name: "afclaim",
      link: "https://afclaim.new/",
      company: "American Fidelity",
      description: "File a claim towards your American Fidelity insurance.",
    },
    {
      name: "afreimburse",
      link: "https://afreimburse.new/",
      company: "American Fidelity",
      description:
        "Submit a reimbusement request from your American Fidelity account.",
    },
    {
      name: "bill",
      link: "https://bill.new/",
      company: "bill.com",
      description: "Create and send bills to your clients using bill.com.",
    },
    {
      name: "inv",
      link: "https://inv.new/",
      company: "bill.com",
      description: "Create an invoice for your business using bill.com",
    },
    {
      name: "buffer",
      link: "https://buffer.new/",
      company: "Buffer",
      description: "Schedule and manage your social media posts.",
    },
    {
      name: "bpmn",
      link: "https://bpmn.new/",
      company: "Business Modeler Preview",
      description: "Create BPMN and DMN files online for your business.",
    },
    {
      name: "dmn",
      link: "https://dmn.new/",
      company: "Business Modeler Preview",
      description: "Create BPMN and DMN files online for your business.",
    },
    {
      name: "duda",
      link: "https://duda.new/",
      company: "Duda",
      description: "Create your wbsite and manage your business online.",
    },
    {
      name: "shop",
      link: "https://shop.new/",
      company: "eBay",
      description: "Create an online shop on eBay.",
    },
    {
      name: "websitebuilder",
      link: "https://websitebuilder.new/",
      company: "GoDaddy",
      description: "Build a website for your business with GoDaddy.",
    },
    {
      name: "digiposte",
      link: "https://digiposte.new/",
      company: "La Poste",
      description: "Upload documents to your Digiposte account.",
    },
    {
      name: "teams",
      link: "https://teams.new/",
      company: "Microsoft Teams",
      description: "Chat with your team using Microsoft Teams.",
    },
    {
      name: "businesscard",
      link: "https://businesscard.new/",
      company: "Namecheap",
      description: "Design personalized business cards with Namecheap.",
    },
    {
      name: "contact",
      link: "https://contact.new/",
      company: "ScanBuddy.ai",
      description: "Create contacts by scanning your business cards.",
    },
    {
      name: "leads",
      link: "https://leads.new/",
      company: "ScanBuddy.ai",
      description: "Create contacts by scanning your business cards.",
    },
    {
      name: "shopify",
      link: "https://shopify.new/",
      company: "Shopify",
      description: "Start a new online shop on Shopify.",
    },
    {
      name: "agreement",
      link: "https://agreement.new/",
      company: "Sopimustieto",
      description: "Create Finnish business agreements using common templates.",
    },
    {
      name: "invoice",
      link: "https://invoice.new/",
      company: "Stripe",
      description: "Create an invoice for your business using Stripe.",
    },
    {
      name: "invoices",
      link: "https://invoices.new/",
      company: "Stripe",
      description: "Create an invoice for your business using Stripe.",
    },
    {
      name: "payment",
      link: "https://payment.new/",
      company: "Stripe",
      description: "Send and accept payments using Stripe.",
    },
    {
      name: "payments",
      link: "https://payments.new/",
      company: "Stripe",
      description: "Send and accept payments using Stripe.",
    },
    {
      name: "product",
      link: "https://product.new/",
      company: "Stripe",
      description: "Add a new offering to your Stripe product catalog.",
    },
    {
      name: "subscription",
      link: "https://subscription.new/",
      company: "Stripe",
      description:
        "Create new subscription accounts for your customers using Stripe.",
    },
    {
      name: "subscriptions",
      link: "https://subscriptions.new/",
      company: "Stripe",
      description:
        "Create new subscription accounts for your customers using Stripe.",
    },
    {
      name: "surveymonkey",
      link: "https://surveymonkey.new/",
      company: "SurveyMonkey",
      description: "Create a new survey using SurveyMonkey.",
    },
    {
      name: "fund",
      link: "https://fund.new/",
      company: "Vauban",
      description: "Design your investment fund using Vauban.",
    },
    {
      name: "corvid",
      link: "https://corvid.new/",
      company: "Wix",
      description: "Build a new website usig Wix.",
    },
    {
      name: "wix",
      link: "https://wix.new/",
      company: "Wix",
      description: "Build a new website usig Wix.",
    },
    {
      name: "hire",
      link: "https://hire.new/",
      company: "Ziprecruiter",
      description: "Create a job posting with ZipRecruiter.",
    },
    {
      name: "hires",
      link: "https://hires.new/",
      company: "Ziprecruiter",
      description: "Create a job posting with ZipRecruiter.",
    },
    {
      name: "compresspdf",
      link: "https://compresspdf.new/",
      company: "Adobe",
      description: "Compress PDF documents with simple drag and drop.",
    },
    {
      name: "create",
      link: "https://create.new/",
      company: "Adobe",
      description:
        "Design beautiful social media posts and more with Adobe Spark.",
    },
    {
      name: "spark",
      link: "https://spark.new/",
      company: "Adobe",
      description:
        "Design beautiful social media posts and more with Adobe Spark.",
    },
    {
      name: "stories",
      link: "https://stories.new/",
      company: "Adobe",
      description:
        "Design beautiful social media posts and more with Adobe Spark.",
    },
    {
      name: "jpgtopdf",
      link: "https://jpgtopdf.new/",
      company: "Adobe",
      description: "Convert JPG images to PDF.",
    },
    {
      name: "logo",
      link: "https://logo.new/",
      company: "Adobe",
      description: "Create a new logo for your business with Adobe Spark.",
    },
    {
      name: "pdf",
      link: "https://pdf.new/",
      company: "Adobe",
      description: "Convert Microsoft Word documents to PDF.",
    },
    {
      name: "convertpdf",
      link: "https://convertpdf.new/",
      company: "Adobe",
      description: "Convert Microsoft Word documents to PDF.",
    },
    {
      name: "wordtopdf",
      link: "https://wordtopdf.new/",
      company: "Adobe",
      description: "Convert Microsoft Word documents to PDF.",
    },
    {
      name: "episode",
      link: "https://episode.new/",
      company: "Anchor",
      description:
        "Record a new episode for your podcast using Anchor by Spotify.",
    },
    {
      name: "podcast",
      link: "https://podcast.new/",
      company: "Anchor",
      description:
        "Record a new episode for your podcast using Anchor by Spotify.",
    },
    {
      name: "post",
      link: "https://post.new/",
      company: "Automattic",
      description: "Create a new blog post on your Wordpress blog.",
    },
    {
      name: "befunky",
      link: "https://befunky.new/",
      company: "BeFunky",
      description: "Quickly edit, filter, and enhance your photos.",
    },
    {
      name: "collage",
      link: "https://collage.new/",
      company: "BeFunky",
      description: "Arrange multiple photos into a ready-to-share collage.",
    },
    {
      name: "board",
      link: "https://board.new/",
      company: "Board",
      description: "Collaborate remotely on an online whiteboard.",
    },
    {
      name: "canva",
      link: "https://canva.new/",
      company: "Canva",
      description: "Create a new Canva design with your team.",
    },
    {
      name: "design",
      link: "https://design.new/",
      company: "Canva",
      description: "Create a new Canva design with your team.",
    },
    {
      name: "poster",
      link: "https://poster.new/",
      company: "Canva",
      description: "Create a new Canva poster with your team.",
    },
    {
      name: "score",
      link: "https://score.new/",
      company: "flat.io",
      description: "Write music online with this collaborative score editor.",
    },
    {
      name: "flipbook",
      link: "https://flipbook.new/",
      company: "Flipping Book",
      description: "Convert PDFs into digital flipbooks you can share.",
    },
    {
      name: "favicon",
      link: "https://favicon.new/",
      company: "realfavicongenerator.net",
      description: "Generate a favicon for your website.",
    },
    {
      name: "image",
      link: "https://image.new/",
      company: "Image Editor",
      description: "Edit images and photos online.",
    },
    {
      name: "webstory",
      link: "https://webstory.new/",
      company: "makestories.io",
      description: "Create a new web story using MakeStories.",
    },
    {
      name: "medium",
      link: "https://medium.new/",
      company: "Medium",
      description: "Create a new story on Medium.",
    },
    {
      name: "story",
      link: "https://story.new/",
      company: "Medium",
      description: "Create a new story on Medium.",
    },
    {
      name: "stream",
      link: "https://stream.new/",
      company: "Mux",
      description: "Upload and edit your video online.",
    },
    {
      name: "mybrand",
      link: "https://mybrand.new/",
      company: "My Brand New Logo",
      description: "Create a new logo for your business and brand.",
    },
    {
      name: "logomaker",
      link: "https://logomaker.new/",
      company: "Namecheap",
      description: "Design a new business logo with Namecheap.",
    },
    {
      name: "cad",
      link: "https://cad.new/",
      company: "OnShape",
      description: "Create a new CAD design online.",
    },
    {
      name: "playlist",
      link: "https://playlist.new/",
      company: "Spotify",
      description: "Create a new Spotify playlist.",
    },
    {
      name: "recording",
      link: "https://recording.new/",
      company: "tella.tv",
      description: "Edit your video online.",
    },
    {
      name: "coda",
      link: "https://coda.new/",
      company: "Coda",
      description:
        "Create a new doc for teams that combines documents, spreadsheets, and building blocks.",
    },
    {
      name: "asana",
      link: "https://asana.new/",
      company: "Asana",
      description: "Add a new task to your Asana project.",
    },
    {
      name: "task",
      link: "https://task.new/",
      company: "Asana",
      description: "Add a new task to your Asana project.",
    },
    {
      name: "blog",
      link: "https://blog.new/",
      company: "Automattic",
      description: "Create a new blog on wordpress.com.",
    },
    {
      name: "bitly",
      link: "https://bitly.new/",
      company: "Bitly",
      description: "Create memorable, short links to your website.",
    },
    {
      name: "link",
      link: "https://link.new/",
      company: "Bitly",
      description: "Create memorable, short links to your website.",
    },
    {
      name: "card",
      link: "https://card.new/",
      company: "Cotano",
      description: "Add a new card to your Cotano boards to track projects.",
    },
    {
      name: "version",
      link: "https://version.new/",
      company: "creativehub",
      description: "Share and comment on large files and chat live.",
    },
    {
      name: "resume",
      link: "https://resume.new/",
      company: "CV2You",
      description:
        "Build a new resume with one of CV2You's customizable templates.",
    },
    {
      name: "dataproject",
      link: "https://dataproject.new/",
      company: "data.world",
      description: "Create a new project in data.world's data catalog.",
    },
    {
      name: "dataprojects",
      link: "https://dataprojects.new/",
      company: "data.world",
      description: "Create a new project in data.world's data catalog.",
    },
    {
      name: "dataset",
      link: "https://dataset.new/",
      company: "data.world",
      description: "Add a new data set to your data.world data catalog.",
    },
    {
      name: "datasets",
      link: "https://datasets.new/",
      company: "data.world",
      description: "Add a new data set to your data.world data catalog.",
    },
    {
      name: "diagram",
      link: "https://diagram.new/",
      company: "Diagrams.net",
      description: "Create a flowchart diagram to map processes.",
    },
    {
      name: "diagrams",
      link: "https://diagrams.new/",
      company: "Diagrams.net",
      description: "Create a flowchart diagram to map processes.",
    },
    {
      name: "cal",
      link: "https://cal.new/",
      company: "Google Calendar",
      description: "Create and send a new Google Calendar invite.",
    },
    {
      name: "meeting",
      link: "https://meeting.new/",
      company: "Google Calendar",
      description: "Create and send a new Google Calendar invite.",
    },
    {
      name: "doc",
      link: "https://doc.new/",
      company: "Google Docs",
      description: "Create a new document using Google Docs.",
    },
    {
      name: "docs",
      link: "https://docs.new/",
      company: "Google Docs",
      description: "Create a new document using Google Docs.",
    },
    {
      name: "document",
      link: "https://document.new/",
      company: "Google Docs",
      description: "Create a new document using Google Docs.",
    },
    {
      name: "documents",
      link: "https://documents.new/",
      company: "Google Docs",
      description: "Create a new document using Google Docs.",
    },
    {
      name: "form",
      link: "https://form.new/",
      company: "Google Forms",
      description: "Create a new form using Google Forms.",
    },
    {
      name: "forms",
      link: "https://forms.new/",
      company: "Google Forms",
      description: "Create a new form using Google Forms.",
    },
    {
      name: "keep",
      link: "https://keep.new/",
      company: "Google Keep",
      description: "Create a new note using Google Keep.",
    },
    {
      name: "note",
      link: "https://note.new/",
      company: "Google Keep",
      description: "Create a new note using Google Keep.",
    },
    {
      name: "notes",
      link: "https://notes.new/",
      company: "Google Keep",
      description: "Create a new note using Google Keep.",
    },
    {
      name: "meet",
      link: "https://meet.new/",
      company: "Google Meet",
      description:
        "Launch a real-time meeting from your browser using Google Meet.",
    },
    {
      name: "sheet",
      link: "https://sheet.new/",
      company: "Google Sheet",
      description: "Create a new spreadsheet using Google Sheets.",
    },
    {
      name: "sheets",
      link: "https://sheets.new/",
      company: "Google Sheet",
      description: "Create a new spreadsheet using Google Sheets.",
    },
    {
      name: "spreadsheet",
      link: "https://spreadsheet.new/",
      company: "Google Sheet",
      description: "Create a new spreadsheet using Google Sheets.",
    },
    {
      name: "spreadsheets",
      link: "https://spreadsheets.new/",
      company: "Google Sheet",
      description: "Create a new spreadsheet using Google Sheets.",
    },
    {
      name: "site",
      link: "https://site.new/",
      company: "Google Sites",
      description: "Build and publish a website using Google Sites.",
    },
    {
      name: "sites",
      link: "https://sites.new/",
      company: "Google Sites",
      description: "Build and publish a website using Google Sites.",
    },
    {
      name: "website",
      link: "https://website.new/",
      company: "Google Sites",
      description: "Build and publish a website using Google Sites.",
    },
    {
      name: "deck",
      link: "https://deck.new/",
      company: "Google Slides",
      description: "Create an online presentation using Google Slides.",
    },
    {
      name: "presentation",
      link: "https://presentation.new/",
      company: "Google Slides",
      description: "Create an online presentation using Google Slides.",
    },
    {
      name: "slide",
      link: "https://slide.new/",
      company: "Google Slides",
      description: "Create an online presentation using Google Slides.",
    },
    {
      name: "slides",
      link: "https://slides.new/",
      company: "Google Slides",
      description: "Create an online presentation using Google Slides.",
    },
    {
      name: "icq",
      link: "https://icq.new/",
      company: "ICQ",
      description: "Chat with friends on ICQ.",
    },
    {
      name: "id",
      link: "https://id.new/",
      company: "id.new",
      description: "Generate test identities for testing purposes.",
    },
    {
      name: "freehand",
      link: "https://freehand.new/",
      company: "InVision",
      description:
        "Collaborate on an online whiteboard using InVision's Freehand.",
    },
    {
      name: "cv",
      link: "https://cv.new/",
      company: "KickResume",
      description: "Create a standout resume with KickResume.",
    },
    {
      name: "list",
      link: "https://list.new/",
      company: "Liner",
      description: "Create a new list on Liner.",
    },
    {
      name: "excel",
      link: "https://excel.new/",
      company: "Microsoft Excel",
      description: "Create a spreadsheet using Excel.",
    },
    {
      name: "powerpoint",
      link: "https://powerpoint.new/",
      company: "Microsoft PowerPoint",
      description: "Create a new presentation using PowerPoint.",
    },
    {
      name: "ppt",
      link: "https://ppt.new/",
      company: "Microsoft PowerPoint",
      description: "Create a new presentation using PowerPoint.",
    },
    {
      name: "pptx",
      link: "https://pptx.new/",
      company: "Microsoft PowerPoint",
      description: "Create a new presentation using PowerPoint.",
    },
    {
      name: "sway",
      link: "https://sway.new/",
      company: "Microsoft Sway",
      description: "Create beautiful designs using Microsoft Sway.",
    },
    {
      name: "word",
      link: "https://word.new/",
      company: "Microsoft Word",
      description: "Create a new document using Word.",
    },
    {
      name: "docx",
      link: "https://docx.new/",
      company: "Microsoft Word",
      description: "Create a new document using Word.",
    },
    {
      name: "mindmap",
      link: "https://mindmap.new/",
      company: "MindMeister",
      description: "Create a new mindmap and share your ideas on MindMeister.",
    },
    {
      name: "prezi",
      link: "https://prezi.new/",
      company: "Prezi",
      description: "Design beautiful presentations using Prezi.",
    },
    {
      name: "poll",
      link: "https://poll.new/",
      company: "Slido",
      description: "Create a poll for your Slido meeting.",
    },
    {
      name: "slido",
      link: "https://slido.new/",
      company: "Slido",
      description: "Start a new Slido meeting.",
    },
    {
      name: "sprout",
      link: "https://sprout.new/",
      company: "Sprout",
      description: "Create a new note on Sprout.",
    },
    {
      name: "page",
      link: "https://page.new/",
      company: "Tettra",
      description: "Create a new page in your Tettra knowledge base.",
    },
    {
      name: "tettra",
      link: "https://tettra.new/",
      company: "Tettra",
      description: "Create a new page in your Tettra knowledge base.",
    },
    {
      name: "suggest",
      link: "https://suggest.new/",
      company: "Tettra",
      description: "Suggest new content for your Tettra knowledge base.",
    },
    {
      name: "text",
      link: "https://text.new/",
      company: "Text Editor",
      description: "Quickly write a note in this online text editor.",
    },
    {
      name: "upload",
      link: "https://upload.new/",
      company: "Upload.new",
      description: "Upload and share a file.",
    },
    {
      name: "chat",
      link: "https://chat.new/",
      company: "Vieta",
      description: "Start a new chatroom on Vieta.",
    },
    {
      name: "letsmeet",
      link: "https://letsmeet.new/",
      company: "Webex",
      description: "Initiate a Webex meeting.",
    },
    {
      name: "mymeet",
      link: "https://mymeet.new/",
      company: "Webex",
      description: "Initiate a Webex meeting.",
    },
    {
      name: "webex",
      link: "https://webex.new/",
      company: "Webex",
      description: "Initiate a Webex meeting.",
    },
    {
      name: "todo",
      link: "https://todo.new/",
      company: "WIP",
      description: "Add a new task to your WIP todo list.",
    },
    {
      name: "zip",
      link: "https://zip.new/",
      company: "Zip Extractor",
      description: "Create new zip archive to easily store and share files.",
    },
    {
      name: "pen",
      link: "https://pen.new/",
      company: "CodePen",
      description:
        "Prototype your frontend code in CodePen's online development sandbox.",
    },
    {
      name: "flutter",
      link: "https://flutter.new/",
      company: "Flutter",
      description: "Prototype your app using Flutter's online editor.",
    },
    {
      name: "gist",
      link: "https://gist.new/",
      company: "Github",
      description: "Open new Github gists.",
    },
    {
      name: "github",
      link: "https://github.new/",
      company: "Github",
      description: "Open new Github repositories.",
    },
    {
      name: "repo",
      link: "https://repo.new/",
      company: "Github",
      description: "Open new Github repositories.",
    },
    {
      name: "glitch",
      link: "https://glitch.new/",
      company: "Glitch",
      description: "Code full-stack apps in your browser and collaborate live",
    },
    {
      name: "script",
      link: "https://script.new/",
      company: "Google AppScript",
      description:
        "Create and share new editor functions using Google App Script.",
    },
    {
      name: "apps",
      link: "https://apps.new/",
      company: "Kodular",
      description:
        "Start building an app using Kodular's drag and drop development suite.",
    },
    {
      name: "matlab",
      link: "https://matlab.new/",
      company: "MathWorks",
      description: "Open MATLAB in your browser and start programming.",
    },
    {
      name: "mathworks",
      link: "https://mathworks.new/",
      company: "MathWorks",
      description: "Open MATLAB in your browser and start programming.",
    },
    {
      name: "env",
      link: "https://env.new/",
      company: "Microsoft Visual Studio",
      description: "Create a new Visual Studio codespace for your project.",
    },
    {
      name: "vso",
      link: "https://vso.new/",
      company: "Microsoft Visual Studio",
      description: "Create a new Visual Studio codespace for your project.",
    },
    {
      name: "vsonline",
      link: "https://vsonline.new/",
      company: "Microsoft Visual Studio",
      description: "Create a new Visual Studio codespace for your project.",
    },
    {
      name: "playground",
      link: "https://playground.new/",
      company: "RunKit",
      description: "Prototype and launch your APIs using RunKit.",
    },
    {
      name: "api",
      link: "https://api.new/",
      company: "RunKit",
      description: "Prototype and launch your APIs using RunKit.",
    },
    {
      name: "sql",
      link: "https://sql.new/",
      company: "SeekWell",
      description: "Write SQL queries for your data in other applications.",
    },
    {
      name: "deploy",
      link: "https://deploy.new/",
      company: "Vercel",
      description:
        "Import your frontend projects to Vercel for preview and deployment.",
    },
    {
      name: "zeit",
      link: "https://zeit.new/",
      company: "Vercel",
      description:
        "Import your frontend projects to Vercel for preview and deployment.",
    },
    {
      name: "code",
      link: "https://code.new/",
      company: "Code.in",
      description: "Learn to code with real-time interactive coding sessions.",
    },
    {
      name: "kahoot",
      link: "https://kahoot.new/",
      company: "Kahoot",
      description: "Create an online quiz using Kahoot.",
    },
    {
      name: "quiz",
      link: "https://quiz.new/",
      company: "Kahoot",
      description: "Create an online quiz using Kahoot.",
    },
    {
      name: "presenter",
      link: "https://presenter.new/",
      company: "Prowise",
      description:
        "Design classes and presentations with Prowise Presenter 10.",
    },
    {
      name: "quizlet",
      link: "https://quizlet.new/",
      company: "Quizlet",
      description:
        "Create a new study set and test your knowledge using Quizlet.",
    },
    {
      name: "class",
      link: "https://class.new/",
      company: "Tabletwise",
      description: "Create a new online course on Tabletwise.",
    },
    {
      name: "tshirt",
      link: "https://tshirt.new/",
      company: "Custom Ink",
      description: "Create a custom t-shirt with your own art, text, and more.",
    },
    {
      name: "sell",
      link: "https://sell.new/",
      company: "eBay",
      description: "Sell products on eBay.",
    },
    {
      name: "grail",
      link: "https://grail.new/",
      company: "Grailed",
      description: "Buy and sell clothing on Grailed.",
    },
    {
      name: "grailed",
      link: "https://grailed.new/",
      company: "Grailed",
      description: "Buy and sell clothing on Grailed.",
    },
    {
      name: "mercari",
      link: "https://mercari.new/",
      company: "Mercari",
      description: "Sell your used stuff on Mercari.",
    },
    {
      name: "server",
      link: "https://server.new/",
      company: "Mobilistics",
      description: "Set up a custom server for your business or project.",
    },
    {
      name: "neighbor",
      link: "https://neighbor.new/",
      company: "Neighbor",
      description: "List your available storage space on Neighbor.",
    },
    {
      name: "storage",
      link: "https://storage.new/",
      company: "Neighbor",
      description: "List your available storage space on Neighbor.",
    },
    {
      name: "box",
      link: "https://box.new/",
      company: "Packlane",
      description: "Design custom decorated boxes for your business.",
    },
    {
      name: "art",
      link: "https://art.new/",
      company: "Point 101",
      description: "Order framed prints of your favorite photos.",
    },
    {
      name: "crossover",
      link: "https://crossover.new/",
      company: "Crossover Health",
      description: "Schedule a consultation with Crossover Health.",
    },
    {
      name: "crossoverhealth",
      link: "https://crossoverhealth.new/",
      company: "Crossover Health",
      description: "Schedule a consultation with Crossover Health.",
    },
    {
      name: "care",
      link: "https://care.new/",
      company: "Crossover Health",
      description: "Schedule a consultation with Crossover Health.",
    },
    {
      name: "dashlane",
      link: "https://dashlane.new/",
      company: "Dashlane",
      description:
        "Keep your online accounts secure with Dashlane's password generator.",
    },
    {
      name: "password",
      link: "https://password.new/",
      company: "Dashlane",
      description:
        "Keep your online accounts secure with Dashlane's password generator.",
    },
    {
      name: "activity",
      link: "https://activity.new/",
      company: "DBLM! Don’t Be Late Mate",
      description: "Share your favorite activities and events on a map.",
    },
    {
      name: "discord",
      link: "https://discord.new/",
      company: "Discord",
      description:
        "Start a new Discord community where you can hang out and chat with friends.",
    },
    {
      name: "bitcoin",
      link: "https://bitcoin.new/",
      company: "eToro",
      description: "Buy, sell, and trade Bitcoin on eToro.",
    },
    {
      name: "btc",
      link: "https://btc.new/",
      company: "eToro",
      description: "Buy, sell, and trade Bitcoin on eToro.",
    },
    {
      name: "eth",
      link: "https://eth.new/",
      company: "eToro",
      description: "Buy, sell, and trade Ethereum on eToro.",
    },
    {
      name: "ethereum",
      link: "https://ethereum.new/",
      company: "eToro",
      description: "Buy, sell, and trade Ethereum on eToro.",
    },
    {
      name: "tsla",
      link: "https://tsla.new/",
      company: "eToro",
      description: "Buy, sell, and trade TSLA on eToro.",
    },
    {
      name: "twtr",
      link: "https://twtr.new/",
      company: "eToro",
      description: "Buy, sell, and trade TWTR on eToro.",
    },
    {
      name: "xrp",
      link: "https://xrp.new/",
      company: "eToro",
      description: "Buy, sell, and trade Ripple on eToro.",
    },
    {
      name: "perfume",
      link: "https://perfume.new/",
      company: "EveryHuman",
      description:
        "Create a unique scent based on your personality using an algorithmic perfumery.",
    },
    {
      name: "salary",
      link: "https://salary.new/",
      company: "Levels.fyi",
      description:
        "Share your salary details on levels.fyi to help people get fair pay.",
    },
    {
      name: "reservation",
      link: "https://reservation.new/",
      company: "OpenTable",
      description: "Make a restaurant reservation with OpenTable.",
    },
    {
      name: "restaurant",
      link: "https://restaurant.new/",
      company: "OpenTable",
      description: "Make a restaurant reservation with OpenTable.",
    },
    {
      name: "park",
      link: "https://park.new/",
      company: "ParkMobile",
      description: "List or reserve parking spots in your nearby area.",
    },
    {
      name: "parking",
      link: "https://parking.new/",
      company: "ParkMobile",
      description: "List or reserve parking spots in your nearby area.",
    },
    {
      name: "aed",
      link: "https://aed.new/",
      company: "PulsePoint",
      description:
        "Add your automated external defibrillator to the PulsePoint AED registry to help improve cardiac arrest survival.",
    },
    {
      name: "event",
      link: "https://event.new/",
      company: "Purpl",
      description: "Create and share event listings on Purpl.",
    },
    {
      name: "re",
      link: "https://re.new/",
      company: "re.new",
      description: "Generate friendlier email responses.",
    },
  ];

  function getWhatsNews() {
    var items = [];
    whatsnews.forEach(function (item) {
      items.push({
        title: item.name,
        subtitle: item.company + " : " + item.description,
        autocomplete: item.name,
        quicklookurl: item.link,
        arg: item.link,
        icon: {
          path: "icons/" + item.name + ".png",
        },
      });
    });
    return JSON.stringify({ items: items });
  }

  return {
    getWhatsNews: getWhatsNews,
  };
}
