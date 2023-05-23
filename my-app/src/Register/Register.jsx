import AElement from "../component/a"
import Input from "../component/input"
import Button from "../component/button"

function Register () {
    return(
    <form class="mt-4">
        <div class="form-group">
            <label for="Account">Tài khoản</label>
            <Input
                id="Account"
                class="form-control"
                placeholder="Nhập vào tài khoản của bạn"  
                type="text"
            />
        </div>
        <div class="form-group">
            <label for="Password">Password</label>
            <Input 
                type="password"
                class="form-control" 
                id="Password" 
                placeholder="Password"/>
        </div>
        <div class="form-group">
            <label for="full_name">Tên của bạn</label>
            <Input 
                type="text"
                class="form-control" 
                id="full_name" 
                placeholder="Tạ Tuấn Huy"/>
        </div>
        <div class="form-group">
            <label for="age">Tuổi của bạn</label>
            <Input 
                type="number"
                class="form-control" 
                id="age" 
                placeholder="18"/>
        </div>
    
        <Button 
            type="submit" 
            class="btn btn-primary"
            value="Đăng nhập" />
    </form>
    )
}

export default Register