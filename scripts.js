const imageDirectory = {
    "Arsenopyrite": ['Screenshot 2026-08-10 094753.png', 'Screenshot 2026-08-10 094800.png', 'Screenshot 2026-08-10 094805.png', 'Screenshot 2026-08-30 092708.png', 'Screenshot 2026-08-30 092739.png'],
    "Azurite": ['Screenshot 2026-08-10 100409.png', 'Screenshot 2026-08-10 100435.png', 'Screenshot 2026-08-10 100450.png', 'Screenshot 2026-08-10 100607.png', 'Screenshot 2026-08-30 094138.png'],
    "Barite": ['Screenshot 2026-08-24 155230.png', 'Screenshot 2026-08-24 155243.png', 'Screenshot 2026-08-24 155302.png', 'Screenshot 2026-08-30 094221.png', 'Screenshot 2026-08-30 094234.png'],
    "Bornite": ['IMG_1381.JPG', 'Screenshot 2026-08-10 095438.png', 'Screenshot 2026-08-10 095528.png', 'Screenshot 2026-08-10 095606.png', 'Screenshot 2026-08-30 094540.png', 'Screenshot 2026-08-30 094619.png'],
    "Cassiterite": ['Screenshot 2026-08-10 101612.png', 'Screenshot 2026-08-10 101626.png', 'Screenshot 2026-08-10 101944.png', 'Screenshot 2026-08-10 102039.png', 'Screenshot 2026-08-10 102115.png', 'Screenshot 2026-08-30 094704.png'],
    "Chalcopyrite": ['Screenshot 2026-08-10 094312.png', 'Screenshot 2026-08-10 094321.png', 'Screenshot 2026-08-30 095031.png', 'Screenshot 2026-08-30 095112.png', 'Screenshot 2026-08-30 095322.png', 'Screenshot 2026-08-30 095456.png'],
    "Chromite": ['Screenshot 2026-08-24 154729.png', 'Screenshot 2026-08-24 154759.png', 'Screenshot 2026-08-24 154811.png', 'Screenshot 2026-08-30 092530.png'],
    "Chrysocolla": ['Screenshot 2026-08-24 153722.png', 'Screenshot 2026-08-24 153801.png', 'Screenshot 2026-08-24 154037.png', 'Screenshot 2026-08-24 154113.png', 'Screenshot 2026-08-30 091731.png', 'Screenshot 2026-08-30 091929.png'],
    "Cinnabar": ['Screenshot 2026-08-24 151719.png', 'Screenshot 2026-08-24 151752.png', 'Screenshot 2026-08-24 151801.png', 'Screenshot 2026-08-24 151814.png', 'Screenshot 2026-08-30 095922.png'],
    "Cobaltite": ['Screenshot 2026-08-10 101148.png', 'Screenshot 2026-08-10 101201.png', 'Screenshot 2026-08-10 101258.png', 'Screenshot 2026-08-10 101331.png'],
    "Copper": ['Screenshot 2026-08-24 160241.png', 'Screenshot 2026-08-24 160249.png', 'Screenshot 2026-08-24 160314.png', 'Screenshot 2026-08-24 160326.png', 'Screenshot 2026-08-30 100217.png'],
    "Cuprite": ['Screenshot 2026-08-10 095709.png', 'Screenshot 2026-08-10 095719.png', 'Screenshot 2026-08-10 095758.png', 'Screenshot 2026-08-30 100451.png'],
    "Galena": ['IMG_1372.PNG', 'Screenshot 2026-08-10 094448.png', 'Screenshot 2026-08-10 094508.png', 'Screenshot 2026-08-10 094515.png', 'Screenshot 2026-08-30 100603.png', 'Screenshot 2026-08-30 100639.png'],
    "Gold": ['IMG_1521.JPG', 'Screenshot 2026-08-10 095011.png', 'Screenshot 2026-08-10 095016.png', 'Screenshot 2026-08-10 095358.png', 'Screenshot 2026-08-30 100727.png'],
    "Hematite": ['Screenshot 2026-08-10 104930.png', 'Screenshot 2026-08-10 104939.png', 'Screenshot 2026-08-10 104948.png', 'Screenshot 2026-08-10 105017.png', 'Screenshot 2026-08-10 105050.png'],
    "Ilmenite": ['IMG_1390.JPG', 'Screenshot 2026-08-10 101429.png', 'Screenshot 2026-08-10 101439.png', 'Screenshot 2026-08-10 101538.png', 'Screenshot 2026-08-10 101753.png'],
    "Magnesite": ['Screenshot 2026-08-24 154855.png', 'Screenshot 2026-08-24 154908.png', 'Screenshot 2026-08-24 154918.png', 'Screenshot 2026-08-24 154929.png'],
    "Magnetite": ['Screenshot 2026-08-10 104600.png', 'Screenshot 2026-08-10 104638.png', 'Screenshot 2026-08-10 104738.png', 'Screenshot 2026-08-10 104812.png', 'Screenshot 2026-08-30 110011.png'],
    "Malachite": ['Screenshot 2026-08-10 095953.png', 'Screenshot 2026-08-10 100121.png', 'Screenshot 2026-08-10 100240.png', 'Screenshot 2026-08-10 100301.png'],
    "Molybdenite": ['Screenshot 2026-08-10 100717.png', 'Screenshot 2026-08-10 100727.png', 'Screenshot 2026-08-10 100734.png', 'Screenshot 2026-08-10 100747.png', 'Screenshot 2026-08-10 100753.png', 'Screenshot 2026-08-30 103227.png'],
    "Nickeline": ['Screenshot 2026-08-10 100845.png', 'Screenshot 2026-08-10 100903.png', 'Screenshot 2026-08-10 101013.png', 'Screenshot 2026-08-10 101107.png', 'Screenshot 2026-08-30 104046.png'],
    "Pentlandite": ['Screenshot 2026-08-10 094150.png', 'Screenshot 2026-08-10 094209.png', 'Screenshot 2026-08-30 104217.png', 'Screenshot 2026-08-30 104341.png', 'Screenshot 2026-08-30 104639.png'],
    "Pyrite": ['Screenshot 2026-08-10 093426.png', 'Screenshot 2026-08-10 093500.png', 'Screenshot 2026-08-10 093509.png', 'Screenshot 2026-08-30 103325.png'],
    "Pyrrhotite": ['Screenshot 2026-08-10 093847.png', 'Screenshot 2026-08-10 093859.png', 'Screenshot 2026-08-30 103414.png', 'Screenshot 2026-08-30 105621.png', 'Screenshot 2026-08-30 105702.png'],
    "Sphalerite": ['Screenshot 2026-08-10 094604.png', 'Screenshot 2026-08-10 094705.png', 'Screenshot 2026-08-10 094717.png'],
    "Stibnite": ['Screenshot 2026-08-10 094830.png', 'Screenshot 2026-08-10 094841.png', 'Screenshot 2026-08-10 094858.png', 'Screenshot 2026-08-10 094902.png'],
    "Wolframite": ['Screenshot 2026-08-10 104137.png', 'Screenshot 2026-08-10 104208.png', 'Screenshot 2026-08-10 104320.png', 'Screenshot 2026-08-10 104514.png', 'Screenshot 2026-08-30 105840.png', 'Screenshot 2026-08-30 105914.png']
};

const mineralInfo = {
    "Arsenopyrite": ["FeAsS <br>", 
"Silver-white to gray, some slightly yellow <br>",
"Lustre: Metallic, Sub-Metallic <br>",
"Hardness: 5.5 - 6 <br>",
"Spec. Gravity: 6.07 <br>",
"C. System: Monoclinic"], 
    "Azurite": ["Cu3(CO3)2(OH)2 <br>", 
"Azure blue, blue, light blue, or dark blue; light blue in T.L. <br>", 
"Lustre: Vitreous <br>", 
"Hardness: 3.5 - 4 <br>", 
"Spec. Gravity: 3.77 <br>", 
"C. System: Monoclinic"], 
    "Barite": ["BaSO4 <br>",
"Colourless, white, yellow, brown, grey, blue, etc.; colourless or tinted in T.L. <br>",
"Lustre: Vitreous, Pearly <br>",
"Hardness: 3 <br>",
"Spec. Gravity: 4.50 <br>",
"C. System: Orthorhombic"], 
    "Bornite": ["Cu5FeS4 <br>",
"Copper-red to brown, tarnishing to iridescent purples. <br>",
"Lustre: Metallic <br>",
"Hardness: 3 <br>",
"Spec. Gravity: 5.06 - 5.09 <br>",
"C. System: Orthorhombic"], 
    "Cassiterite": ["SnO2 <br>",
"Black, yellow, brown, red, white, colourless. <br>",
"Lustre: Adamantine, Greasy, Sub-Metallic <br>",
"Hardness: 6 - 7 <br>",
"Spec. Gravity: 6.98 - 7.01 <br>",
"C. System: Tetragonal"], 
    "Chalcopyrite": ["CuFeS2 <br>",
"Brass yellow, often with an iridescent tarnish. <br>",
"Lustre: Metallic <br>",
"Hardness: 3.5 - 4 <br>",
"Spec. Gravity: 4.1 - 4.3 <br>",
"C. System: Tetragonal"], 
    "Chromite": ["FeCr2O4 <br>",
"Black <br>",
"Lustre: Resinous, Greasy, Metallic, Sub-Metallic, Dull <br>",
"Hardness: 5.5 <br>",
"Spec. Gravity: 4.5 - 4.8 <br>",
"C. System: Isometric"],
    "Chrysocolla": ["Hydrous Cu-silicate, often with Al <br>",
"Green, blue, blue-black, or brown <br>",
"Lustre: Vitreous, Waxy, Earthy <br>",
"Hardness: 2.5 - 3.5 <br>",
"Spec. Gravity: 1.93 - 2.4 <br>",
"C. System: Orthorhombic"], 
    "Cinnabar": ["HgS <br>",
"Red, brownish red, silvery dark red; silvery-grey; <br>",
"Lustre: Metallic <br>",
"Hardness: 2 - 2.5 <br>",
"Spec. Gravity: 8.176 <br>",
"C. System: Trigonal"], 
    "Cobaltite": ["CoAsS <br>",
"Reddish silver white, violet steel gray, or black. <br>",
"Lustre: Metallic <br>",
"Hardness: 5.5 <br>",
"Spec. Gravity: 6.33"], 
    "Copper": ["Cu <br>",
"Brown-red-orange. Tarnishes to black or green in air. <br>",
"Lustre: Metallic <br>",
"Hardness: 2.5 - 3 <br>",
"Spec. Gravity: 8.94 - 8.95 <br>",
"C. System: Isometric"], 
    "Cuprite": ["Cu2O <br>",
"Dark red to cochineal red, sometimes almost black. <br>",
"Lustre: Adamantine, Sub-Metallic, Earthy <br>",
"Hardness: 3.5 - 4 <br>",
"Spec. Gravity: 6.14 <br>",
"C. System: Isometric"], 
    "Galena": ["PbS <br>",
"Lead-grey <br>",
"Lustre: Metallic, Sub-Metallic, Dull <br>",
"Hardness: 2.5 <br>",
"Spec. Gravity: 7.60 <br>",
"C. System: Isometric"], 
    "Gold": ["Au <br>",
"Rich yellow, paling to whitish-yellow; some blue & green in T.L. <br>",
"Lustre: Metallic <br>",
"Hardness: 2.5 - 3 <br>",
"Spec. Gravity: 15 - 19.3 <br>",
"C. System: Isometric"], 
    "Hematite": ["Fe2O3 <br>",
"Steel-grey to black in crystals, dull to bright red when fine <br>",
"Lustre: Metallic, Sub-Metallic, Dull, Earthy <br>",
"Hardness: 5 - 6 <br>",
"Spec. Gravity: 5.26 <br>",
"C. System: Trigonal"], 
    "Ilmenite": ["FeTiO3 <br>",
"Iron black or black <br>",
"Lustre: Metallic, Sub-Metallic <br>",
"Hardness: 5 - 6 <br>",
"Spec. Gravity: 4.68 - 4.76 <br>",
"C. System: Trigonal"], 
    "Magnesite": ["MgCO3 <br>",
"Colourless, greyish-white, yellowish, brown, lilac; colourless in T.L. <br>",
"Lustre: Vitreous <br>",
"Hardness: 3.5 - 4.5 <br>",
"Spec. Gravity: 2.98 - 3.02 <br>",
"C. System: Trigonal"], 
    "Magnetite": ["Fe2O4 <br>",
"Greyish black or iron black <br>",
"Lustre: Metallic, Sub-Metallic <br>",
"Hardness: 5.5 - 6.5 <br>",
"Spec. Gravity: 5.175 <br>",
"C. System: Isometric"], 
    "Malachite": ["Cu2(CO3)(OH)2 <br>",
"Bright green, green-black; yellowish green in T.L. <br>",
"Lustre: Silky, Earthy <br>",
"Hardness: 3.5 - 4 <br>",
"Spec. Gravity: 3.6 - 4.05 <br>",
"C. System: Monoclinic"], 
    "Molybdenite": ["MoS2 <br>",
"Black, lead gray, or gray <br>",
"Lustre: Metallic <br>",
"Hardness: 1 - 1.5 <br>",
"Spec. Gravity: 4.62 - 4.73 <br>",
"C. System: Hexagonal"], 
    "Nickeline": ["NiAs <br>",
"Pale copper red <br>",
"Lustre: Metallic <br>",
"Hardness: 5 - 5.5 <br>",
"Spec. Gravity: 7.784 <br>",
"C. System: Hexagonal"], 
    "Pentlandite": ["(Ni,Fe)9S8 <br>",
"Pale bronze-yellow; bronze; brown; reddish <br>",
"Lustre: Metallic <br>",
"Hardness: 3.5 - 4 <br>",
"Spec. Gravity: 4.6 - 5 <br>",
"C. System: Isometric"], 
    "Pyrite": ["FeS2 <br>",
"Pale brass-yellow <br>",
"Lustre: Metallic <br>",
"Hardness: 6 - 6.5 <br>",
"Spec. Gravity: 4.8 - 5 <br>",
"C. System: Isometric"], 
    "Pyrrhotite": ["Fe1-xS <br>",
"Bronze brown, bronze red, or dark brown <br>",
"Lustre: Metallic <br>",
"Hardness: 3.5 - 4 <br>",
"Spec. Gravity: 4.58 - 4.65 <br>",
"C. System: Monoclinic"], 
    "Sphalerite": ["ZnS <br>",
"Light to dark brown, black. Can be red, colourless, blue, or green <br>",
"Lustre: Adamantine, Resinous <br>",
"Hardness: 3.5 - 4 <br>",
"Spec. Gravity: 3.9 - 4.1 <br>",
"C. System: Isometric"], 
    "Stibnite": ["Sb2S3 <br>",
"Lead-gray with pale blue tint <br>",
"Lustre: Metallic <br>",
"Hardness: 2 <br>",
"Spec. Gravity: 4.63 <br>",
"C. System: Orthorhombic"], 
    "Wolframite": ["Fe-MnWO4 <br>",
"Black, yellow-brown, reddish-brown, red (rare) <br>",
"Lustre: Adamantine, Resinous, Metallic <br>",
"Hardness: 4 - 4.5 <br>",
"Spec. Gravity: 7.12 - 7.18 <br>",
"C. System: Monoclinic"]
    };

const minerals = Object.keys(imageDirectory);

const imageframes  = ["image1", "image2"];
let secretMineral;
let imagesInFolder;
let photo1;

function changeImgs() {
    
// -------PICK MINERALS-------- //
    // Shuffle the mineral array using Fisher Yates method:
    for (let i = minerals.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = minerals[i];
        minerals[i] = minerals[j];
        minerals[j] = k;
    }
    // Slice the shuffled array for the minerals to be added to buttons:
    const minsPicked = minerals.slice(0, 8);
    // The mineral to be guessed is a random one from this array:
    secretMineral = minsPicked[Math.floor(minsPicked.length * Math.random())];
    // Get info for this mineral: 
    characteristics = mineralInfo[secretMineral];
    formula = characteristics[0];
// -------REPLACE IMAGES-------- //
    imagesInFolder = imageDirectory[secretMineral];
    // Choose two random photos from the folder chosen: 
    photo1 = imagesInFolder[Math.floor(Math.random() * imagesInFolder.length)];
    let photo2 = imagesInFolder[Math.floor(Math.random() * imagesInFolder.length)];
    if (photo1 == photo2) {
        photo2 = imagesInFolder[0];
        photo1 = imagesInFolder[1];
    }
    // Get image frames: 
    const frame1 = document.getElementById("image1");
    const frame2 = document.getElementById("image2");
    // Get checkbox state:
    // Switch images in frames:
    frame1.src = `Images/${secretMineral}/${photo1}`;
    if (document.getElementById("datacheckbox").checked) {
        frame2.style.display = "none";
        document.getElementById("mineralInfo").innerHTML = characteristics.slice(1,characteristics.length).join('');
        document.getElementById("mineralInfo").style.display = "inherit";
    } else {
        document.getElementById("mineralInfo").innerHTML = '';
        document.getElementById("mineralInfo").style.display = "none";
        frame2.style.display = "inherit";
        frame2.src = `Images/${secretMineral}/${photo2}`;
    }
    
// -------CHANGE OPTIONS-------- //
    // Options to pick from will be the minerals in minsPicked array.
    // Get each button and change its value to each element in minsPicked:
    const btn1 = document.getElementById("btn1");
    btn1.value = minsPicked.pop();
    const btn2 = document.getElementById("btn2");
    btn2.value = minsPicked.pop();
    const btn3 = document.getElementById("btn3");
    btn3.value = minsPicked.pop();
    const btn4 = document.getElementById("btn4");
    btn4.value = minsPicked.pop();
    const btn5 = document.getElementById("btn5");
    btn5.value = minsPicked.pop();
    const btn6 = document.getElementById("btn6");
    btn6.value = minsPicked.pop();
    const btn7 = document.getElementById("btn7");
    btn7.value = minsPicked.pop();
    const btn8 = document.getElementById("btn8");
    btn8.value = minsPicked.pop();
// -----------------------------------------------
    
}

changeImgs()

function submitGuess(butnPicked) {
    // const input = document.getElementById("guess");
    const response = document.getElementById("response");
    const previousImg = document.getElementById("previousImg");
    const resultBox = document.getElementById("resultBox");
    // Convert to a path, and change previousImg src to image1:
    previousImg.src = `Images/${secretMineral}/${photo1}`;

    if (butnPicked.value == secretMineral) {
        response.innerHTML = "Yep! That was <b>" + secretMineral + "<br>" + formula + "<b>";
        resultBox.style.color = "hsl(130, 50%, 70%)";
    }
    else {
        response.innerHTML = "No, that was <b>" + secretMineral + "<br>" + formula + "<b>";
        resultBox.style.color = "hsl(0, 100%, 70%)";
    }
    // input.value = '';

    changeImgs()


        
}



