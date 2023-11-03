function renderHeader() {
    const headerContent = document.getElementById('header')

    headerContent.innerHTML = `<nav>
                <ul class="menu">
                <li>Trang chủ</li>
                <li>Sản phẩm
                    <ul class="sub-menu">
                        <li>Điện thoại</li>
                        <li>Laptop</li>
                        <li>TV</li>
                        <li>Tủ lạnh</li>
                    </ul>
                </li>
                <li>Thông tin
                    <ul class="sub-menu">
                        <li>SDT</li>
                        <li>Địa chỉ</li>
                    </ul>
                </li>
                </ul>
            </nav>`
}

renderHeader()