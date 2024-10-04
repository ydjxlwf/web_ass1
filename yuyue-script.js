document.getElementById('appointmentForm').onsubmit = function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取表单数据
    var petName = document.getElementById('petName').value;
    var petsex = document.getElementById('petsex').value;
    var petkind = document.getElementById('petkind').value;
    var serviceName = document.getElementById('serviceName').value;
    var appointmentDate = document.getElementById('appointmentDate').value;
    var appointmentTime = document.getElementById('appointmentTime').value;

    // 构建预约成功的信息
    var successMessage = 'Dog Name: ' + petName + '<br>' +
                         'Dog Gender: ' + petsex + '<br>' +
                         'Dog Breed:' + petkind + '<br>' +
                         'Service type:' + serviceName + '<br>' +
                         'Appointment Date: ' + appointmentDate + '<br>' +
                         'Appointment Time:' + appointmentTime;

    // 显示预约成功的信息并隐藏表单
    document.getElementById('successMessage').innerHTML = successMessage;
    document.getElementById('appointmentFormSection').style.display = 'none';
    document.getElementById('appointmentSuccessSection').style.display = 'block';
};
