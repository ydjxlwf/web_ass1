function toggleForm(formType) {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");

    if (formType === 'login') {
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
    } else if (formType === 'signup') {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    }
}

function handleLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username && password) {
        // 存储登录状态和用户名
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUsername", newUsername);
        // 跳转到 index.html
        window.location.href = "index.html";
    }
     else {
        alert("Please fill in all fields.");
    }
}

function handleSignup() {
    var email = document.getElementById("email").value;
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;
    
    // 这里应该是注册逻辑，例如验证输入并发送到服务器
    // 假设注册成功，以下代码将模拟注册过程
    if (email && newUsername && newPassword) {
        // 存储登录状态和用户名
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUsername", newUsername);
        // 跳转到 index.html
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // 检查登录状态并相应地更新UI
    checkLoginStatus();

    // 检查当前页面是否是登录成功页面
    if (window.location.pathname === '/denglusuccess.html' || window.location.pathname.endsWith('denglusuccess.html')) {
        var logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', logout);
        }
        displayLoginInfo();
    }

    // 为 "back to index" 按钮添加事件监听器
    var continueBtn = document.getElementById('continue-btn');
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            // 设置登录状态为已登录
            localStorage.setItem("isLoggedIn", "true");
            // 调用 goindex 函数返回主页
            goindex();
        });
    }

    // 为登录按钮添加事件监听器
    var loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(event) {
            if (isLoggedIn()) {
                // 如果已登录，则跳转到登录成功页面
                event.preventDefault(); // 阻止链接默认行为
                window.location.href = 'denglusuccess.html';
            }
            // 如果未登录，则不阻止默认行为，允许跳转到登录页面
        });
    }

    // 为注册按钮添加事件监听器
    var signupBtn = document.getElementById('signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认行为
            handleSignup(); // 处理注册
        });
    }

    // 为 "back to index" 按钮添加事件监听器
    var backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // 直接返回主页，不改变登录状态
            goindex();
        });
    }

});

// 检查用户是否已登录
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// 检查登录状态并更新UI
function checkLoginStatus() {
    var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    updateLoginStatusUI(isLoggedIn);
}

// 更新登录状态UI
function updateLoginStatusUI(isLoggedIn) {
    var loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        var loginLink = loginBtn.querySelector('a');
        if (isLoggedIn) {
            // 更新为登录状态，并设置点击事件跳转到登录成功页面
            loginLink.textContent = 'Hello';
            loginLink.href = 'denglusuccess.html';
        } else {
            // 更新为未登录状态，并设置链接到登录页面
            loginLink.textContent = 'login';
            loginLink.href = 'denglu.html';
        }
    }
}

// 登录成功后调用的函数，设置登录状态
function loginSuccess(username) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInUsername', username);
    // 可能还需要做其他事情，比如跳转到 index 页面
}


// 显示登录信息
function displayLoginInfo() {
    var loggedInUsername = localStorage.getItem('loggedInUsername');
    if (loggedInUsername) {
        var loginInfo = document.createElement('p');
        loginInfo.textContent = 'Welcome, ' + loggedInUsername + '!';
        document.body.appendChild(loginInfo);
    }
}


// 为注册按钮添加事件监听器
document.getElementById('signup-btn').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认行为
    handleSignup(); // 处理注册
});




// 定义 goindex 函数
function goindex() {
    window.location.href = "index.html"; // 将这里的路径替换为实际的首页路径
}

// 确保其他相关的 JavaScript 函数也已经被定义，例如 logout 函数
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUsername');
    
    // 更新主页面的登录状态UI
    updateLoginStatusUI(false);
    
    // 跳转回主页
    window.location.href = "index.html";
}