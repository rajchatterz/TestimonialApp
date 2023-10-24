document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        testimonials[currentTestimonialIndex].style.display = "none";
        currentTestimonialIndex = index;
        testimonials[currentTestimonialIndex].style.display = "block";
    }

    // Initially, show the first testimonial
    showTestimonial(0);

    function nextTestimonial() {
        let nextIndex = (currentTestimonialIndex + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }

    // Automatically switch to the next testimonial every 5 seconds
    setInterval(nextTestimonial, 5000);
});
