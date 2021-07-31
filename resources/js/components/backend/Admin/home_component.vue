<template>
<!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
          <div class="col-12">
            <h4>Image List</h4>
            <button @click="new_image_create_modal" class="btn pull-right text-right btn-primary" style="float:right">Add More</button>
          </div>
           <div class="col-12">
                    <div class="">
                       <table class="table table-striped table-bordered order_item_details_table">
                            <thead>

                                <tr>
                                    <th>No</th>
                                    <th>Image</th>
                                    <th>Upload Date</th>
                                </tr>

                            </thead>
                            <tbody>

                                <tr v-if="image_lists.length>0" v-for="(value,index) in image_lists">
                                    <td>{{index+1}}</td>
                                    <td><img v-if="value.image_url!=null" :src="BASE_URL+'storage/app/public/backend/images/'+value.image_url" alt="No image" class="img-responsive img-thumbnail" width="150" height="100" style="border: 1px solid gray;"></td>
                                    <td>{{value.updated_at }}</td>
                                </tr>
                                <tr v-else>
                                  <td colspan="100%">No Data Found</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
          <!-- right col -->
        </div>
        </div>
        <!-- /.row (main row) -->
      </div><!-- /.container-fluid -->
      <b-modal
      size="lg"
      :hide-backdrop="true"
      title="image Uploader"
      :ok-title="myLang.save"
      :cancel-title="myLang.cancel"
      @ok.prevent="create_new_blog()"
      v-model="image_create_modal" :no-enforce-focus="true">
      <div class="panel-body add_item_body">
        <form enctype="multipart/form-data">
          <div class="form-group row">
    <label for="name" class="col-sm-2 col-form-label">{{myLang.add_image_url}}</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('image_url') }" @change="getPhoto()" v-model="form.image_url">
      <has-error :form="form" field="image_url"></has-error>
      <div v-if="form.errors.has('image_url')" v-html="form.errors.get('image_url')" />
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">{{myLang.preview_image}}</label>
    <div class="col-sm-10">
    <img v-if="form.image_url!='' && form.image_url" class="profile-user-img img-fluid img-circle" :src="getPhoto()" alt="Images">
    </div>
  </div>
 
        </form>
      </div>
      <!-- </div>
        </div>
      </div>-->
    </b-modal>
    </section>
    <!-- /.content -->
</template>

<script>
import Form from 'vform'
    export default {
        data(){
            return {
                home_text:"Welcome",
                activeVal: 'home',
                image_lists:{},
                image_create_modal:false,
                form: new Form({
                    image_url: '',
                })
    };
            },
        methods:{
          
    getPhoto(){
               let photo = (this.form.image_url!='') ? this.form.image_url : this.BASE_URL+'storage/app/public/backend/images/blog_images/'+ this.form.feature_img;
                return photo;
            },
       get_all_images(){
        axios.get(this.BASE_URL +"api/img").then(({data}) => {
          console.log(data);
            this.image_lists = data.data;
        });
    },
    new_image_create_modal(){
      this.form.reset();
      this.image_create_modal = true;
    },
    create_new_blog(){
      this.form.post(this.BASE_URL +'api/img')
                .then((data)=>{
                  console.log(data);
                  if(data.data.error!='1'){
                  this.image_create_modal = false;
                    Fire.$emit('AfterCreateblog');
                    Swal.fire({
            icon: 'success',
            title: 'Image Upload success',
            text: data.msg
        });
        }else{
                    Swal.fire({
            icon: 'warning',
            title: 'Image Invalid',
            text: data.msg
        });
        }

                })
                .catch((error)=>{
                  console.log(error);
                  console.log(this.form.errors);
                  Swal.fire({
            icon: 'warning',
            title: 'Image Invalid',
            text: 'Invalid image info'
        });
                })
    },
        },
        created(){
          this.get_all_images();
            Fire.$on("AfterCreateblog", () => {
              this.get_all_images();
          });
        },
        mounted() {
        }
    }
</script>
