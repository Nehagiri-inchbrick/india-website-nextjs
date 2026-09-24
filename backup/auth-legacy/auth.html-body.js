export const bodyClass = "auth-page";

export const html = `
  <section class="auth-wrap" aria-label="Account access">
    <div class="auth-panel" data-auth-panel>
      <aside class="auth-info">
        <div class="auth-info-block is-active" data-auth-info="login">
          <p class="auth-info-kicker">Welcome <span>Back!</span></p>
          <p class="auth-info-lead">Login to access your saved properties, compare projects, and continue your home search with Inchbrick.</p>
          <ul class="auth-benefits">
            <li>
              <span class="auth-benefit-ico" aria-hidden="true"><i class="far fa-heart"></i></span>
              <div>
                <strong>Save &amp; Shortlist</strong>
                <span>Keep favourites in one place</span>
              </div>
            </li>
            <li>
              <span class="auth-benefit-ico" aria-hidden="true"><i class="far fa-bell"></i></span>
              <div>
                <strong>Stay Updated</strong>
                <span>Alerts on price &amp; launches</span>
              </div>
            </li>
            <li>
              <span class="auth-benefit-ico" aria-hidden="true"><i class="fas fa-shield-halved"></i></span>
              <div>
                <strong>Secure &amp; Safe</strong>
                <span>RERA-verified guidance</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="auth-info-block" data-auth-info="register">
          <p class="auth-eyebrow">Start free in minutes</p>
          <p class="auth-info-kicker">Build your <span>dream shortlist</span></p>
          <p class="auth-info-lead">Tell us a little about you — we&rsquo;ll personalise projects, alerts, and advisor support around your goals.</p>

          <ol class="auth-journey" aria-label="How registration works">
            <li class="is-on" data-reg-journey="1">
              <span class="auth-journey-num">1</span>
              <div>
                <strong>About you</strong>
                <span>Name, phone &amp; email</span>
              </div>
            </li>
            <li data-reg-journey="2">
              <span class="auth-journey-num">2</span>
              <div>
                <strong>Your search vibe</strong>
                <span>City &amp; what you&rsquo;re looking for</span>
              </div>
            </li>
            <li data-reg-journey="3">
              <span class="auth-journey-num">3</span>
              <div>
                <strong>Secure access</strong>
                <span>Password &amp; you&rsquo;re in</span>
              </div>
            </li>
          </ol>

          <div class="auth-pulse" aria-hidden="true">
            <span>2.4k+</span> buyers exploring with Inchbrick this month
          </div>
        </div>

        <div class="auth-info-block" data-auth-info="forgot">
          <p class="auth-info-kicker">Need <span>Help?</span></p>
          <p class="auth-info-lead">Enter your email and we will send a secure link so you can reset your password and continue searching.</p>
          <ul class="auth-benefits">
            <li>
              <span class="auth-benefit-ico" aria-hidden="true"><i class="fas fa-key"></i></span>
              <div>
                <strong>Quick reset</strong>
                <span>Link expires for your security</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div class="auth-form-col">
        <div class="auth-form-view is-active" data-auth-view="login">
          <div class="auth-form-head">
            <span class="auth-accent" aria-hidden="true"></span>
            <h1>Login to your account</h1>
            <p>Access saved properties and continue your home search.</p>
          </div>

          <form id="loginForm" class="auth-form" novalidate>
            <div class="auth-field">
              <label for="loginEmail">Email</label>
              <div class="auth-input">
                <i class="far fa-envelope" aria-hidden="true"></i>
                <input id="loginEmail" name="email" type="email" autocomplete="email" placeholder="Enter your email" required>
              </div>
            </div>
            <div class="auth-field">
              <label for="loginPass">Password</label>
              <div class="auth-input">
                <i class="fas fa-lock" aria-hidden="true"></i>
                <input id="loginPass" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" required>
                <button type="button" class="auth-eye" data-toggle-pass="loginPass" aria-label="Show password"><i class="far fa-eye"></i></button>
              </div>
            </div>
            <div class="auth-row">
              <label class="auth-check"><input type="checkbox" name="remember"> Remember me</label>
              <button type="button" class="auth-link" data-auth-show="forgot">Forgot password?</button>
            </div>
            <button type="submit" class="auth-submit">Login <i class="fas fa-arrow-right" aria-hidden="true"></i></button>
          </form>

          <div class="auth-or"><span>or</span></div>
          <button type="button" class="auth-google" id="authGoogleBtn">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="" width="18" height="18">
            Continue with Google
          </button>
          <p class="auth-foot">Don&rsquo;t have an account? <a href="/auth#register" class="auth-link">Register</a></p>
        </div>

        <div class="auth-form-view" data-auth-view="register">
          <div class="auth-form-head auth-form-head--reg">
            <div class="auth-steps" role="tablist" aria-label="Registration steps">
              <button type="button" class="auth-step is-active" data-reg-step-btn="1" role="tab" aria-selected="true">1 · You</button>
              <button type="button" class="auth-step" data-reg-step-btn="2" role="tab" aria-selected="false">2 · Search</button>
              <button type="button" class="auth-step" data-reg-step-btn="3" role="tab" aria-selected="false">3 · Secure</button>
            </div>
            <h1 data-reg-title>Let&rsquo;s meet you</h1>
            <p data-reg-sub>A few details so we can set up your Inchbrick space.</p>
          </div>

          <form id="registerForm" class="auth-form auth-form--register" novalidate>
            <div class="auth-reg-pane is-active" data-reg-pane="1">
              <div class="auth-field-grid">
                <div class="auth-field">
                  <label for="regName">Full name</label>
                  <div class="auth-input">
                    <i class="far fa-user" aria-hidden="true"></i>
                    <input id="regName" name="name" type="text" autocomplete="name" placeholder="Your full name" required>
                  </div>
                </div>
                <div class="auth-field">
                  <label for="regPhone">Phone</label>
                  <div class="auth-input">
                    <i class="fas fa-phone" aria-hidden="true"></i>
                    <input id="regPhone" name="phone" type="tel" autocomplete="tel" placeholder="+91" required>
                  </div>
                </div>
              </div>
              <div class="auth-field">
                <label for="regEmail">Email</label>
                <div class="auth-input">
                  <i class="far fa-envelope" aria-hidden="true"></i>
                  <input id="regEmail" name="email" type="email" autocomplete="email" placeholder="Enter your email" required>
                </div>
              </div>
              <button type="button" class="auth-submit" data-reg-next>Continue <i class="fas fa-arrow-right" aria-hidden="true"></i></button>
            </div>

            <div class="auth-reg-pane" data-reg-pane="2">
              <div class="auth-field">
                <label for="regCity">Preferred city</label>
                <div class="auth-input">
                  <i class="fas fa-location-dot" aria-hidden="true"></i>
                  <input id="regCity" name="city" type="text" list="regCityList" placeholder="e.g. Bangalore, Pune, Hyderabad" required>
                </div>
                <datalist id="regCityList">
                  <option value="Bangalore"></option>
                  <option value="Hyderabad"></option>
                  <option value="Pune"></option>
                  <option value="Mumbai"></option>
                  <option value="Chennai"></option>
                  <option value="Delhi NCR"></option>
                </datalist>
              </div>
              <fieldset class="auth-chips">
                <legend>I&rsquo;m looking for</legend>
                <label class="auth-chip"><input type="checkbox" name="interest" value="Apartment"> Apartment</label>
                <label class="auth-chip"><input type="checkbox" name="interest" value="Villa"> Villa</label>
                <label class="auth-chip"><input type="checkbox" name="interest" value="Plot"> Plot</label>
                <label class="auth-chip"><input type="checkbox" name="interest" value="Investment"> Investment</label>
              </fieldset>
              <div class="auth-nav-row">
                <button type="button" class="auth-ghost" data-reg-back><i class="fas fa-arrow-left" aria-hidden="true"></i> Back</button>
                <button type="button" class="auth-submit" data-reg-next>Continue <i class="fas fa-arrow-right" aria-hidden="true"></i></button>
              </div>
            </div>

            <div class="auth-reg-pane" data-reg-pane="3">
              <div class="auth-field">
                <label for="regPass">Password</label>
                <div class="auth-input">
                  <i class="fas fa-lock" aria-hidden="true"></i>
                  <input id="regPass" name="password" type="password" autocomplete="new-password" placeholder="Minimum 8 characters" required minlength="8">
                  <button type="button" class="auth-eye" data-toggle-pass="regPass" aria-label="Show password"><i class="far fa-eye"></i></button>
                </div>
                <div class="auth-pass-meta">
                  <div class="auth-strength" aria-hidden="true">
                    <span data-strength-bar></span>
                  </div>
                  <p class="auth-strength-label" data-strength-label>Password strength</p>
                </div>
              </div>
              <div class="auth-field">
                <label for="regPass2">Confirm password</label>
                <div class="auth-input">
                  <i class="fas fa-lock" aria-hidden="true"></i>
                  <input id="regPass2" name="password2" type="password" autocomplete="new-password" placeholder="Re-enter password" required minlength="8">
                  <button type="button" class="auth-eye" data-toggle-pass="regPass2" aria-label="Show password"><i class="far fa-eye"></i></button>
                </div>
              </div>
              <label class="auth-check auth-check--block">
                <input type="checkbox" name="terms" required>
                <span>I agree to the <a href="/terms">Terms</a> and <a href="/privacy-policy">Privacy Policy</a>.</span>
              </label>
              <div class="auth-nav-row">
                <button type="button" class="auth-ghost" data-reg-back><i class="fas fa-arrow-left" aria-hidden="true"></i> Back</button>
                <button type="submit" class="auth-submit">Create account <i class="fas fa-arrow-right" aria-hidden="true"></i></button>
              </div>
            </div>
          </form>

          <div class="auth-or"><span>or</span></div>
          <button type="button" class="auth-google" id="authGoogleBtnReg">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="" width="18" height="18">
            Sign up with Google
          </button>
          <p class="auth-foot">Already have an account? <a href="/auth#login" class="auth-link">Login</a></p>
        </div>

        <div class="auth-form-view" data-auth-view="forgot">
          <button type="button" class="auth-back" data-auth-show="login"><i class="fas fa-arrow-left"></i> Back to login</button>
          <div class="auth-form-head">
            <span class="auth-accent" aria-hidden="true"></span>
            <h1>Reset password</h1>
            <p>Enter your email and we will send a reset link.</p>
          </div>

          <form id="forgotForm" class="auth-form" novalidate>
            <div class="auth-field">
              <label for="forgotEmail">Email</label>
              <div class="auth-input">
                <i class="far fa-envelope" aria-hidden="true"></i>
                <input id="forgotEmail" name="email" type="email" autocomplete="email" placeholder="Enter your email" required>
              </div>
            </div>
            <button type="submit" class="auth-submit">Send reset link <i class="fas fa-arrow-right" aria-hidden="true"></i></button>
          </form>
        </div>
      </div>
    </div>
  </section>
`;
