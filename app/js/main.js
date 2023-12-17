$(function(){
$('.stars').rateYo({
  starWidth: "16px",
  normalFill: "#E4E4E4",
  readOnly: true,
  ratedFill: "#F6C416",
  starSvg: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9 C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7 c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>',
});

$('.reviews__slider').slick({
slidesToShow: 3,
infinite: true,
slidesToScroll: 1,
variableWidth: true,
appendArrows:'.slick-arrows',
nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#arrow-slider"></use></svg></button>',
prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#arrow-slider"></use></svg></button>'
});
});