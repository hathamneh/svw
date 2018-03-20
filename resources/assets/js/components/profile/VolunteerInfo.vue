<template>
    <div class="card sidebar-card">
        <div class="card-body">
            <div class="sidebar-section section-bio">
                <div class="section-title">Bio</div>
                {{ volunteer.bio }}
            </div>
            <div class="sidebar-section section-personalInfo">
                <div class="section-title" style="margin: 1rem 0;">Personal Information</div>
                <ul>
                    <li><i class="fa fa-birthday-cake"></i> Born in October 23, 1995</li>
                    <li><i class="fa fa-male"></i> {{ $volunteer->gender }}</li>
                    <li><i class="fa fa-map-marker"></i> Lives in {{ $volunteer->city }}, {{ $volunteer->country }}</li>
                    <li><i class="fa fa-phone"></i> <a href="tel://{{ $volunteer->phone }}">Contact {{ $volunteer->phone }}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "volunteer-info",
        data() {
            return {
                volunteer: {}
            }
        },
        created() {

        }
    }
</script>