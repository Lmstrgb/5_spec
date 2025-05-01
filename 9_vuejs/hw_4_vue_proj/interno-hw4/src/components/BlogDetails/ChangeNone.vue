<template>
  <div>
    <change-kitchen />
    <change-bedroom />
    <change-building />
    <change-architecture />
    <change-planning />
  </div>
</template>

<script>
import ChangeKitchen from './ChangeKitchen.vue'
import ChangeBedroom from './ChangeBedroom.vue'
import ChangeBuilding from './ChangeBuilding.vue'
import ChangeArchitecture from './ChangeArchitecture.vue'
import ChangePlanning from './ChangePlanning.vue'

export default {
  name: 'ChangeNone',
  components: {
    ChangeKitchen,
    ChangeBedroom,
    ChangeBuilding,
    ChangeArchitecture,
    ChangePlanning
  }
}
</script>
