document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    if (!gallery) {
        console.error("Gallery element not found!");
        return;
    }

    for (let i = 1; i <= 128; i++) {
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("img-wrapper");

        let img = document.createElement("img");
        img.src = `images/${i}.jpg`; // Make sure images are in the correct folder
        img.alt = `Artwork ${i}`;
        img.classList.add("gallery-img");
        img.loading = "lazy"; // Lazy load images for better performance

        imgContainer.appendChild(img);
        gallery.appendChild(imgContainer);
    }

    console.log("All images should now be in the gallery.");

    // Add Hover Enlargement Effect Using JavaScript
    const galleryImages = document.querySelectorAll(".gallery-img");

    galleryImages.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.3)";
            img.style.transition = "transform 0.3s ease-out";
            img.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 0.5)";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.3)";
        });
    });
});
