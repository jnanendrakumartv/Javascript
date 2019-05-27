function changeLabel() {
        let lbl = document.getElementById('lblEmp');
        let empName = document.getElementById('emp').value;

        lbl.innerText = empName;
    }