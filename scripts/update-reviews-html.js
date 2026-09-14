const fs = require('fs');
const path = require('path');

const homeJsPath = path.resolve('lib/html-bodies/home.js');
let content = fs.readFileSync(homeJsPath, 'utf8');

const startStr = '<section class=\\"reviews-video-section';
const endStr = '<section class=\\"blog-section';

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex === -1 || endIndex === -1) {
    console.log("Could not find start or end index.");
} else {
    const rawHtml = '<section class="reviews-video-section mockup-reviews-section" id="reviewsVideoSection" data-voice-label="Client Reviews" data-voice-text="Google reviews and client stories from verified home buyers.">\n' +
        '  <div class="container">\n' +
        '    <!-- Google Reviews Row -->\n' +
        '    <div class="mockup-row mockup-google">\n' +
        '      <div class="mockup-text-side">\n' +
        '        <div class="mockup-kicker">\n' +
        '          <span class="mockup-kicker-line"></span> GOOGLE REVIEWS\n' +
        '        </div>\n' +
        '        <h2 class="mockup-title">Real People. <span>Real Experiences.</span></h2>\n' +
        '        <p class="mockup-desc">See what our happy clients have to say about their property journey with us.</p>\n' +
        '        <div class="mockup-rating-box">\n' +
        '          <span class="mockup-g-logo">\n' +
        '            <svg viewBox="0 0 48 48" width="22" height="22" focusable="false"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.3 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.6 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l.1.1 6.2 5.2C39.2 36.3 44 31 44 24c0-1.3-.1-2.7-.4-3.9z"/></svg>\n' +
        '          </span>\n' +
        '          <strong>4.9</strong><span>/5</span>\n' +
        '          <span class="mockup-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>\n' +
        '          <span class="mockup-count">| 2.5K+ reviews</span>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '      <div class="mockup-slider-side">\n' +
        '        <button class="mockup-nav-btn prev"><i class="fas fa-chevron-left"></i></button>\n' +
        '        <div class="mockup-slider-viewport">\n' +
        '          <div class="mockup-track mockup-reviews-track">\n' +
        '            <div class="mockup-review-card">\n' +
        '              <div class="m-card-top">\n' +
        '                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Rohan M.">\n' +
        '                <div>\n' +
        '                  <h4>Rohan M.</h4>\n' +
        '                  <span>Bangalore</span>\n' +
        '                </div>\n' +
        '              </div>\n' +
        '              <div class="m-card-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>\n' +
        '              <p>"Smooth process, great team and the best property options. Highly recommend!"</p>\n' +
        '              <div class="m-quote-mark">”</div>\n' +
        '            </div>\n' +
        '            <div class="mockup-review-card">\n' +
        '              <div class="m-card-top">\n' +
        '                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Priya S.">\n' +
        '                <div>\n' +
        '                  <h4>Priya S.</h4>\n' +
        '                  <span>Mumbai</span>\n' +
        '                </div>\n' +
        '              </div>\n' +
        '              <div class="m-card-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>\n' +
        '              <p>"Very professional and transparent. Made our home buying journey easy."</p>\n' +
        '              <div class="m-quote-mark">”</div>\n' +
        '            </div>\n' +
        '            <div class="mockup-review-card">\n' +
        '              <div class="m-card-top">\n' +
        '                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80" alt="Amit K.">\n' +
        '                <div>\n' +
        '                  <h4>Amit K.</h4>\n' +
        '                  <span>Delhi</span>\n' +
        '                </div>\n' +
        '              </div>\n' +
        '              <div class="m-card-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>\n' +
        '              <p>"Excellent support from start to finish. Truly a reliable team!"</p>\n' +
        '              <div class="m-quote-mark">”</div>\n' +
        '            </div>\n' +
        '            <div class="mockup-review-card">\n' +
        '              <div class="m-card-top">\n' +
        '                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80" alt="Rahul P.">\n' +
        '                <div>\n' +
        '                  <h4>Rahul P.</h4>\n' +
        '                  <span>Bengaluru</span>\n' +
        '                </div>\n' +
        '              </div>\n' +
        '              <div class="m-card-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>\n' +
        '              <p>"Great NRI support — virtual tours and paperwork guidance made remote buying easy."</p>\n' +
        '              <div class="m-quote-mark">”</div>\n' +
        '            </div>\n' +
        '            <div class="mockup-review-card">\n' +
        '              <div class="m-card-top">\n' +
        '                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80" alt="Ananya S.">\n' +
        '                <div>\n' +
        '                  <h4>Ananya S.</h4>\n' +
        '                  <span>NRI Buyer</span>\n' +
        '                </div>\n' +
        '              </div>\n' +
        '              <div class="m-card-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>\n' +
        '              <p>"Clear communication and no pushy sales. Felt guided at every step."</p>\n' +
        '              <div class="m-quote-mark">”</div>\n' +
        '            </div>\n' +
        '            <div class="mockup-review-card">\n' +
        '              <div class="m-card-top">\n' +
        '                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Vikram D.">\n' +
        '                <div>\n' +
        '                  <h4>Vikram D.</h4>\n' +
        '                  <span>Pune</span>\n' +
        '                </div>\n' +
        '              </div>\n' +
        '              <div class="m-card-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>\n' +
        '              <p>"RERA-checked options and site visits were well organised. Highly recommend."</p>\n' +
        '              <div class="m-quote-mark">”</div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '        <button class="mockup-nav-btn next"><i class="fas fa-chevron-right"></i></button>\n' +
        '        <div class="mockup-dots">\n' +
        '          <span class="m-dot active"></span>\n' +
        '          <span class="m-dot"></span>\n' +
        '          <span class="m-dot"></span>\n' +
        '          <span class="m-dot"></span>\n' +
        '          <span class="m-dot"></span>\n' +
        '          <span class="m-dot"></span>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '    <div class="mockup-divider-row"></div>\n' +
        '    <!-- Client Stories Row -->\n' +
        '    <div class="mockup-row mockup-stories">\n' +
        '      <div class="mockup-text-side">\n' +
        '        <div class="mockup-kicker">\n' +
        '          <span class="mockup-kicker-line"></span> CLIENT STORIES\n' +
        '        </div>\n' +
        '        <h2 class="mockup-title dec">Homes. Dreams. <span>Real Stories.</span></h2>\n' +
        '        <p class="mockup-desc">Watch our clients share their journey, experiences and why they chose us.</p>\n' +
        '        <button class="mockup-watch-more" onclick="window.location.href=\'/reviews\'">\n' +
        '          <span class="m-icon"><i class="fas fa-play"></i></span> Watch More\n' +
        '        </button>\n' +
        '      </div>\n' +
        '      <div class="mockup-slider-side mockup-videos-side">\n' +
        '        <div class="mockup-slider-viewport">\n' +
        '          <div class="mockup-track mockup-videos-track">\n' +
        '            <a href="/reviews" class="mockup-video-card">\n' +
        '              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80" alt="Client 1">\n' +
        '              <div class="m-video-overlay">\n' +
        '                <div class="m-video-top">\n' +
        '                  <div class="m-v-play"><i class="fas fa-play"></i></div>\n' +
        '                  <span class="m-v-time">0:42</span>\n' +
        '                </div>\n' +
        '                <p class="m-v-text">Our first home<br>and a new beginning</p>\n' +
        '              </div>\n' +
        '            </a>\n' +
        '            <a href="/reviews" class="mockup-video-card">\n' +
        '              <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80" alt="Client 2">\n' +
        '              <div class="m-video-overlay">\n' +
        '                <div class="m-video-top">\n' +
        '                  <div class="m-v-play"><i class="fas fa-play"></i></div>\n' +
        '                  <span class="m-v-time">1:15</span>\n' +
        '                </div>\n' +
        '                <p class="m-v-text">Why we chose<br>this community</p>\n' +
        '              </div>\n' +
        '            </a>\n' +
        '            <a href="/reviews" class="mockup-video-card">\n' +
        '              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80" alt="Client 3">\n' +
        '              <div class="m-video-overlay">\n' +
        '                <div class="m-video-top">\n' +
        '                  <div class="m-v-play"><i class="fas fa-play"></i></div>\n' +
        '                  <span class="m-v-time">0:58</span>\n' +
        '                </div>\n' +
        '                <p class="m-v-text">A smart investment<br>for the future</p>\n' +
        '              </div>\n' +
        '            </a>\n' +
        '            <a href="/reviews" class="mockup-video-card">\n' +
        '              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80" alt="Client 4">\n' +
        '              <div class="m-video-overlay">\n' +
        '                <div class="m-video-top">\n' +
        '                  <div class="m-v-play"><i class="fas fa-play"></i></div>\n' +
        '                  <span class="m-v-time">1:32</span>\n' +
        '                </div>\n' +
        '                <p class="m-v-text">The best decision<br>we ever made</p>\n' +
        '              </div>\n' +
        '            </a>\n' +
        '            <a href="/reviews" class="mockup-video-card">\n' +
        '              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80" alt="Client 5">\n' +
        '              <div class="m-video-overlay">\n' +
        '                <div class="m-video-top">\n' +
        '                  <div class="m-v-play"><i class="fas fa-play"></i></div>\n' +
        '                  <span class="m-v-time">0:37</span>\n' +
        '                </div>\n' +
        '                <p class="m-v-text">Smooth paperwork<br>and fast closing</p>\n' +
        '              </div>\n' +
        '            </a>\n' +
        '            <a href="/reviews" class="mockup-video-card">\n' +
        '              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80" alt="Client 6">\n' +
        '              <div class="m-video-overlay">\n' +
        '                <div class="m-video-top">\n' +
        '                  <div class="m-v-play"><i class="fas fa-play"></i></div>\n' +
        '                  <span class="m-v-time">0:45</span>\n' +
        '                </div>\n' +
        '                <p class="m-v-text">Incredible service<br>from first visit</p>\n' +
        '              </div>\n' +
        '            </a>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '        <button class="mockup-nav-btn next n-vid"><i class="fas fa-chevron-right"></i></button>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</section>\n';

    const stringifiedHtml = JSON.stringify(rawHtml).slice(1, -1);

    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex);

    const fullNew = before + stringifiedHtml + after;
    fs.writeFileSync(homeJsPath, fullNew);
    console.log("Successfully replaced the HTML section.");
}
