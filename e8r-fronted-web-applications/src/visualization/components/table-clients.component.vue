<script>
export default {
  name: "table-clients",
  props: {
    clients: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      maxVisiblePages: 5,
      editJumpBefore: false,
      editJumpAfter: false,
      jumpPageBefore: "",
      jumpPageAfter: ""
    };
  },
  computed: {
    paginatedClients() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.clients.slice(start, start + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.clients.length / this.pageSize);
    },
    visiblePageNumbers() {
      const pages = [];
      const half = Math.floor(this.maxVisiblePages / 2);
      let start = this.currentPage - half;
      let end = this.currentPage + half;

      if (start < 1) {
        start = 1;
        end = this.maxVisiblePages;
      }
      if (end > this.totalPages) {
        end = this.totalPages;
        start = this.totalPages - this.maxVisiblePages + 1;
      }
      start = Math.max(start, 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    }
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    handleJump(page) {
      const pageNumber = parseInt(page);
      if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.goToPage(pageNumber);
      }
      this.editJumpBefore = false;
      this.editJumpAfter = false;
      this.jumpPage = "";
    }
  },

};
</script>

<template>
  <div>
    <table class="clients-table">
      <thead>
      <tr>
        <th>NRO</th>
        <th>NOMBRES Y APELLIDOS</th>
        <th>RUC</th>
        <th>DNI</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(client, index) in paginatedClients" :key="client.id">
        <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
        <td>{{ client.name }}</td>
        <td>{{ client.ruc }}</td>
        <td>{{ client.dni }}</td>
        <td>
          <img
              src="../../assets/icon_more.png"
              alt="Ver más"
              class="icon-btn"
              title="Ver más"
          />
        </td>
      </tr>
      </tbody>
    </table>

    <div class="pagination" style="text-align:center; margin-top:16px;">
      <button
          class="pagination-btn"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
      >
        <img src="../../assets/icon_left.png" alt="Anterior" class="arrow-icon" />
      </button>

      <!-- Página 1 (si está fuera del rango visible) -->
      <button
          v-if="visiblePageNumbers[0] > 1"
          class="pagination-number"
          @click="goToPage(1)"
      >
        1
      </button>
      <span v-if="visiblePageNumbers[0] > 2">
        <span
            v-if="!editJumpBefore"
            class="pagination-ellipsis"
            @click="editJumpBefore = true"
        >
          ...
        </span>
        <input
            v-else
            type="number"
            v-model.number="jumpPage"
            @keyup.enter="handleJump(jumpPage)"
            @blur="handleJump(jumpPage)"
            min="1"
            :max="totalPages"
            class="pagination-input"
        />
      </span>
      <button
          v-for="page in visiblePageNumbers"
          :key="page"
          @click="goToPage(page)"
          :class="['pagination-number', { active: currentPage === page }]"
      >
        {{ page }}
      </button>
      <span v-if="visiblePageNumbers[visiblePageNumbers.length - 1] < totalPages - 1">
        <span
            v-if="!editJumpAfter"
            class="pagination-ellipsis"
            @click="editJumpAfter = true"
        >
          ...
        </span>
        <input
            v-else
            type="number"
            v-model.number="jumpPage"
            @keyup.enter="handleJump(jumpPage)"
            @blur="handleJump(jumpPage)"
            min="1"
            :max="totalPages"
            class="pagination-input"
        />
      </span>
      <button
          v-if="visiblePageNumbers[visiblePageNumbers.length - 1] < totalPages"
          class="pagination-number"
          @click="goToPage(totalPages)"
      >
        {{ totalPages }}
      </button>
      <button
          class="pagination-btn"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
      >
        <img src="../../assets/icon_right.png" alt="Siguiente" class="arrow-icon" />
      </button>
    </div>
  </div>
</template>



<style scoped>
.clients-table {
  width: 80%;
  border-collapse: collapse;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  margin: 0 auto;
}

.clients-table th,
.clients-table td {
  border-left: none;
  border-right: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 8px;
  font-weight: 100;
}

.clients-table th {
  background: #C1B3EC;
  text-align: left;
  border-top: 0.1px solid rgba(0,0,0,0.30);
  border-bottom: 0.1px solid rgba(0,0,0,0.30);
  font-weight: 800;
}


.clients-table th:nth-child(1),
.clients-table td:nth-child(1) {
  width: 50px;
}

.icon-btn {
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
}

.pagination {
  text-align: center;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.pagination-btn {
  background: none;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
}

.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.arrow-icon {
  width: 20px;
  height: 20px;
}

.pagination-number {
  font-family: 'Inter', sans-serif;
  color: #3001C0;
  background: none;
  border: none;
  margin: 0 2px;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.pagination-number.active,
.pagination-number:hover {
  background: #3001C0;
  color: #fff;
  font-weight: 700;
}

.pagination-input {
  width: 50px;
  padding: 2px 4px;
  font-size: 14px;
  text-align: center;
  margin: 0 4px;
}
.pagination-ellipsis {
  cursor: pointer;
  margin: 0 4px;
  user-select: none;
}
</style>