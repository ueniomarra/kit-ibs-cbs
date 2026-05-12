// Meta Pixel - Kit IBS CBS
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '3286774244830105');
fbq('track', 'PageView');
fbq('track', 'ViewContent', {
  content_name: 'Kit IBS e CBS - Reforma Tributaria 2026',
  content_category: 'curso',
  content_ids: ['kit-ibs-cbs'],
  content_type: 'product',
  value: 197.00,
  currency: 'BRL'
});

// Tracking de InitiateCheckout nos botões do Kiwify
document.addEventListener('DOMContentLoaded', function() {
  var checkoutLinks = document.querySelectorAll('a[href*="pay.kiwify.com.br"]');
  checkoutLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (typeof fbq !== 'undefined') {
        fbq('track', 'InitiateCheckout', {
          content_name: 'Kit IBS e CBS - Reforma Tributaria 2026',
          content_ids: ['kit-ibs-cbs'],
          content_type: 'product',
          value: 197.00,
          currency: 'BRL'
        });
      }
    });
  });
});
