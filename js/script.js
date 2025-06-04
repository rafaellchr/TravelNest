let next = document.querySelector('#test');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    console.log("click")
    document.querySelector('.slide').appendChild(items[0]); // Move the first item to the end
});

// Add click event to each item to slide to the next
document.querySelectorAll('.item').forEach(item => {
    // item.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]); // Move the first item to the end
    // });
});