const imageDirectory = {
    "Arsenopyrite": ["Screenshot 2026-08-10 094753.png", "Screenshot 2026-08-10 094800.png", "Screenshot 2026-08-10 094805.png"],
    "Azurite": ["Screenshot 2026-08-10 100409.png", "Screenshot 2026-08-10 100435.png", "Screenshot 2026-08-10 100450.png", "Screenshot 2026-08-10 100607.png"],
    "Bornite": ["Screenshot 2026-08-10 095438.png", "Screenshot 2026-08-10 095528.png", "Screenshot 2026-08-10 095606.png"],
    "Cassiterite": ["Screenshot 2026-08-10 101612.png", "Screenshot 2026-08-10 101626.png", "Screenshot 2026-08-10 101944.png", "Screenshot 2026-08-10 102039.png", "Screenshot 2026-08-10 102115.png"],
    "Chalcopyrite": ["Screenshot 2026-08-10 094312.png", "Screenshot 2026-08-10 094321.png"],
    "Cobaltite": ["Screenshot 2026-08-10 101148.png", "Screenshot 2026-08-10 101201.png", "Screenshot 2026-08-10 101258.png", "Screenshot 2026-08-10 101331.png"],
    "Cuprite": ["Screenshot 2026-08-10 095709.png", "Screenshot 2026-08-10 095719.png", "Screenshot 2026-08-10 095758.png"],
    "Galena": ["Screenshot 2026-08-10 094448.png", "Screenshot 2026-08-10 094508.png", "Screenshot 2026-08-10 094515.png"],
    "Gold": ["Screenshot 2026-08-10 095011.png", "Screenshot 2026-08-10 095016.png", "Screenshot 2026-08-10 095358.png"],
    "Hematite": ["Screenshot 2026-08-10 104921.png", "Screenshot 2026-08-10 104930.png", "Screenshot 2026-08-10 104939.png", "Screenshot 2026-08-10 104948.png", "Screenshot 2026-08-10 105017.png", "Screenshot 2026-08-10 105050.png"],
    "Ilmenite": ["Screenshot 2026-08-10 101429.png", "Screenshot 2026-08-10 101439.png", "Screenshot 2026-08-10 101538.png", "Screenshot 2026-08-10 101753.png"],
    "Magnetite": ["Screenshot 2026-08-10 104600.png", "Screenshot 2026-08-10 104625.png", "Screenshot 2026-08-10 104638.png", "Screenshot 2026-08-10 104738.png", "Screenshot 2026-08-10 104812.png"],
    "Malachite": ["Screenshot 2026-08-10 095953.png", "Screenshot 2026-08-10 100121.png", "Screenshot 2026-08-10 100240.png", "Screenshot 2026-08-10 100301.png"],
    "Molybdenite": ["Screenshot 2026-08-10 100717.png", "Screenshot 2026-08-10 100727.png", "Screenshot 2026-08-10 100734.png", "Screenshot 2026-08-10 100747.png", "Screenshot 2026-08-10 100753.png"],
    "Nickeline": ["Screenshot 2026-08-10 100845.png", "Screenshot 2026-08-10 100903.png", "Screenshot 2026-08-10 101013.png", "Screenshot 2026-08-10 101107.png"],
    "Pentlandite": ["Screenshot 2026-08-10 094150.png", "Screenshot 2026-08-10 094209.png"],
    "Pyrite": ["Screenshot 2026-08-10 093426.png", "Screenshot 2026-08-10 093500.png", "Screenshot 2026-08-10 093509.png"],
    "Pyrrhotite": ["Screenshot 2026-08-10 093847.png", "Screenshot 2026-08-10 093859.png"],
    "Sphalerite": ["Screenshot 2026-08-10 094604.png", "Screenshot 2026-08-10 094705.png", "Screenshot 2026-08-10 094717.png"],
    "Stibnite": ["Screenshot 2026-08-10 094830.png", "Screenshot 2026-08-10 094841.png", "Screenshot 2026-08-10 094858.png", "Screenshot 2026-08-10 094902.png"],
    "Wolframite": ["Screenshot 2026-08-10 104137.png", "Screenshot 2026-08-10 104208.png", "Screenshot 2026-08-10 104320.png", "Screenshot 2026-08-10 104514.png"]
};
const minerals = Object.keys(imageDirectory);

const imageframes  = ["image1", "image2"];
let secretMineral;
let imagesInFolder;

function changeImgs() {
    
    // Get image frames: 
    const frame1 = document.getElementById("image1")
    const frame2 = document.getElementById("image2")
    // Choose random mineral:
    secretMineral = minerals[Math.floor(Math.random() * minerals.length)];
    imagesInFolder = imageDirectory[secretMineral];
    // Choose two random mineral photos: 
    let photo1 = imagesInFolder[Math.floor(Math.random() * imagesInFolder.length)];
    let photo2 = imagesInFolder[Math.floor(Math.random() * imagesInFolder.length)];
    if (photo1 == photo2) {
        photo2 = imagesInFolder[0];
        photo1 = imagesInFolder[1];
    }
    // Replace images in frames:
    frame1.src = `Images/${secretMineral}/${photo1}`;
    frame2.src = `Images/${secretMineral}/${photo2}`;

    // -----------------------------------------------
    
}
// Minerals array:
// const minerals = ["Arsenopyrite", "Azurite", "Bornite", "Cassiterite", "Chalcopyrite", "Cobaltite", "Cuprite", "Galena", "Gold", "Hematite", "Ilmenite", "Magnetite", "Malachite", "Molybdenite", "Nickeline", "Pentlandite", "Pyrite", "Pyrrhotite", "Sphalerite", "Stibnite", "Wolframite"]
changeImgs()

function submitGuess() {
    const input = document.getElementById("guess")
    const response = document.getElementById("response");
    const previousImg = document.getElementById("previousImg")
    const resultBox = document.getElementById("resultBox")
    // Get name of first image in directory of the secret mineral: 
    let firstImg = imageDirectory[secretMineral][0];
    // Convert this to a path, and change previousImg src to this:
    previousImg.src = `Images/${secretMineral}/${firstImg}`;
    // Display the result pane: 
    resultBox.style.display = "block";

    if (input.value == secretMineral) {
        response.innerHTML = "Yep! That was <b>" + secretMineral + "<b>";
        resultBox.style.backgroundColor = "hsl(130, 50%, 70%)";
    }
    else {
        response.innerHTML = "No, that was <b>" + secretMineral + "<b>";
        resultBox.style.backgroundColor = "hsl(0, 60%, 80%)";
    }

    changeImgs()
        
}



