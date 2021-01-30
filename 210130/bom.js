// 1. Window

var myWindow;

function openWin() {
    myWindow = window.open("", "myWindow", "width=400,height=400")
}

function closeWin() {
    myWindow.focus();
    myWindow.close()
}

function changeWin() {
    myWindow.resizeTo(500, 500)
    myWindow.location.href = "https://asszisztensem.com"
    myWindow.focus()
}

function checkWin() {
    if (!myWindow) {
        console.log("The window has never been opened!")
    } else if (myWindow.closed) {
        console.log("The window has been closed!")
    } else {
        console.log("The window is open now!")
    }
}

// 2. Fel és le - 3. Scrollby

var myHTML

function openHTML() {
    myHTML = window.open("", "myWindow", "height=150vh")

    var topButton = myHTML.document.createElement("button")
    myHTML.document.body.appendChild(topButton)
    topButton.id = "top-btn"
    topButton.innerHTML = "Scroll down"
    topButton.style.cssText = "font-size: 30px; top: 10px"
    topButton.addEventListener("click", function () {
        var scrollTo = myHTML.document.getElementById("bottom-btn")
        scrollTo.scrollIntoView()} )

    var text = myHTML.document.createElement("p")
    myHTML.document.body.appendChild(text)
    text.id = "text"
    text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita fugit nemo nulla odit quod sed, unde vero! Ab consequuntur, delectus dolorem dolores dolorum eum expedita fugiat hic incidunt odit omnis optio qui, quis ratione voluptatum? Animi assumenda enim eos et eum eveniet ipsum iure laudantium minus natus nesciunt nulla numquam provident quasi quos recusandae sapiente similique totam vel, veniam! Accusantium amet consequuntur doloremque earum fugit illum labore minima nemo nesciunt nobis, quisquam repellat sint tempore veniam voluptatibus! Ab consectetur delectus, earum esse est ex in itaque natus neque, porro repellat, totam vero. Accusantium adipisci alias aliquam aspernatur assumenda at consequuntur corporis cumque delectus enim eveniet facere iste magnam modi necessitatibus nobis omnis pariatur praesentium quam, qui quos repellat reprehenderit sapiente sit soluta tempora vel! Ab aliquid architecto asperiores, aut beatae commodi corporis cum delectus deserunt doloremque dolorum ducimus eaque exercitationem expedita explicabo facere fugiat id illum incidunt magnam maiores, nesciunt, odit officiis optio porro praesentium provident quae quas quasi quisquam quo quod rem sed velit veniam vitae voluptates? Adipisci aliquam at deserunt dolorum enim est eum facilis, minus nam nulla officiis placeat qui reiciendis sed sit velit voluptate? Alias amet doloribus dolorum, error fugit illo itaque minus, molestiae necessitatibus quas recusandae tempore ullam vero! Cum doloremque ea eveniet expedita molestiae perspiciatis ratione, sequi. Accusamus amet architecto consequatur dolorem dolores ea, earum eius et fuga harum inventore ipsam, laudantium nemo officiis omnis porro quaerat quam quod rem temporibus tenetur, unde vero! Accusantium commodi corporis cumque eaque expedita maxime neque placeat quos suscipit voluptates? A aliquam doloribus earum eligendi illo, iure nisi non nulla perferendis quas, rem sapiente sit tempora tempore temporibus ullam ut, veniam veritatis vitae voluptate. Alias aliquid dolor harum ipsum libero quia quisquam sint suscipit veritatis. Adipisci cum delectus ea et modi quisquam ut velit! A accusantium assumenda consectetur, consequuntur corporis dolore eius eum facere fugiat soluta sunt vitae voluptate? Culpa cum earum esse illo inventore molestias nam nisi qui saepe voluptatem. Ab accusamus accusantium ad amet aspernatur atque autem esse et ex excepturi ipsam iste laborum minima nam odio, officiis omnis porro quae quas quo reiciendis sint tempore. Aliquam architecto culpa quasi saepe vitae! Adipisci aperiam aut beatae distinctio doloremque exercitationem id illum incidunt inventore ipsa, itaque laborum magnam officia provident quibusdam rem sunt tenetur? Ab ad beatae dolorem excepturi, fugit impedit modi mollitia nemo obcaecati officia praesentium quasi, quidem quo quod sapiente! Accusamus adipisci animi asperiores commodi culpa cupiditate deserunt dicta distinctio dolores, doloribus dolorum ea eaque eius enim eos esse, et fugit illum ipsa itaque magni minus porro possimus, quisquam quo reiciendis repellendus reprehenderit sed ullam ut velit voluptate voluptatibus voluptatum. Architecto distinctio eius facilis magnam nam necessitatibus nobis perferendis vel. A animi asperiores atque blanditiis culpa cumque cupiditate et eum facere fugit id, iusto labore magnam maiores modi neque nihil nulla officiis pariatur porro provident quae quas qui, quibusdam quidem, quis ratione recusandae repudiandae sapiente unde ut veniam voluptates voluptatum! Architecto iusto modi necessitatibus neque nihil, nisi nostrum numquam odio qui quos ratione reprehenderit rerum. Distinctio et expedita facilis laborum mollitia omnis quas saepe similique, sunt vero voluptatem voluptates! Ab dolor et, officiis optio perferendis possimus voluptatum? Ab consectetur debitis eius et, ipsa iste laudantium, nesciunt nihil optio praesentium, quia rem rerum sunt. Adipisci, asperiores at, beatae consequatur eaque, eos expedita fugiat fugit harum hic illo illum incidunt labore minima molestiae natus nisi nostrum obcaecati perferendis porro praesentium provident quaerat quam quas quis repudiandae saepe sit sunt veniam vitae? Ab accusantium aspernatur consectetur culpa, dicta distinctio dolore dolores doloribus eos eum excepturi expedita fuga fugit hic illum impedit in ipsa ipsam ipsum iste modi molestiae mollitia natus officia omnis pariatur placeat qui quis quisquam quo quod rem saepe ut voluptas voluptate voluptatem voluptatum? Atque beatae consectetur impedit, incidunt nulla reprehenderit? Architecto deserunt modi quis rerum soluta. Atque dolores facilis natus sed? Beatae consequuntur doloribus esse, ex excepturi harum iste magnam maiores nobis non obcaecati pariatur placeat quas qui quisquam quo quos sint totam ullam voluptate. Cum, dolore, ea. Aspernatur atque beatae blanditiis, consequuntur, delectus, dignissimos doloremque eaque ex exercitationem illo laudantium maxime molestiae nihil porro praesentium soluta totam voluptate. Deleniti iure sed sit! Aliquid blanditiis commodi consectetur cumque cupiditate ea, ex fugiat inventore ipsum nemo, nostrum officia quia rerum sapiente, tempora. Corporis deserunt enim odit repellat rerum, voluptatibus. Assumenda cupiditate distinctio doloribus eos, error explicabo impedit incidunt perferendis quibusdam soluta suscipit vero. Adipisci at dicta enim eveniet fugiat harum ipsa itaque perferendis quaerat reprehenderit saepe sint soluta sunt velit, vitae voluptate voluptates! Accusamus accusantium adipisci cupiditate debitis, dolorum esse et explicabo fuga fugit inventore iusto, labore laborum laudantium libero magnam nostrum, odio officia omnis qui quidem quis quos recusandae reiciendis rerum sapiente sit suscipit. Atque eos inventore, minus numquam quam quisquam. Accusantium ad at atque, blanditiis consequatur debitis delectus dolore eaque, explicabo hic impedit inventore iure iusto labore magni nam non nostrum nulla numquam saepe sapiente sunt ut voluptate voluptates voluptatum? A aliquid aperiam architecto atque, beatae consequuntur earum eveniet excepturi incidunt magnam maxime minus molestias, nihil odio quaerat quis reiciendis, totam ullam ut vel velit veritatis voluptatum! A adipisci amet, cum dolor, doloribus error eum fugiat ipsum modi nam nesciunt nostrum porro repellendus saepe, voluptas? Accusantium adipisci, autem, commodi dicta dolorum eos esse est eveniet expedita iure laborum molestiae molestias natus nobis, nostrum quam quas qui quod repellat repellendus reprehenderit saepe sapiente sunt totam ut velit veritatis voluptate? Assumenda, culpa debitis deserunt dicta dignissimos magnam minus molestiae odit omnis optio perferendis perspiciatis quae quia unde vitae. Cumque doloribus harum quis vero. Accusamus, ad aspernatur aut beatae blanditiis consequuntur cumque cupiditate dolores fugit hic id illum minima non numquam odio officia pariatur possimus qui quia quibusdam quis quod, quos repellat reprehenderit repudiandae sapiente, tenetur unde. Consequuntur cumque dolorem, dolorum esse est excepturi iusto quo soluta. Ab amet, architecto cupiditate dolore expedita fugit hic inventore ipsa iure maiores minus, molestiae mollitia nam natus nemo nihil nobis nostrum nulla numquam possimus quam rem sapiente sit sunt suscipit, vel vero? Consequatur dicta ducimus fuga, nam pariatur vitae."
    text.style.cssText = "font-size: 30px; text-align: justify"

    var bottomButton = myHTML.document.createElement("button")
    myHTML.document.body.appendChild(bottomButton)
    bottomButton.id = "bottom-btn"
    bottomButton.innerHTML = "Scroll up"
    bottomButton.style.cssText = "font-size: 30px; bottom: 10px"
    bottomButton.addEventListener("click", function () {
        myHTML.scrollTo(0,0) } )

    var topArrow = myHTML.document.createElement("button")
    myHTML.document.body.appendChild(topArrow)
    topArrow.id = "top-arr"
    topArrow.innerHTML = "˅"
    topArrow.style.cssText = "font-size: 30px; position: fixed; top: 8px; margin-left: 50px"
    topArrow.addEventListener("click", function () {
        myHTML.scrollBy(0,30) } )

    var bottomArrow = myHTML.document.createElement("button")
    myHTML.document.body.appendChild(bottomArrow)
    bottomArrow.id = "bottom-arr"
    bottomArrow.innerHTML = "˄"
    bottomArrow.style.cssText = "font-size: 30px; position: fixed; bottom: 8px; margin-left: 50px"
    bottomArrow.addEventListener("click", function () {
        myHTML.scrollBy(0,-30) } )
}

// 4. Írasd ki

console.log("The full URL: "+window.location.href)
console.log("The hostname: "+window.location.hostname)
console.log("The pathnameL: "+window.location.pathname)
console.log("The protocol: "+window.location.protocol)


// 5. Counter

let count = 0

document.getElementById("inc").addEventListener("click", function () {
    count = count+1
    document.getElementById("counter").innerText = count } )

document.getElementById("dec").addEventListener("click", function () {
    count = count-1
    document.getElementById("counter").innerText = count } )

document.getElementById("res").addEventListener("click", function () {
    count = 0
    document.getElementById("counter").innerText = count } )

document.getElementById("resD").addEventListener("click", function () {
    setTimeout(function(){
        count = 0
        document.getElementById("counter").innerText = count
    }, 3000) } )