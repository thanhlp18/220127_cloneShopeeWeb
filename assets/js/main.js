    const login = document.getElementById('js-header-login');
    const register = document.querySelector('.js-register');
    const main = document.getElementById('modal');


    // Show login modal
    login.onclick = function() {
        modal.innerHTML = `   
        <div class="modal">
        <div class="modal__overplay"></div>
        <div class="modal__body">           
            <!-- Login form -->
            <div class="auth-form">
                <div class="auth-form__body">
                    <div class="auth-form">
                        <div class="auth-form__header">
                            <div class="auth-form__heading">Đăng nhập</div>
                            <span class="auth-form__switch-btn js-register">Đăng ký</span>
                        </div>
    
                        <div class="authen-form__form">
                            <div class="auth-form__group">
                                <input type="text" class="auth-form__input" placeholder="Email/Số điện thoại/Tên đăng nhập">
                            </div>
                            <div class="auth-form__group">
                                <input type="password" class="auth-form__input" placeholder="Mật khẩu">
                            </div>
                        </div>
    
                    </div>
                    <div class="auth-form__aside">
                        <div class="auth-form__help ">
                            <a href="" class="auth-form__help-link auth-form__help-forgot">Quên mật khẩu</a>
                            <span class="auth-form__sepearate"></span>
                            <a href="" class="auth-form__help-link">Cần trợ giúp</a>
                        </div>
                    </div>
                    <div class="auth-form__controls">
                        <button class="btn auth-form__control-back btn--normal js-hidden-modal">TRỞ LẠI</button>
                        <button class="btn btn--primary btn--normal">ĐĂNG KÝ</button>
                    </div>
                </div>
                <div class="auth-form__socials">
                    <a href="" class="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                        <i class="fab fa-facebook-square auth-form__icon"></i>
                        <span class="auth-form__icon-title">Facebook</span>                    
                    </a>
                    <a href="" class="auth-form__socials--google btn btn--size-s btn--with-icon">
                        <img class="auth-form__icon auth-form__icon-img" src="https://png2.cleanpng.com/sh/f0e45884e8baced7720736e9bd839e54/L0KzQoG4UMA5N6NokZH9cnHxg8HokvVvfF5sh9HwbHWwg8bwlPUucZR0hp9wb3BqfLa0ifNwdl46fqlvOUi4c7TrVsBmO186TqoCNEm3RIK9UMIyQWg6UagDNEG1PsH1h5==/transparent-google-suite-icon-google-icon-5f7f985ccd60e3.5687494416021975968412.png" alt="">
                        <span class="auth-form__icon-title">Google</span>                    
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;
};
    // show register modal
    register.onclick = function() {
        modal.innerHTML = `   
        <div class="modal">
        <div class="modal__overplay"></div>
        <div class="modal__body">           
            <!-- Register form -->
            <div class="auth-form">
                <div class="auth-form__body">
                    <div class="auth-form">
                        <div class="auth-form__header">
                            <div class="auth-form__heading">Đăng ký</div>
                            <span class="auth-form__switch-btn">Đăng nhập</span>
                        </div>
    
                        <div class="authen-form__form">
                            <div class="auth-form__group">
                                <input type="text" class="auth-form__input" placeholder="Tên đăng nhập">
                            </div>
                            <div class="auth-form__group">
                                <input type="password" class="auth-form__input" placeholder="Mật khẩu">
                            </div>
                            <div class="auth-form__group">
                                <input type="password" class="auth-form__input" placeholder="Nhập lại mật khẩu">
                            </div>
                        </div>
    
                    </div>
                    <div class="auth-form__aside">
                        <p class="auth-form__policy-text">
                            Bằng việc đăng ký bạn đã đồng với F8shop về
                            <a href="" class="auth-form__text-link">Điều khoản dịch vụ</a> &
                            <a href="" class="auth-form__text-link">Chính sách bảo mật</a>
                        </p>
                    </div>
                    <div class="auth-form__controls">
                        <button class="btn auth-form__control-back btn--normal">TRỞ LẠI</button>
                        <button class="btn btn--primary btn--normal">ĐĂNG KÝ</button>
                    </div>
                </div>
                <div class="auth-form__socials">
                    <a href="" class="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                        <i class="fab fa-facebook-square auth-form__icon"></i>
                        <span class="auth-form__icon-title">Kết nối với Facebook</span>                    
                    </a>
                    <a href="" class="auth-form__socials--google btn btn--size-s btn--with-icon">
                        <i class="fab fa-google  auth-form__icon"></i>
                        <span class="auth-form__icon-title">Kết nối với Google</span>                    
                         
                    </a>
                </div>
            </div>
        </div>
    </div>`;
    }; 

function remove() {
    main.innerHTML ='';
}


