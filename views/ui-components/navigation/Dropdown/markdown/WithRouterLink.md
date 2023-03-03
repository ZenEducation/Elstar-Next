```jsx
import React from 'react'
import { Dropdown } from 'components/ui'
<!-- import { Link } from 'react-router-dom'
 -->
import Link from "next/link"
const WithRouterLink = () => {
    return (
        <div>
            <Dropdown title="Click Me!">
                <Dropdown.Item>
                    <Link
                        className="menu-item-link"
                        href="/ui-components/forms/checkbox"
                    >
                        Checkbox
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link className="menu-item-link" href="/ui-components/common/button">
                        Button
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link className="menu-item-link" href="/ui-components/alert">
                        Alert
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link className="menu-item-link" href="/ui-components/feedback/dialog">
                        Dialog
                    </Link>
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}

export default WithRouterLink
```
