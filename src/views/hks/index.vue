<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="150">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Code" width="100">
        <template slot-scope="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>
      <el-table-column label="name" width="310" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="volume" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.volume }}
        </template>
      </el-table-column>
      <el-table-column  label="percent" width="110" align="center">
        <template slot-scope="scope">
        {{ scope.row.percent }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="volume" label="volume" width="200">
        <template slot-scope="scope">
        {{ scope.row.date }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/hks'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
