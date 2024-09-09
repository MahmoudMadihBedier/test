        // Function to fetch data from the backend
        async function fetchStudentData() {
            try {
                const response = await fetch('https://example.com/api/students'); // API endpoint
                const data = await response.json();
        
                // Populate table rows dynamically
                const tableBody = document.getElementById('studentTableBody');
                tableBody.innerHTML = ''; // Clear any existing rows
        
                data.forEach(student => {
                    const row = document.createElement('tr');
        
                    // Create table cells for each property
                    row.innerHTML = `
                        <td>${student.name}</td>
                        <td>${student.grade}</td>
                        <td>${student.sessionNumber}</td>
                        <td><span class="status ${getStatusClass(student.status)}">${student.status}</span></td>
                    `;
        
                    tableBody.appendChild(row);
                });
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        }
        
        // Function to determine the status class based on the student's status
        function getStatusClass(status) {
            if (status === 'success') {
                return 'delivered';
            } else if (status === 'pending') {
                return 'pending';
            } else if (status === 'return') {
                return 'return';
            }
            return '';
        }
        
        // Fetch student data when the page loads
        window.onload = function() {
            fetchStudentData();
        };