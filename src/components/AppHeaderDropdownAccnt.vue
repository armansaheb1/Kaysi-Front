<template>
  <CDropdown v-if="$store.state.isAuthenticated" placement="bottom-end" variant="nav-item">
    <CDropdownToggle class="py-0 pe-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
    </CDropdownToggle>
    <CDropdownMenu style="direction: rtl; float: right; text-align: right;" class="pt-0">

      <CDropdownHeader component="h6" class="bg-body-secondary text-body-secondary fw-semibold my-2">
        Settings
      </CDropdownHeader>
      <CDropdownItem>
        <CIcon icon="cil-user" /> پروفایل
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-dollar" /> موجودی ها
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-file" /> تایید هویت
      </CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem>
        <CIcon href="" icon="cil-lock-locked" /><a style="text-decoration: none;color: var(--cui-dropdown-link-color)"
          href="/logout"> Logout</a>
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown v-else placement="bottom-end" variant="nav-item">
    <CDropdownToggle class="py-0 pe-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
    </CDropdownToggle>
    <CDropdownMenu style="direction: rtl; float: right;" class="pt-0">
      <CDropdownItem @click="$store.state.loginpop = true" style="display: -webkit-inline-box;">
        ورود
      </CDropdownItem>
      <CDropdownItem @click="$store.state.registerpop = true" style="display: -webkit-inline-box;">
        ثبت نام
      </CDropdownItem>

    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,
      itemsCount: 42,
    }
  },
}
</script>
