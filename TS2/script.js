let previousBox = null;
let isAnimating = false;

function showBox(color) {
    if (isAnimating) return;
    isAnimating = true;

    if (previousBox) {
        previousBox.style.transition = "top 1.5s ease-out, background-color 1.5s ease-out, border-width 1.5s ease-out";
        previousBox.style.top = "-700px";
        previousBox.style.backgroundColor = previousBox.style.borderColor;
        previousBox.style.borderWidth = "3px";
        
        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    } else {
        isAnimating = false;
    }

    const newBox = document.createElement("div");
    newBox.classList.add("color-box");
    newBox.style.backgroundColor = color;
    newBox.style.border = `4px solid ${color}`;
    newBox.style.zIndex = previousBox ? parseInt(previousBox.style.zIndex) + 1 : 1;
    document.body.appendChild(newBox);

    setTimeout(() => {
        newBox.style.top = "40%";
    }, 100);

    setTimeout(() => {
        newBox.style.backgroundColor = "transparent";
        newBox.style.borderWidth = "6px";
    }, 550);

    previousBox = newBox;
}
